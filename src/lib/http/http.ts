import ky from 'ky';
import { API_ORIGIN } from '@/config/env';
import { HttpOptionsWithBody, HttpResponse } from './types';

const httpClient = ky.create({
  prefixUrl: API_ORIGIN,
  throwHttpErrors: false,
});

export const http = async (
  input: string,
  options: HttpOptionsWithBody,
): Promise<HttpResponse> => {
  const kyOptions = {
    method: options.method,
    json: options.body,
  };
  const response = await httpClient(input, kyOptions);
  const { status } = response;
  const data = await response.json();
  return {
    status,
    data,
  };
};
