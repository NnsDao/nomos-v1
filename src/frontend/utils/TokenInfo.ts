import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../../declarations/ndp/index';
class TokenInfo {
  token: string;
  canisterId: string;
  actor: ImplementedActorMethods;
  constructor(params: ConstructorParams) {
    const { token, canisterId } = params;
    this.token = token;
    this.canisterId = canisterId;
    this.actor = Actor.createActor(idlFactory, { agent: new HttpAgent(), canisterId: this.canisterId });
  }
  getMinted() {
    return this.actor.minted();
  }
  getAccountId() {
    return this.actor.getAccountId();
  }
}

const NDP_TOKEN = 'cf66e87d469890ca0f1f6504eebce076fa587449e9e325dd597b189347c37908';
const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
export default new TokenInfo({
  token: NDP_TOKEN,
  canisterId: canisterId,
});

// Type
// =================================================
interface ConstructorParams {
  token: string;
  canisterId: string;
}
interface ImplementedActorMethods {
  minted: () => Promise<BigInt>;
  approve: () => Promise<unknown>;
  balance: (params: unknown) => Promise<unknown>;
  claim: () => Promise<unknown>;
  getAccountId: () => Promise<string>;
}
