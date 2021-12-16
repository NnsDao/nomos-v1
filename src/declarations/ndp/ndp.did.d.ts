import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type AccountIdentifier__1 = string;
export type Balance = bigint;
export interface BalanceRequest { 'token' : TokenIdentifier, 'user' : User }
export type BalanceResponse = { 'ok' : Balance } |
  { 'err' : CommonError };
export type BlockHeight = bigint;
export type BlockIndex = bigint;
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type Extension = string;
export type HeaderField = [string, string];
export interface HttpResponse {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'status_code' : number,
}
export type List = [] | [[Transaction, List]];
export type Memo = Array<number>;
export type Memo__1 = bigint;
export type Metadata = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export interface NDP { 'e8s' : bigint }
export interface NDPInfo { 'balance' : bigint, 'claim' : bigint }
export interface NDPTest {
  'TT' : (arg_0: bigint, arg_1: string) => Promise<TransferResult>,
  'addClaim' : (arg_0: string, arg_1: bigint) => Promise<Result_2>,
  'addOwner' : (arg_0: Principal) => Promise<Result_2>,
  'allBalances' : () => Promise<Array<[string, Balance]>>,
  'approve' : () => Promise<NDPInfo>,
  'balance' : (arg_0: BalanceRequest) => Promise<BalanceResponse>,
  'claim' : () => Promise<Result_2>,
  'delOwner' : (arg_0: Principal) => Promise<Result_2>,
  'extensions' : () => Promise<Array<Extension>>,
  'getAccountId' : () => Promise<string>,
  'http_request' : () => Promise<HttpResponse>,
  'metadata' : (arg_0: TokenIdentifier) => Promise<Result_1>,
  'mint' : (arg_0: string, arg_1: Balance) => Promise<boolean>,
  'minted' : () => Promise<Balance>,
  'owner' : () => Promise<Array<[Principal, bigint]>>,
  'supply' : (arg_0: TokenIdentifier) => Promise<Result>,
  'transactionRecord' : () => Promise<List>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
}
export type Operation = {
    'Burn' : { 'from' : AccountIdentifier__1, 'amount' : { 'e8s' : bigint } }
  } |
  { 'Mint' : { 'to' : AccountIdentifier__1, 'amount' : { 'e8s' : bigint } } } |
  {
    'Transfer' : {
      'to' : AccountIdentifier__1,
      'fee' : bigint,
      'from' : AccountIdentifier__1,
      'amount' : { 'e8s' : bigint },
    }
  };
export type Result = { 'ok' : Balance } |
  { 'err' : CommonError };
export type Result_1 = { 'ok' : Metadata } |
  { 'err' : CommonError };
export type Result_2 = { 'ok' : boolean } |
  { 'err' : string };
export type SubAccount = Array<number>;
export interface Timestamp { 'timestamp_nanos' : bigint }
export type TokenIdentifier = string;
export interface Transaction {
  'memo' : Memo__1,
  'operation' : Operation,
  'blockHeight' : BlockHeight,
  'caller' : AccountIdentifier__1,
  'created_at_time' : Timestamp,
}
export type TransferError = {
    'TxTooOld' : { 'allowed_window_nanos' : bigint }
  } |
  { 'BadFee' : { 'expected_fee' : NDP } } |
  { 'TxDuplicate' : { 'duplicate_of' : BlockIndex } } |
  { 'TxCreatedInFuture' : null } |
  { 'InsufficientFunds' : { 'balance' : NDP } };
export interface TransferRequest {
  'to' : User,
  'token' : TokenIdentifier,
  'notify' : boolean,
  'from' : User,
  'memo' : Memo,
  'subaccount' : [] | [SubAccount],
  'amount' : Balance,
}
export type TransferResponse = { 'ok' : Balance } |
  {
    'err' : { 'CannotNotify' : AccountIdentifier } |
      { 'InsufficientBalance' : null } |
      { 'InvalidToken' : TokenIdentifier } |
      { 'Rejected' : null } |
      { 'Unauthorized' : AccountIdentifier } |
      { 'Other' : string }
  };
export type TransferResult = { 'Ok' : BlockIndex } |
  { 'Err' : TransferError };
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE extends NDPTest {}
