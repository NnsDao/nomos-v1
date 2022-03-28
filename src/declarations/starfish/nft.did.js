export const idlFactory = ({ IDL }) => {
  const AccountIdentifier = IDL.Text;
  const TokenIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const Request__1 = IDL.Record({
    'token' : TokenIdentifier,
    'owner' : User,
    'spender' : IDL.Principal,
  });
  const Balance = IDL.Nat;
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Response__1 = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const SubAccount = IDL.Vec(IDL.Nat8);
  const ApproveRequest = IDL.Record({
    'token' : TokenIdentifier,
    'subaccount' : IDL.Opt(SubAccount),
    'allowance' : Balance,
    'spender' : IDL.Principal,
  });
  const ICP = IDL.Record({ 'e8s' : IDL.Nat64 });
  const BearerResponse = IDL.Variant({
    'ok' : AccountIdentifier,
    'err' : CommonError,
  });
  const ClaimResult = IDL.Variant({ 'Ok' : IDL.Nat64, 'Err' : IDL.Text });
  const Backup__2 = IDL.Record({
    'claims' : IDL.Vec(IDL.Tuple(IDL.Text, IDL.Nat64)),
  });
  const Time = IDL.Int;
  const Listing = IDL.Record({
    'subaccount' : IDL.Opt(SubAccount),
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : IDL.Nat64,
  });
  const DetailsResponse = IDL.Variant({
    'ok' : IDL.Tuple(AccountIdentifier, IDL.Opt(Listing)),
    'err' : CommonError,
  });
  const TokenIndex = IDL.Nat32;
  const SubAccount__2 = IDL.Vec(IDL.Nat8);
  const Disbursement__1 = IDL.Record({
    'to' : AccountIdentifier,
    'token' : TokenIndex,
    'from_subaccount' : SubAccount__2,
    'amount' : IDL.Nat64,
  });
  const Transaction__1 = IDL.Record({
    'id' : IDL.Nat,
    'to' : AccountIdentifier,
    'closed' : IDL.Opt(Time),
    'token' : TokenIdentifier,
    'initiated' : Time,
    'from' : AccountIdentifier,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'seller' : IDL.Principal,
    'bytes' : IDL.Vec(IDL.Nat8),
    'price' : IDL.Nat64,
  });
  const Backup__1 = IDL.Record({
    'lowestPriceSale' : IDL.Nat64,
    'highestPriceSale' : IDL.Nat64,
    'totalVolume' : IDL.Nat64,
    'listings' : IDL.Vec(IDL.Tuple(TokenIndex, Listing)),
    'disbursementsQueue' : IDL.Vec(Disbursement__1),
    '_nextSubAccount' : IDL.Nat,
    'transactions' : IDL.Vec(IDL.Tuple(IDL.Nat, Transaction__1)),
    'pendingTransactions' : IDL.Vec(IDL.Tuple(TokenIndex, Transaction__1)),
  });
  const Metadata__1 = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const Request = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const StreamingCallbackToken = IDL.Record({
    'key' : IDL.Text,
    'index' : IDL.Nat,
    'content_encoding' : IDL.Text,
  });
  const StreamingCallbackResponse = IDL.Record({
    'token' : IDL.Opt(StreamingCallbackToken),
    'body' : IDL.Vec(IDL.Nat8),
  });
  const StreamingCallback = IDL.Func(
      [StreamingCallbackToken],
      [StreamingCallbackResponse],
      ['query'],
    );
  const StreamingStrategy = IDL.Variant({
    'Callback' : IDL.Record({
      'token' : StreamingCallbackToken,
      'callback' : StreamingCallback,
    }),
  });
  const Response = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'streaming_strategy' : IDL.Opt(StreamingStrategy),
    'status_code' : IDL.Nat16,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : IDL.Text });
  const ListRequest__1 = IDL.Record({
    'token' : TokenIdentifier,
    'from_subaccount' : IDL.Opt(SubAccount),
    'price' : IDL.Opt(IDL.Nat64),
  });
  const ListResponse__1 = IDL.Variant({ 'ok' : IDL.Null, 'err' : CommonError });
  const ExtListing__1 = IDL.Record({
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : IDL.Nat64,
  });
  const Metadata__3 = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const ListingsResponse__1 = IDL.Vec(
    IDL.Tuple(TokenIndex, ExtListing__1, Metadata__3)
  );
  const LockResponse__1 = IDL.Variant({
    'ok' : AccountIdentifier,
    'err' : CommonError,
  });
  const Price = IDL.Variant({ 'ICP' : IDL.Nat64, 'NDP' : IDL.Nat64 });
  const ListRequest = IDL.Record({
    'token' : TokenIdentifier,
    'from_subaccount' : IDL.Opt(SubAccount),
    'price' : IDL.Opt(Price),
  });
  const ListResponse = IDL.Variant({ 'ok' : IDL.Null, 'err' : CommonError });
  const ExtListing = IDL.Record({
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : Price,
  });
  const Metadata__2 = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const ListingsResponse = IDL.Vec(
    IDL.Tuple(TokenIndex, ExtListing, Metadata__2)
  );
  const LockResponse = IDL.Variant({
    'ok' : AccountIdentifier,
    'err' : CommonError,
  });
  const Result_6 = IDL.Variant({ 'ok' : IDL.Text, 'err' : IDL.Text });
  const Result_3 = IDL.Variant({ 'ok' : IDL.Null, 'err' : CommonError });
  const Stats = IDL.Tuple(
    IDL.Nat64,
    IDL.Nat64,
    IDL.Nat64,
    IDL.Nat64,
    IDL.Nat,
    IDL.Nat,
    IDL.Nat,
  );
  const StatsResponse = IDL.Tuple(Stats, Stats);
  const Listing__1 = IDL.Record({
    'subaccount' : IDL.Opt(SubAccount),
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : Price,
  });
  const Result_5 = IDL.Variant({
    'ok' : IDL.Vec(
      IDL.Tuple(TokenIndex, IDL.Opt(Listing__1), IDL.Opt(IDL.Vec(IDL.Nat8)))
    ),
    'err' : CommonError,
  });
  const SubAccount__1 = IDL.Vec(IDL.Nat8);
  const Amount = IDL.Variant({ 'ICP' : IDL.Nat64, 'NDP' : IDL.Nat64 });
  const Disbursement = IDL.Record({
    'to' : AccountIdentifier,
    'token' : TokenIndex,
    'try_num' : IDL.Nat8,
    'from_subaccount' : SubAccount__1,
    'amount' : Amount,
  });
  const Transaction = IDL.Record({
    'id' : IDL.Nat,
    'to' : AccountIdentifier,
    'closed' : IDL.Opt(Time),
    'token' : TokenIdentifier,
    'initiated' : Time,
    'from' : AccountIdentifier,
    'memo' : IDL.Opt(IDL.Vec(IDL.Nat8)),
    'seller' : IDL.Principal,
    'bytes' : IDL.Vec(IDL.Nat8),
    'price' : Price,
  });
  const Backup = IDL.Record({
    'lowestPriceSale' : IDL.Tuple(IDL.Nat64, IDL.Nat64),
    'highestPriceSale' : IDL.Tuple(IDL.Nat64, IDL.Nat64),
    'totalVolume' : IDL.Tuple(IDL.Nat64, IDL.Nat64),
    'listings' : IDL.Vec(IDL.Tuple(TokenIndex, Listing__1)),
    'disbursementsQueue' : IDL.Vec(Disbursement),
    '_nextSubAccount' : IDL.Nat,
    'transactions' : IDL.Vec(IDL.Tuple(IDL.Nat, Transaction)),
    'pendingTransactions' : IDL.Vec(IDL.Tuple(TokenIndex, Transaction)),
  });
  const MetadataResponse = IDL.Variant({
    'ok' : Metadata__1,
    'err' : CommonError,
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Nat32, 'err' : IDL.Text });
  const MintRequest = IDL.Record({
    'to' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const MintResponse = IDL.Variant({ 'ok' : TokenIndex, 'err' : CommonError });
  const BalanceResponse = IDL.Variant({ 'ok' : Balance, 'err' : CommonError });
  const Token = IDL.Record({
    'owner' : AccountIdentifier,
    'createdAt' : IDL.Int,
    'txId' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Vec(TokenIndex),
    'err' : CommonError,
  });
  const Metadata = IDL.Record({
    'ink' : IDL.Text,
    'back' : IDL.Text,
    'border' : IDL.Text,
  });
  const LocalStableState = IDL.Record({
    'metadata' : IDL.Vec(Metadata),
    'tokens' : IDL.Vec(IDL.Opt(Token)),
  });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Vec(
      IDL.Tuple(TokenIndex, IDL.Opt(Listing), IDL.Opt(IDL.Vec(IDL.Nat8)))
    ),
    'err' : CommonError,
  });
  const EntrepotTransaction = IDL.Record({
    'token' : TokenIdentifier,
    'time' : Time,
    'seller' : IDL.Principal,
    'buyer' : AccountIdentifier,
    'price' : IDL.Nat64,
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const TransferRequest = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferResponse = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const FilePath = IDL.Text;
  const Tag = IDL.Text;
  const Meta = IDL.Record({
    'name' : IDL.Text,
    'tags' : IDL.Vec(Tag),
    'description' : IDL.Text,
  });
  const StarfishNFT = IDL.Service({
    'addAdmin' : IDL.Func([IDL.Principal], [], []),
    'addClaim' : IDL.Func([AccountIdentifier, IDL.Nat64], [IDL.Nat64], []),
    'address' : IDL.Func([], [IDL.Principal, IDL.Text], []),
    'adminKillHeartbeat' : IDL.Func([], [], []),
    'adminStartHeartbeat' : IDL.Func([], [], []),
    'allowance' : IDL.Func([Request__1], [Response__1], []),
    'approve' : IDL.Func([ApproveRequest], [], []),
    'balance' : IDL.Func([], [ICP], []),
    'bearer' : IDL.Func([TokenIdentifier], [BearerResponse], ['query']),
    'claim' : IDL.Func([], [ClaimResult], []),
    'claimBackup' : IDL.Func([], [Backup__2], []),
    'claimRestore' : IDL.Func([Backup__2], [], []),
    'details' : IDL.Func([TokenIdentifier], [DetailsResponse], ['query']),
    'disbursementsList' : IDL.Func([], [IDL.Vec(Disbursement__1)], []),
    'entrepotBackup' : IDL.Func([], [Backup__1], ['query']),
    'entrepotRestore' : IDL.Func([Backup__1], [], []),
    'getAdmins' : IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    'getClaims' : IDL.Func([], [IDL.Nat64], []),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata__1))],
        ['query'],
      ),
    'http_request' : IDL.Func([Request], [Response], ['query']),
    'init' : IDL.Func([], [Result], []),
    'isAdmin' : IDL.Func([IDL.Principal], [IDL.Bool], ['query']),
    'list' : IDL.Func([ListRequest__1], [ListResponse__1], []),
    'listings' : IDL.Func([], [ListingsResponse__1], ['query']),
    'lock' : IDL.Func(
        [TokenIdentifier, IDL.Nat64, AccountIdentifier, IDL.Vec(IDL.Nat8)],
        [LockResponse__1],
        [],
      ),
    'mList' : IDL.Func([ListRequest], [ListResponse], []),
    'mListings' : IDL.Func([], [ListingsResponse], ['query']),
    'mLock' : IDL.Func(
        [TokenIdentifier, Price, AccountIdentifier, IDL.Vec(IDL.Nat8)],
        [LockResponse],
        [],
      ),
    'mRunCron' : IDL.Func([], [Result_6], []),
    'mSettle' : IDL.Func([TokenIdentifier], [Result_3], []),
    'mStats' : IDL.Func([], [StatsResponse], ['query']),
    'mTokensExt' : IDL.Func([AccountIdentifier], [Result_5], ['query']),
    'marketBackup' : IDL.Func([], [Backup], ['query']),
    'marketRestore' : IDL.Func([Backup], [], []),
    'metadata' : IDL.Func([TokenIdentifier], [MetadataResponse], ['query']),
    'mint' : IDL.Func([User], [Result_4], []),
    'mintNFT' : IDL.Func([MintRequest], [MintResponse], []),
    'ndpBalance' : IDL.Func([IDL.Text], [BalanceResponse], []),
    'payments' : IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount))], ['query']),
    'purgeAssets' : IDL.Func([IDL.Text, IDL.Opt(IDL.Text)], [Result], []),
    'readLedger' : IDL.Func([], [IDL.Vec(IDL.Opt(Token))], []),
    'removeAdmin' : IDL.Func([IDL.Principal], [], []),
    'settle' : IDL.Func([TokenIdentifier], [Result_3], []),
    'stats' : IDL.Func(
        [],
        [IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat64, IDL.Nat, IDL.Nat, IDL.Nat],
        ['query'],
      ),
    'tokenId' : IDL.Func([TokenIndex], [TokenIdentifier], ['query']),
    'tokens' : IDL.Func([AccountIdentifier], [Result_2], ['query']),
    'tokensBackup' : IDL.Func([], [LocalStableState], ['query']),
    'tokensRestore' : IDL.Func([LocalStableState], [], ['oneway']),
    'tokens_ext' : IDL.Func([AccountIdentifier], [Result_1], ['query']),
    'transactions' : IDL.Func([], [IDL.Vec(EntrepotTransaction)], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
    'updateAssetThumb' : IDL.Func([IDL.Text, FilePath, Meta], [Result], []),
    'upload' : IDL.Func([IDL.Vec(IDL.Vec(IDL.Nat8))], [], []),
    'uploadClear' : IDL.Func([], [], []),
    'uploadFinalize' : IDL.Func([IDL.Text, FilePath, Meta], [Result], []),
  });
  return StarfishNFT;
};
export const init = ({ IDL }) => {
  return [
    IDL.Principal,
    IDL.Opt(IDL.Text),
    IDL.Record({
      'name' : IDL.Text,
      'description' : IDL.Text,
      'artists' : IDL.Vec(IDL.Text),
      'supply' : IDL.Nat16,
      'flavour' : IDL.Text,
    }),
  ];
};
