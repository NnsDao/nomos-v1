export const idlFactory = ({ IDL }) => {
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const UserInfo = IDL.Record({
    'principal' : IDL.Principal,
    'signature' : IDL.Text,
    'nickname' : IDL.Text,
    'reputation' : IDL.Nat,
    'address' : IDL.Text,
    'index' : IDL.Nat64,
    'avatar' : IDL.Text,
  });
  const UserBaseInfo = IDL.Record({
    'principal' : IDL.Principal,
    'signature' : IDL.Text,
    'nickname' : IDL.Text,
    'address' : IDL.Text,
    'avatar' : IDL.Text,
  });
  const User = IDL.Service({
    'addOwner' : IDL.Func([IDL.Principal], [Result], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'delOwner' : IDL.Func([IDL.Principal], [Result], []),
    'getAddr' : IDL.Func([IDL.Principal], [IDL.Text], []),
    'getUserInfo' : IDL.Func([], [UserInfo], []),
    'owner' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat64))],
        ['query'],
      ),
    'setUserInfo' : IDL.Func([UserBaseInfo], [Result], []),
  });
  return User;
};
export const init = ({ IDL }) => { return []; };
