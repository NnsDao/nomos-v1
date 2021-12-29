export const idlFactory = ({ IDL }) => {
  const UserInfo = IDL.Record({
    'signature' : IDL.Text,
    'nickname' : IDL.Text,
    'reputation' : IDL.Nat64,
    'avatar' : IDL.Text,
  });
  const UserBaseInfo = IDL.Record({
    'signature' : IDL.Text,
    'nickname' : IDL.Text,
    'avatar' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Bool, 'err' : IDL.Text });
  const User = IDL.Service({
    'getUserInfo' : IDL.Func([], [UserInfo], ['query']),
    'setUserInfo' : IDL.Func([UserBaseInfo], [Result], []),
  });
  return User;
};
export const init = ({ IDL }) => { return []; };
