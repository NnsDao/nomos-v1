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

  approve() {
    return this.actor.approve();
  }
  getBalance() {
    return this.actor.balance();
  }
  getClaim() {
    return this.actor.claim();
  }
  getAccountId(pid: string) {
    return this.actor.getAccountId(pid);
  }
  getMetadata() {
    return this.actor.metadata();
  }
  getTransfer(TransferRequest: string) {
    return this.actor.transfer();
  }
  getMinted() {
    return this.actor.minted();
  }

  getSupply(TokenIdentifier: string) {
    return this.actor.supply(TokenIdentifier);
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
  approve: () => Promise<unknown>;
  balance: () => Promise<unknown>;
  claim: () => Promise<unknown>;
  getAccountId: (pid: string) => Promise<string>;
  metadata: () => Promise<unknown>;
  transfer: () => Promise<unknown>;
  minted: () => Promise<BigInt>;
  supply: (TokenIdentifier: string) => Promise<unknown>;
}
