import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { StoicIdentity } from 'ic-stoic-identity';
import { idlFactory } from '../../declarations/ndp/index';

class NdpService {
  agent!: HttpAgent;
  identity!: Identity;
  token: string;
  canisterId: string;
  actor!: ImplementedActorMethods;
  constructor(params: ConstructorParams) {
    const { token, canisterId } = params;
    this.token = token;
    this.canisterId = canisterId;
  }
  // Call This after new
  async login() {
    if (this.agent) return this.agent;
    if (window.localStorage.getItem('identity') === 'stoic') {
      this.agent = new HttpAgent();
    } else {
      let identity = await StoicIdentity.load();

      if (identity === false) {
        identity = await StoicIdentity.connect();
      }
      this.identity = identity;
      window.localStorage.setItem('identity', 'stoic');
      this.agent = new HttpAgent({
        identity,
      });
    }
    // initActor(identity);
    this.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId });
    return this.actor;
  }

  approve() {
    return this.actor.approve();
  }
  getBalance(arg: any) {
    return this.actor.balance(arg);
  }
  getClaim() {
    return this.actor.claim();
  }
  getAccountId() {
    return this.actor.getAccountId();
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

  getClaimStatus() {
    return this.actor.claimStatus();
  }
}

const NDP_TOKEN = 'cf66e87d469890ca0f1f6504eebce076fa587449e9e325dd597b189347c37908';
const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
export default new NdpService({
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
  approve: () => Promise<{ addr: string }>;
  // Promise<{ addr: string; balance: bigint; claim: bigint }>;
  balance: (arg: any) => Promise<{ ok: BigInt }>;
  claim: () => Promise<{ err?: ''; ok?: '' }>;
  getAccountId: () => Promise<string>;
  metadata: () => Promise<unknown>;
  transfer: () => Promise<unknown>;
  minted: () => Promise<BigInt>;
  supply: (TokenIdentifier: string) => Promise<unknown>;
  claimStatus: () => Promise<{ ok?: '' }>;
}
