import { requestSignIn } from '@/api/signIn';
import { authenticate } from './auth';

type SignInResult = {
  ok: boolean;
  token: string | undefined;
  message: string;
};

export const signIn = async ({
  id,
  password,
}: {
  id: string;
  password: string;
}): Promise<SignInResult> => {
  const response = await requestSignIn({ id, password });
  if (!response.ok) {
    return {
      ok: false,
      token: undefined,
      message: response.data.message,
    };
  }

  const { token } = response.data;
  authenticate(token);
  return {
    ok: true,
    token,
    message: '',
  };
};
