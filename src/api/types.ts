export type ApiResponse<D> = {
  ok: true;
  data: D;
};

export type ApiErrorResponse = {
  ok: false;
  data: ErrorData;
};

export type ErrorData = {
  code: string;
  message: string;
};

export type SignInData = {
  token: string;
};
