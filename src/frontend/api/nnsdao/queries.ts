export const nnsdaoKeys = {
  all: [{ module: 'nnsdao' }] as const,
  userInfo: () => [{ ...nnsdaoKeys.all, scope: 'userInfo' }] as const,
  userInfos: () => [{ ...nnsdaoKeys.userInfos() }] as const,
};
