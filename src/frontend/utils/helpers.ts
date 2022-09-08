type QueryItemType = Record<string, string | number>;
type QueryType = [QueryItemType];

export function composeQueryKeys(baseQuery: QueryType, params?: QueryItemType): QueryType {
  if (!params) {
    return [{ ...baseQuery[0] }];
  }
  return [{ ...baseQuery[0], ...params }];
}
