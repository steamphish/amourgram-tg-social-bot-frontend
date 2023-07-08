import { useLazySignInQuery } from '../api/repository';
import { isLoggedIn } from '../tools/auth-tools';
import { SignInFormValues } from '../api/models/auth.model';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const isUserLoggedIn = isLoggedIn();

  const [triggerSignInQuery] = useLazySignInQuery();
  const signIn = async (values: SignInFormValues) => {
    let token: string;
    try {
      const { data, isError, error } = await triggerSignInQuery(values, false);
      if (isError) {
        // @ts-ignore
        toast.error(error.message || 'Wrong e-mail or password. Please correct and try again.');
        return;
      }
      token = data!.token;
      try {
        const decodedToken = jwt_decode(token);
        if (decodedToken) {
          localStorage.setItem('token', token);
        }
      } catch (e) {
        toast.error('Some error during parsing token');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

  return { isUserLoggedIn, signIn, signOut };
};
