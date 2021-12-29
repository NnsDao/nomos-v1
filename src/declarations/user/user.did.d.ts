import type { Principal } from '@dfinity/principal';
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export interface User {
  'addOwner' : (arg_0: Principal) => Promise<Result>,
  'delOwner' : (arg_0: Principal) => Promise<Result>,
  'getUserInfo' : () => Promise<UserInfo>,
  'login' : () => Promise<Result>,
  'owner' : () => Promise<Array<[Principal, bigint]>>,
  'setUserInfo' : (arg_0: UserBaseInfo) => Promise<Result>,
}
export interface UserBaseInfo {
  'principal' : Principal,
  'signature' : string,
  'nickname' : string,
  'address' : string,
  'avatar' : string,
}
export interface UserInfo {
  'principal' : Principal,
  'signature' : string,
  'nickname' : string,
  'reputation' : bigint,
  'address' : string,
  'avatar' : string,
}
export interface _SERVICE extends User {}
