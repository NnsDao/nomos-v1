import { getDaoManagerActor } from '../../service';

export const totalDaoList = async () => {
  const actor = await getDaoManagerActor(false);
  try {
    const res = await actor.dao_list();
    console.log('dao_list', res);
    return res;
  } catch (error) {
    console.log('dao_list', error);
    return Promise.reject(null);
  }
};
