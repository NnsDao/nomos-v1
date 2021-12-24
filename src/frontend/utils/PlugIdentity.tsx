import { message } from 'antd';

const plugActor = async () => {
  (async () => {
    // NNS Canister Id as an example
    const nnsCanisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
    const whitelist = [nnsCanisterId];

    // Initialise Agent, expects no return value
    await window?.ic?.plug?.requestConnect({
      whitelist,
    });

    // A partial Interface factory
    // for the NNS Canister UI
    // Check the `plug authentication - nns` for more

    const nnsPartialInterfaceFactory = ({ IDL }) => {
      const BlockHeight = IDL.Nat64;
      const Stats = IDL.Record({
        latest_transaction_block_height: BlockHeight,
        seconds_since_last_ledger_sync: IDL.Nat64,
        sub_accounts_count: IDL.Nat64,
        hardware_wallet_accounts_count: IDL.Nat64,
        accounts_count: IDL.Nat64,
        earliest_transaction_block_height: BlockHeight,
        transactions_count: IDL.Nat64,
        block_height_synced_up_to: IDL.Opt(IDL.Nat64),
        latest_transaction_timestamp_nanos: IDL.Nat64,
        earliest_transaction_timestamp_nanos: IDL.Nat64,
      });
      return IDL.Service({
        get_stats: IDL.Func([], [Stats], ['query']),
      });
    };

    // Create an actor to interact with the NNS Canister
    // we pass the NNS Canister id and the interface factory
    const NNSUiActor = await window.ic.plug.createActor({
      canisterId: nnsCanisterId,
      interfaceFactory: nnsPartialInterfaceFactory,
    });
    return NNSUiActor;
  })();
};

const onPlug = async () => {
  console.log(window.ic.plug && 'Plug and play!');
  if (window.ic.plug) {
    const result = await window.ic.plug.requestConnect();
    if (result) {
      plugActor();
    }
  } else {
    return message.warning('install plug');
  }
};
export default onPlug;
