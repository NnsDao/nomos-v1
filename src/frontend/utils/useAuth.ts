import { useLocation, useNavigate } from 'react-router-dom';
import { useUserStore } from '../hooks/userStore';

export function useAuth() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const userStore = useUserStore();
  const isLogin = userStore.isLogin;
  if (isLogin) return null;

  if (!/login/.test(pathname)) {
    navigate('/login');
  } else {
    navigate('/home');
  }
}
