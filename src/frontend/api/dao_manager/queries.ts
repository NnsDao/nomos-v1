export const DaoManagerKeys = {
  all: ['DaoManager'] as const,
  lists: () => [...DaoManagerKeys.all, 'list'] as const,
  list: (filters: string) => [...DaoManagerKeys.lists(), { filters }] as const,
  details: () => [...DaoManagerKeys.all, 'detail'] as const,
  detail: (id: number) => [...DaoManagerKeys.details(), id] as const,
};
