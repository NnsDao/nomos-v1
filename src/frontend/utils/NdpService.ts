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
    if (this.actor) return this.actor;
    // Fetch auth identity,if Not authorized identity will be false, need auth
    let identity = await StoicIdentity.load();
    if (identity === false) {
      // Has not beed authorized,
      identity = await StoicIdentity.connect();
    } else {
      this.agent = new HttpAgent({ identity });
    }
    this.identity = identity;
    return (this.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId }));
  }
  async login() {
    await this.initService();
  }
  async approve() {
    return (await this.initService()).approve();
  }
  async getBalance(arg: any) {
    return (await this.initService()).balance(arg);
  }
  async getClaim() {
    return (await this.initService()).claim();
  }
  async getAccountId() {
    return (await this.initService()).getAccountId();
  }
  async getMetadata() {
    return (await this.initService()).metadata();
  }
  async getTransfer(TransferRequest: string) {
    return (await this.initService()).transfer();
  }
  async getMinted() {
    return (await this.initService()).minted();
  }

  async getSupply(TokenIdentifier: string) {
    return (await this.initService()).supply(TokenIdentifier);
  }

  async getClaimStatus() {
    return (await this.initService()).claimStatus();
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
