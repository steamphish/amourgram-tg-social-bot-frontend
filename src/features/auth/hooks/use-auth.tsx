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
      const { data } = await triggerSignInQuery(values, false);
      token = data!.token;
    } catch (e) {
      token =
        'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiZW1haWwiOiJzdXBlci5hZG1pbkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IlN1cGVyIEFkbWluIiwiZXhwIjoyNjgzNTAyNzUwLCJpYXQiOjE2ODM1MDA5NTB9.M9q4ztEg3vkjcgIHu3R0uwimk_zJ9lLbgOVeCtU7GE_rAJsbq_Ca6xnjscRfVkp_i2NZ-oyRljEopnNV8_GL9g';
      console.log('Do not forget remove this try catch after dev env implementation!');
    }

    //TODO remove comments after dev env implementation
    // if (!data) {
    //   throw new Error('No data in query');
    // }
    try {
      const decodedToken = jwt_decode(token);
      if (decodedToken) {
        localStorage.setItem('token', token);
      }
    } catch (e) {
      toast.error('Some error during parsing token');
    }
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

  return { isUserLoggedIn, signIn, signOut };
};
