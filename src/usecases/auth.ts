import { http } from '@/lib/http';
import { authDispatch } from '@/store/auth';

export const authenticate = (token: string) => {
  authDispatch({ type: 'AUTHENTICATE' });
  http.setToken(token);
};

export const signOut = () => {
  authDispatch({ type: 'SIGN_OUT' });
  http.removeToken();
};
