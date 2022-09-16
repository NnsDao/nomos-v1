// import { idlFactory } from '../../declarations/ndp/index';

// const plugActor = async () => {
//   (async () => {
//     // NNS Canister Id as an example
//     const nnsCanisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
//     const whitelist = [nnsCanisterId];

//     // Initialise Agent, expects no return value
//     await window?.ic?.plug?.requestConnect({
//       whitelist,
//     });

//     // Create an actor to interact with the NNS Canister
//     // we pass the NNS Canister id and the interface factory
//     const NNSUiActor = await window.ic.plug.createActor({
//       canisterId: nnsCanisterId,
//       interfaceFactory: idlFactory,
//     });
//     // return (await NNSUiActor.initService()).approve();
//     console.log(await NNSUiActor.approve(), 'debug');
//   })();
// };

// const onPlug = async () => {
//   console.log(window.ic.plug && 'Plug and play!');
//   if (window.ic.plug) {
//     const result = await window.ic.plug.requestConnect();
//     console.log(`Plug's user principal Id is ${result}`);
//     if (result) {
//       plugActor();
//     }
//   } else {
//     return message.warning('install plug');
//   }
// };
// export default onPlug;
