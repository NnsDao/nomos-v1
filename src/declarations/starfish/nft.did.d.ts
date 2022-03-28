import type { Principal } from '@dfinity/principal';
export type AccountIdentifier = string;
export type Amount = { 'ICP' : bigint } |
  { 'NDP' : bigint };
export interface ApproveRequest {
  'token' : TokenIdentifier,
  'subaccount' : [] | [SubAccount],
  'allowance' : Balance,
  'spender' : Principal,
}
export interface Backup {
  'lowestPriceSale' : [bigint, bigint],
  'highestPriceSale' : [bigint, bigint],
  'totalVolume' : [bigint, bigint],
  'listings' : Array<[TokenIndex, Listing__1]>,
  'disbursementsQueue' : Array<Disbursement>,
  '_nextSubAccount' : bigint,
  'transactions' : Array<[bigint, Transaction]>,
  'pendingTransactions' : Array<[TokenIndex, Transaction]>,
}
export interface Backup__1 {
  'lowestPriceSale' : bigint,
  'highestPriceSale' : bigint,
  'totalVolume' : bigint,
  'listings' : Array<[TokenIndex, Listing]>,
  'disbursementsQueue' : Array<Disbursement__1>,
  '_nextSubAccount' : bigint,
  'transactions' : Array<[bigint, Transaction__1]>,
  'pendingTransactions' : Array<[TokenIndex, Transaction__1]>,
}
export interface Backup__2 { 'claims' : Array<[string, bigint]> }
export type Balance = bigint;
export type BalanceResponse = { 'ok' : Balance } |
  { 'err' : CommonError };
export type BearerResponse = { 'ok' : AccountIdentifier } |
  { 'err' : CommonError };
export type ClaimResult = { 'Ok' : bigint } |
  { 'Err' : string };
export type CommonError = { 'InvalidToken' : TokenIdentifier } |
  { 'Other' : string };
export type DetailsResponse = { 'ok' : [AccountIdentifier, [] | [Listing]] } |
  { 'err' : CommonError };
export interface Disbursement {
  'to' : AccountIdentifier,
  'token' : TokenIndex,
  'try_num' : number,
  'from_subaccount' : SubAccount__1,
  'amount' : Amount,
}
export interface Disbursement__1 {
  'to' : AccountIdentifier,
  'token' : TokenIndex,
  'from_subaccount' : SubAccount__2,
  'amount' : bigint,
}
export interface EntrepotTransaction {
  'token' : TokenIdentifier,
  'time' : Time,
  'seller' : Principal,
  'buyer' : AccountIdentifier,
  'price' : bigint,
}
export interface ExtListing {
  'locked' : [] | [Time],
  'seller' : Principal,
  'price' : Price,
}
export interface ExtListing__1 {
  'locked' : [] | [Time],
  'seller' : Principal,
  'price' : bigint,
}
export type FilePath = string;
export type HeaderField = [string, string];
export interface ICP { 'e8s' : bigint }
export interface ListRequest {
  'token' : TokenIdentifier,
  'from_subaccount' : [] | [SubAccount],
  'price' : [] | [Price],
}
export interface ListRequest__1 {
  'token' : TokenIdentifier,
  'from_subaccount' : [] | [SubAccount],
  'price' : [] | [bigint],
}
export type ListResponse = { 'ok' : null } |
  { 'err' : CommonError };
export type ListResponse__1 = { 'ok' : null } |
  { 'err' : CommonError };
export interface Listing {
  'subaccount' : [] | [SubAccount],
  'locked' : [] | [Time],
  'seller' : Principal,
  'price' : bigint,
}
export interface Listing__1 {
  'subaccount' : [] | [SubAccount],
  'locked' : [] | [Time],
  'seller' : Principal,
  'price' : Price,
}
export type ListingsResponse = Array<[TokenIndex, ExtListing, Metadata__2]>;
export type ListingsResponse__1 = Array<
  [TokenIndex, ExtListing__1, Metadata__3]
>;
export interface LocalStableState {
  'metadata' : Array<Metadata>,
  'tokens' : Array<[] | [Token]>,
}
export type LockResponse = { 'ok' : AccountIdentifier } |
  { 'err' : CommonError };
export type LockResponse__1 = { 'ok' : AccountIdentifier } |
  { 'err' : CommonError };
export type Memo = Array<number>;
export interface Meta {
  'name' : string,
  'tags' : Array<Tag>,
  'description' : string,
}
export interface Metadata { 'ink' : string, 'back' : string, 'border' : string }
export type MetadataResponse = { 'ok' : Metadata__1 } |
  { 'err' : CommonError };
export type Metadata__1 = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export type Metadata__2 = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export type Metadata__3 = {
    'fungible' : {
      'decimals' : number,
      'metadata' : [] | [Array<number>],
      'name' : string,
      'symbol' : string,
    }
  } |
  { 'nonfungible' : { 'metadata' : [] | [Array<number>] } };
export interface MintRequest { 'to' : User, 'metadata' : [] | [Array<number>] }
export type MintResponse = { 'ok' : TokenIndex } |
  { 'err' : CommonError };
export type Price = { 'ICP' : bigint } |
  { 'NDP' : bigint };
export interface Request {
  'url' : string,
  'method' : string,
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
}
export interface Request__1 {
  'token' : TokenIdentifier,
  'owner' : User,
  'spender' : Principal,
}
export interface Response {
  'body' : Array<number>,
  'headers' : Array<HeaderField>,
  'streaming_strategy' : [] | [StreamingStrategy],
  'status_code' : number,
}
export type Response__1 = { 'ok' : Balance } |
  { 'err' : CommonError };
export type Result = { 'ok' : null } |
  { 'err' : string };
export type Result_1 = {
    'ok' : Array<[TokenIndex, [] | [Listing], [] | [Array<number>]]>
  } |
  { 'err' : CommonError };
export type Result_2 = { 'ok' : Array<TokenIndex> } |
  { 'err' : CommonError };
export type Result_3 = { 'ok' : null } |
  { 'err' : CommonError };
export type Result_4 = { 'ok' : number } |
  { 'err' : string };
export type Result_5 = {
    'ok' : Array<[TokenIndex, [] | [Listing__1], [] | [Array<number>]]>
  } |
  { 'err' : CommonError };
export type Result_6 = { 'ok' : string } |
  { 'err' : string };
export interface StarfishNFT {
  'addAdmin' : (arg_0: Principal) => Promise<undefined>,
  'addClaim' : (arg_0: AccountIdentifier, arg_1: bigint) => Promise<bigint>,
  'address' : () => Promise<[Principal, string]>,
  'adminKillHeartbeat' : () => Promise<undefined>,
  'adminStartHeartbeat' : () => Promise<undefined>,
  'allowance' : (arg_0: Request__1) => Promise<Response__1>,
  'approve' : (arg_0: ApproveRequest) => Promise<undefined>,
  'balance' : () => Promise<ICP>,
  'bearer' : (arg_0: TokenIdentifier) => Promise<BearerResponse>,
  'claim' : () => Promise<ClaimResult>,
  'claimBackup' : () => Promise<Backup__2>,
  'claimRestore' : (arg_0: Backup__2) => Promise<undefined>,
  'details' : (arg_0: TokenIdentifier) => Promise<DetailsResponse>,
  'disbursementsList' : () => Promise<Array<Disbursement__1>>,
  'entrepotBackup' : () => Promise<Backup__1>,
  'entrepotRestore' : (arg_0: Backup__1) => Promise<undefined>,
  'getAdmins' : () => Promise<Array<Principal>>,
  'getClaims' : () => Promise<bigint>,
  'getTokens' : () => Promise<Array<[TokenIndex, Metadata__1]>>,
  'http_request' : (arg_0: Request) => Promise<Response>,
  'init' : () => Promise<Result>,
  'isAdmin' : (arg_0: Principal) => Promise<boolean>,
  'list' : (arg_0: ListRequest__1) => Promise<ListResponse__1>,
  'listings' : () => Promise<ListingsResponse__1>,
  'lock' : (
      arg_0: TokenIdentifier,
      arg_1: bigint,
      arg_2: AccountIdentifier,
      arg_3: Array<number>,
    ) => Promise<LockResponse__1>,
  'mList' : (arg_0: ListRequest) => Promise<ListResponse>,
  'mListings' : () => Promise<ListingsResponse>,
  'mLock' : (
      arg_0: TokenIdentifier,
      arg_1: Price,
      arg_2: AccountIdentifier,
      arg_3: Array<number>,
    ) => Promise<LockResponse>,
  'mRunCron' : () => Promise<Result_6>,
  'mSettle' : (arg_0: TokenIdentifier) => Promise<Result_3>,
  'mStats' : () => Promise<StatsResponse>,
  'mTokensExt' : (arg_0: AccountIdentifier) => Promise<Result_5>,
  'marketBackup' : () => Promise<Backup>,
  'marketRestore' : (arg_0: Backup) => Promise<undefined>,
  'metadata' : (arg_0: TokenIdentifier) => Promise<MetadataResponse>,
  'mint' : (arg_0: User) => Promise<Result_4>,
  'mintNFT' : (arg_0: MintRequest) => Promise<MintResponse>,
  'ndpBalance' : (arg_0: string) => Promise<BalanceResponse>,
  'payments' : () => Promise<[] | [Array<SubAccount>]>,
  'purgeAssets' : (arg_0: string, arg_1: [] | [string]) => Promise<Result>,
  'readLedger' : () => Promise<Array<[] | [Token]>>,
  'removeAdmin' : (arg_0: Principal) => Promise<undefined>,
  'settle' : (arg_0: TokenIdentifier) => Promise<Result_3>,
  'stats' : () => Promise<
      [bigint, bigint, bigint, bigint, bigint, bigint, bigint]
    >,
  'tokenId' : (arg_0: TokenIndex) => Promise<TokenIdentifier>,
  'tokens' : (arg_0: AccountIdentifier) => Promise<Result_2>,
  'tokensBackup' : () => Promise<LocalStableState>,
  'tokensRestore' : (arg_0: LocalStableState) => Promise<undefined>,
  'tokens_ext' : (arg_0: AccountIdentifier) => Promise<Result_1>,
  'transactions' : () => Promise<Array<EntrepotTransaction>>,
  'transfer' : (arg_0: TransferRequest) => Promise<TransferResponse>,
  'updateAssetThumb' : (arg_0: string, arg_1: FilePath, arg_2: Meta) => Promise<
      Result
    >,
  'upload' : (arg_0: Array<Array<number>>) => Promise<undefined>,
  'uploadClear' : () => Promise<undefined>,
  'uploadFinalize' : (arg_0: string, arg_1: FilePath, arg_2: Meta) => Promise<
      Result
    >,
}
export type Stats = [bigint, bigint, bigint, bigint, bigint, bigint, bigint];
export type StatsResponse = [Stats, Stats];
export type StreamingCallback = (arg_0: StreamingCallbackToken) => Promise<
    StreamingCallbackResponse
  >;
export interface StreamingCallbackResponse {
  'token' : [] | [StreamingCallbackToken],
  'body' : Array<number>,
}
export interface StreamingCallbackToken {
  'key' : string,
  'index' : bigint,
  'content_encoding' : string,
}
export type StreamingStrategy = {
    'Callback' : {
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }
  };
export type SubAccount = Array<number>;
export type SubAccount__1 = Array<number>;
export type SubAccount__2 = Array<number>;
export type Tag = string;
export type Time = bigint;
export interface Token {
  'owner' : AccountIdentifier,
  'createdAt' : bigint,
  'txId' : string,
}
export type TokenIdentifier = string;
export type TokenIndex = number;
export interface Transaction {
  'id' : bigint,
  'to' : AccountIdentifier,
  'closed' : [] | [Time],
  'token' : TokenIdentifier,
  'initiated' : Time,
  'from' : AccountIdentifier,
  'memo' : [] | [Array<number>],
  'seller' : Principal,
  'bytes' : Array<number>,
  'price' : Price,
}
export interface Transaction__1 {
  'id' : bigint,
  'to' : AccountIdentifier,
  'closed' : [] | [Time],
  'token' : TokenIdentifier,
  'initiated' : Time,
  'from' : AccountIdentifier,
  'memo' : [] | [Array<number>],
  'seller' : Principal,
  'bytes' : Array<number>,
  'price' : bigint,
}
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
export type User = { 'principal' : Principal } |
  { 'address' : AccountIdentifier };
export interface _SERVICE extends StarfishNFT {}
