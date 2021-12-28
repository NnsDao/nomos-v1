export const idlFactory = ({ IDL }) => {
  const Token = IDL.Text;
  const Badge__1 = IDL.Record({
    'url' : IDL.Text,
    'token' : Token,
    'data' : IDL.Vec(IDL.Nat8),
    'desc' : IDL.Text,
    'name' : IDL.Text,
    'reputation' : IDL.Nat,
  });
  const MintResp = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : IDL.Nat16,
  });
  const Address = IDL.Text;
  const MintBadge = IDL.Record({ 'token' : Token, 'addr' : Address });
  const Badge = IDL.Service({
    'a' : IDL.Func([IDL.Text], [], []),
    'addBadge' : IDL.Func([Badge__1], [MintResp], []),
    'addOwner' : IDL.Func([IDL.Principal], [Result], []),
    'delOwner' : IDL.Func([IDL.Principal], [Result], []),
    'getAllBadgeList' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(Token, Badge__1))],
        ['query'],
      ),
    'getUserBadgeList' : IDL.Func([], [IDL.Vec(IDL.Opt(Badge__1))], ['query']),
    'http_request' : IDL.Func([], [HttpResponse], ['query']),
    'mintBadge' : IDL.Func([MintBadge], [MintResp], []),
    'owner' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
        ['query'],
      ),
  });
  return Badge;
};
export const init = ({ IDL }) => { return []; };
