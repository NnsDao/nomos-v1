export const DaoManagerKeys = {
  all: [{ module: 'DaoManager' }] as const,
  lists: () => [{ ...DaoManagerKeys.all, scope: 'lists' }] as const,
  list: (filters: string) => [{ ...DaoManagerKeys.lists(), filters }] as const,
  details: () => [{ ...DaoManagerKeys.all, scope: 'detail' }] as const,
  detail: (id: number) => [{ ...DaoManagerKeys.details(), id }] as const,
};
