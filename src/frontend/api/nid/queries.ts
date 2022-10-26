import { composeQueryKeys } from '../../utils/helpers';

const module = 'nid';

export const NIDKeys = {
  all: composeQueryKeys([{ module }]),
  userInfo: () => composeQueryKeys(NIDKeys.all, { scope: 'userinfo' }),
};
