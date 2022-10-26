import { plugLogout, stoicLogout } from '@nnsdao/nnsdao-kit';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from './userStore';

export function useCommonLogout() {
  const userStore = useUserStore();
  const navigate = useNavigate();

  const logout = async () => {
    const loginType = storage.get('loginType');
    if (loginType == 'plug') {
      try {
        await plugLogout();
      } catch (error) {
        console.error('logout error', error);
      }
    } else if (loginType == 'stoic') {
      await stoicLogout();
    }
    userStore.dispatch({ type: 'logout' });
    navigate('/home');
  };
  return { logout };
}
