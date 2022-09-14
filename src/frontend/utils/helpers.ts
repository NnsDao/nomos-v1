type QueryItemType = Record<string, string | number>;
type QueryType = [QueryItemType];

export function composeQueryKeys(baseQuery: QueryType, params?: QueryItemType): QueryType {
  if (!params) {
    return [{ ...baseQuery[0] }];
  }
  return [{ ...baseQuery[0], ...params }];
}

export function daoListFilter(list, filter) {
  return list.filter(item => {
    let pass = false;
    filter = filter.replace(/\s+/g, '');
    if (!filter) return true;
    for (const tag of item.tags) {
      if (new RegExp(tag, 'ig').test(filter)) {
        pass = true;
        break;
      }
    }
    return pass;
  });
}
