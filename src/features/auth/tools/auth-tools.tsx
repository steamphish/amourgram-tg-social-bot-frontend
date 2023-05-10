import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';

export const isLoggedIn = () => {
  const token = localStorage.getItem('token');
  if (token) {
    try {
      const decodedToken = jwt_decode(token);
      // @ts-ignore
      if (decodedToken.exp < Date.now() / 1000) {
        logout();
      } else {
        return true;
      }
    } catch (e) {
      toast.error('Someone put broken token to local storage');
    }
  } else {
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  window.location.href = '/login';
};
