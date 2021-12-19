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
  async initService() {
    if (this.actor) return;
    let identity = await StoicIdentity.load();
    if (identity === false) {
      identity = await StoicIdentity.connect();
      this.identity = identity;
      this.agent = new HttpAgent({ identity });
      this.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId });
      return;
    }
    this.identity = identity;
    this.agent = new HttpAgent({ identity });
    this.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId });
  }
  // Call This after new
  async login() {
    let identity = await StoicIdentity.load();
    if (identity === false) {
      identity = await StoicIdentity.connect();
    }
    this.identity = identity;
  }

  async approve() {
    await this.initService();
    return this.actor.approve();
  }
  async getBalance(arg: any) {
    await this.initService();
    return this.actor.balance(arg);
  }
  async getClaim() {
    await this.initService();
    return this.actor.claim();
  }
  async getAccountId() {
    await this.initService();
    return this.actor.getAccountId();
  }
  async getMetadata() {
    await this.initService();
    return this.actor.metadata();
  }
  async getTransfer(TransferRequest: string) {
    await this.initService();
    return this.actor.transfer();
  }
  async getMinted() {
    await this.initService();
    return this.actor.minted();
  }

  async getSupply(TokenIdentifier: string) {
    await this.initService();
    return this.actor.supply(TokenIdentifier);
  }

  async getClaimStatus() {
    await this.initService();
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
