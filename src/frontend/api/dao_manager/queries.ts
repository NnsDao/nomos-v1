export const DaoManagerKeys = {
  all: [{ module: 'DaoManager' }] as const,
  lists: () => [{ ...DaoManagerKeys.all[0], scope: 'lists' }] as const,
  list: (filters: string) => [{ ...DaoManagerKeys.lists()[0], filters }] as const,
  details: () => [{ ...DaoManagerKeys.all[0], scope: 'detail' }] as const,
  detail: (id: number) => [{ ...DaoManagerKeys.details()[0], id }] as const,
};
