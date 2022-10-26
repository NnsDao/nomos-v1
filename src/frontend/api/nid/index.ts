import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getNIDActor } from '../../service';
import { NIDKeys } from './queries';

// Hooks

export const useNidInfo = () => {
  const queryClient = useQueryClient();
  return useQuery(
    NIDKeys.userInfo(),
    async ({ queryKey }) => {
      const { module, scope } = queryKey[0];
      const actor = await getNIDActor(true);
      const res = await actor.user_info();

      console.log('nid info', res);
      if ('Ok' in res) {
        // res.Ok.wallet.forEach(wallet => {
        //   wallet.push(principalIdToAccountId(wallet[2]));
        // });
        return res.Ok;
      }
      return Promise.reject(res.Err);
    },
    {
      staleTime: Infinity,
    }
  );
};
