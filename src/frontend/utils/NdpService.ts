import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { StoicIdentity } from 'ic-stoic-identity';
import { idlFactory as badgeIdlFactory } from '../../declarations/badge/index';
import { idlFactory } from '../../declarations/ndp/index';
import { idlFactory as userIdlFactory } from '../../declarations/user/index';

class NdpService {
  agent!: HttpAgent;
  identity!: Identity;
  token: string;

  canisterId: string;
  badgeCanisterId: string;
  userCanisterId: string;

  actor!: ImplementedActorMethods;
  badgeActor!: ImplementedActorMethods;
  userActor!: ImplementedActorMethods;

  // loginType: string;
  pending: Boolean;
  constructor(params: ConstructorParams) {
    const { token, canisterId, badgeCanisterId, userCanisterId } = params;
    this.token = token;
    this.canisterId = canisterId;
    this.badgeCanisterId = badgeCanisterId;
    this.userCanisterId = userCanisterId;
    // this.loginType = window.localStorage.getItem('loginType')!;
    this.pending = false;
  }
  async initService(type?: string) {
    // Concurrent
    if (this.pending) {
      return;
    }
    // Fetch auth identity,if Not authorized identity will be false, need auth
    let identity = null;
    // type && window.localStorage.setItem('loginType', type);
    // Previous Login Type
    if (type == undefined) {
      type = window.localStorage.getItem('loginType')!;
    }
    switch (type) {
      case 'stoic':
        await this.getStoicActor();
        break;
      case 'plug':
        await this.getPlugActor();
        break;
      default:
        // await this.getStoicActor();
        break;
    }

    this.pending = false;
    return;
  }
  resetService() {
    // @ts-ignore
    this.actor = undefined;
    // @ts-ignore
    this.agent = undefined;
    // @ts-ignore
    this.identity = null;
    StoicIdentity.disconnect();
  }
  async getStoicActor() {
    let that = this;
    let identity = await StoicIdentity.load();
    if (identity === false) {
      // Has not beed authorized,
      identity = await StoicIdentity.connect();
    }
    that.identity = identity;
    that.agent = new HttpAgent({ identity });
    that.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId });
    that.badgeActor = Actor.createActor(badgeIdlFactory, { agent: this.agent, canisterId: this.badgeCanisterId });
    that.userActor = Actor.createActor(userIdlFactory, { agent: this.agent, canisterId: this.userCanisterId });
  }
  async getPlugActor() {
    // let that = this;
    let loginType = window.localStorage.getItem('loginType')!;
    if (loginType == 'plug') {
      (async () => {
        const connected = await window.ic.plug.isConnected();

        if (connected) {
          if (!window.ic.plug.agent) {
            await window.ic.plug.createAgent({
              whitelist: [this.canisterId, this.badgeCanisterId, this.userCanisterId],
            });

            this.identity = await window.ic.plug.agent._identity;
            console.log('Plug Disconnected,reconnect');
          }
          // this.actor = await window.ic.plug.createActor({
          //   canisterId: this.canisterId,
          //   interfaceFactory: idlFactory,
          // });

          // this.badgeActor = await window.ic.plug.createActor({
          //   canisterId: this.badgeCanisterId,
          //   interfaceFactory: badgeIdlFactory,
          // });
          // this.userActor = await window.ic.plug.createActor({
          //   canisterId: this.userCanisterId,
          //   interfaceFactory: userIdlFactory,
          // });
          // const { addr } = await this.actor.approve();

          // console.log(addr, 3131313131313);
          // window.localStorage.setItem('accountId', addr);

          // console.log(this.actor, 1111111);
        } else {
          const result = await window.ic.plug.requestConnect({
            whitelist: [this.canisterId, this.badgeCanisterId, this.userCanisterId],
            timeout: 1e4, // Ten seconds
          });

          if (result) {
            this.identity = await window.ic.plug.agent._identity;
          } else {
            throw new Error('Failed to connect to your wallet');
          }
        }
        this.actor = await window.ic.plug.createActor({
          canisterId: this.canisterId,
          interfaceFactory: idlFactory,
        });
        this.badgeActor = await window.ic.plug.createActor({
          canisterId: this.badgeCanisterId,
          interfaceFactory: badgeIdlFactory,
        });
        this.userActor = await window.ic.plug.createActor({
          canisterId: this.userCanisterId,
          interfaceFactory: userIdlFactory,
        });
        const { addr } = await this.actor.approve();
        window.localStorage.setItem('accountId', addr);
      })();
    }
  }
  async stoicLogin() {
    await this.initService('stoic');
  }
  async plugLogin() {
    await this.initService('plug');
  }

  // NDP conister interface function
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

  async getReward() {
    await this.initService();
    return this.actor.reward();
  }
  async dropExchange(arg: any) {
    await this.initService();
    return this.actor.dropExchange(arg);
  }
  // badgeActor conister interface function
  async getAllBadgeList() {
    await this.initService();
    return this.badgeActor.getAllBadgeList();
  }
  async getUserBadgeList(arg: any) {
    await this.initService();
    return this.badgeActor.getUserBadgeList(arg);
  }

  // userActor conister interface function
  async getUserInfo() {
    await this.initService();
    return this.userActor.getUserInfo();
  }
}

const NDP_TOKEN = 'cf66e87d469890ca0f1f6504eebce076fa587449e9e325dd597b189347c37908';
const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
const badgeCanisterId = 'rfde3-eyaaa-aaaal-qaaua-cai';
const userCanisterId = 'o27sk-yiaaa-aaaag-qabbq-cai';

export default new NdpService({
  token: NDP_TOKEN,
  canisterId: canisterId,
  badgeCanisterId: badgeCanisterId,
  userCanisterId: userCanisterId,
});

// Type
// =================================================
interface ConstructorParams {
  token: string;
  canisterId: string;
  badgeCanisterId: string;
  userCanisterId: string;
}
interface ImplementedActorMethods {
  // ndp
  approve: () => Promise<{ addr: string }>;
  balance: (arg: any) => Promise<{ ok: BigInt }>;
  claim: () => Promise<{ err?: ''; ok?: '' }>;
  getAccountId: () => Promise<string>;
  metadata: () => Promise<unknown>;
  transfer: () => Promise<unknown>;
  minted: () => Promise<BigInt>;
  supply: (TokenIdentifier: string) => Promise<unknown>;
  claimStatus: () => Promise<{ ok?: '' }>;
  reward: () => Promise<{ ok?: ''; err?: '' }>;
  dropExchange: (arg: any) => Promise<{ err?: ''; ok?: '' }>;
  // badge
  getAllBadgeList: () => Promise<{}>;
  getUserBadgeList: (arg: any) => Promise<any>;

  // user
  getUserInfo: () => Promise<{ acatar: ''; nickName: ''; address: ''; reputation: any; signature: ''; index: any }>;
}
