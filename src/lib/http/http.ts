import ky from 'ky';
import { API_ORIGIN } from '@/config/env';
import { IHttp, HttpOptionsWithBody, HttpResponse } from './types';

const httpClient = ky.create({
  prefixUrl: API_ORIGIN,
  throwHttpErrors: false,
});

class Http implements IHttp {
  private token = '';

  async request(
    input: string,
    options: HttpOptionsWithBody,
  ): Promise<HttpResponse> {
    const headers: { [key: string]: string } = {};

    if (this.hasToken) {
      headers.Authorization = `Bearer ${this.token}`;
    }

    const kyOptions = {
      method: options.method,
      json: options.body,
      headers,
    };
    const response = await httpClient(input, kyOptions);
    const { status } = response;
    const data = await response.json();
    return {
      status,
      data,
    };
  }

  private get hasToken() {
    return this.token.length > 0;
  }

  setToken(token: string) {
    this.token = token;
    return this;
  }

  removeToken() {
    this.token = '';
    return this;
  }
}

export const http = new Http();
