export interface HttpOptionsWithBody {
  method: 'post';
  body: unknown;
}

export type HttpResponse = {
  status: number;
  data: { [key: string]: unknown };
};
