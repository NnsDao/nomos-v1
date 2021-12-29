import type { Principal } from '@dfinity/principal';
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export interface User {
  'getUserInfo' : () => Promise<UserInfo>,
  'setUserInfo' : (arg_0: UserBaseInfo) => Promise<Result>,
}
export interface UserBaseInfo {
  'signature' : string,
  'nickname' : string,
  'avatar' : string,
}
export interface UserInfo {
  'signature' : string,
  'nickname' : string,
  'reputation' : bigint,
  'avatar' : string,
}
export interface _SERVICE extends User {}
