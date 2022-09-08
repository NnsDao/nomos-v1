import { composeQueryKeys } from '../../utils/helpers';

const module = 'dao_manager';
export const daoManagerKeys = {
  all: composeQueryKeys([{ module }]),
  lists: () => composeQueryKeys(daoManagerKeys.all, { scope: 'lists' }),
  payInfo: () => composeQueryKeys(daoManagerKeys.all, { scope: 'payInfo' }),
  status: (cid: string) => composeQueryKeys(daoManagerKeys.lists(), { cid }),
};
