import { http } from '@/lib/http';
import { ApiResponse, SignInData, ApiErrorResponse } from './types';

export const requestSignIn = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}): Promise<ApiResponse<SignInData> | ApiErrorResponse> => {
  const body = { id, password };
  const { status, data } = await http.request('sign-in', {
    method: 'post',
    body,
  });
  if (status === 200) {
    return {
      ok: true,
      data: {
        token: data.token as string,
      },
    };
  } else {
    return {
      ok: false,
      data: {
        code: data.code as string,
        message: data.message as string,
      },
    };
  }
};
