import { useLocation, useNavigate } from 'react-router-dom';

export function useAuth() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  let isLogin = Boolean(Number(window.localStorage.getItem('isLogin')));
  if (isLogin) return null;
  const logonTime = Number(window.localStorage.getItem('logonTime') ? window.localStorage.getItem('logonTime') : '');
  const expirationTime = 1000 * 60 * 60;

  const resetLocal = () => {
    if (Number(new Date().getTime()) - logonTime > expirationTime) {
      window.localStorage.setItem('usePrincipal', 'false');
      window.localStorage.setItem('isLogin', '0');
      window.localStorage.setItem('logonTime', '0');
    }
  };
  if (!/login/.test(pathname)) {
    navigate('/login');
    return null;
  } else {
    navigate('/home');
    return null;
  }
}
