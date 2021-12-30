export const idlFactory = ({ IDL }) => {
  const Token = IDL.Text;
  const Badge__1 = IDL.Record({
    'url' : IDL.Text,
    'token' : Token,
    'data' : IDL.Text,
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'reputation' : IDL.Nat,
  });
  const MintResp = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'headers' : IDL.Vec(HeaderField),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : IDL.Nat16,
  });
  const Address = IDL.Text;
  const MintBadge = IDL.Record({ 'token' : Token, 'addr' : Address });
  const Badge = IDL.Service({
    'addBadge' : IDL.Func([Badge__1], [MintResp], []),
    'addOwner' : IDL.Func([IDL.Principal], [Result], []),
    'addOwnerActor' : IDL.Func([IDL.Principal], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'delOwner' : IDL.Func([IDL.Principal], [Result], []),
    'delOwnerActor' : IDL.Func([IDL.Principal], [Result], []),
    'getAddr' : IDL.Func([IDL.Principal], [IDL.Text], ['query']),
    'getAllBadgeList' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Token, Badge__1))],
        ['query'],
      ),
    'getUserBadgeList' : IDL.Func(
        [IDL.Principal],
        [IDL.Vec(IDL.Opt(Badge__1))],
        ['query'],
      ),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'mintBadge' : IDL.Func([MintBadge], [MintResp], []),
    'owner' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
        ['query'],
      ),
    'ownerActor' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
        ['query'],
      ),
  });
  return Badge;
};
export const init = ({ IDL }) => { return []; };
