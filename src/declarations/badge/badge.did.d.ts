import type { Principal } from '@dfinity/principal';
export type Address = string;
export interface Badge {
  'addBadge' : (arg_0: Badge__1) => Promise<MintResp>,
  'addOwner' : (arg_0: Principal) => Promise<Result>,
  'addOwnerActor' : (arg_0: Principal) => Promise<Result>,
  'availableCycles' : () => Promise<bigint>,
  'delOwner' : (arg_0: Principal) => Promise<Result>,
  'delOwnerActor' : (arg_0: Principal) => Promise<Result>,
  'getAddr' : (arg_0: Principal) => Promise<string>,
  'getAllBadgeList' : () => Promise<Array<[Token, Badge__1]>>,
  'getUserBadgeList' : (arg_0: Principal) => Promise<Array<[] | [Badge__1]>>,
  'http_request' : (arg_0: HttpRequest) => Promise<HttpResponse>,
  'mintBadge' : (arg_0: MintBadge) => Promise<MintResp>,
  'owner' : () => Promise<Array<[Principal, bigint]>>,
  'ownerActor' : () => Promise<Array<[Principal, bigint]>>,
}
export interface Badge__1 {
  'url' : string,
  'token' : Token,
  'data' : string,
  'desc' : string,
  'name' : string,
  'reputation' : bigint,
}
export type HeaderField = [string, string];
export interface HttpRequest {
  'url' : string,
  'method' : string,
  'headers' : Array<HeaderField>,
}
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
