import type { Principal } from '@dfinity/principal';
export type Address = string;
export interface Badge {
  'a' : (arg_0: string) => Promise<undefined>,
  'addBadge' : (arg_0: Badge__1) => Promise<MintResp>,
  'addOwner' : (arg_0: Principal) => Promise<Result>,
  'delOwner' : (arg_0: Principal) => Promise<Result>,
  'getAllBadgeList' : () => Promise<Array<[Token, Badge__1]>>,
  'getUserBadgeList' : () => Promise<Array<[] | [Badge__1]>>,
  'http_request' : () => Promise<HttpResponse>,
  'mintBadge' : (arg_0: MintBadge) => Promise<MintResp>,
  'owner' : () => Promise<Array<[Principal, bigint]>>,
}
export interface Badge__1 {
  'url' : string,
  'token' : Token,
  'data' : Array<number>,
  'desc' : string,
  'name' : string,
  'reputation' : bigint,
}
export type HeaderField = [string, string];
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'status_code' : number,
}
export interface MintBadge { 'token' : Token, 'addr' : Address }
export type MintResp = { 'ok' : string } |
  { 'err' : string };
export type Result = { 'ok' : boolean } |
  { 'err' : string };
export type Token = string;
export interface _SERVICE extends Badge {}
