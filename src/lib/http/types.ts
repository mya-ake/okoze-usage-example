export interface IHttp {
  request(input: string, options: HttpOptionsWithBody): Promise<HttpResponse>;

  setToken(token: string): this;
  removeToken(): this;
}

export interface HttpOptionsWithBody {
  method: 'post';
  body: unknown;
}

export type HttpResponse = {
  status: number;
  data: { [key: string]: unknown };
};
