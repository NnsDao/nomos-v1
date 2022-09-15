import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { getActor } from '@nnsdao/nnsdao-kit/helper/agent';
import { Badge as BadgeActor } from '../../declarations/badge/badge.did';
import { idlFactory as badgeIdlFactory } from '../../declarations/badge/index';
import { idlFactory } from '../../declarations/ndp/index';
import { NDPTest } from '../../declarations/ndp/ndp.did';

import { idlFactory as nftIdlFactory } from '../../declarations/starfish/index';
import { idlFactory as userIdlFactory } from '../../declarations/user/index';
import { User as UserActor } from '../../declarations/user/user.did';
import { idlFactory as xdrIdlFactory } from '../../declarations/xdr/index';
class NdpService {
  agent!: HttpAgent;
  identity!: Identity;
  token: string;

  canisterId: string;
  badgeCanisterId: string;
  userCanisterId: string;
  nftCanisterId: string;
  xdrCanisterId: string;
  lastUpdate: number;

  actor!: ImplementedActorMethods;
  badgeActor!: ImplementedActorMethods;
  userActor!: ImplementedActorMethods;
  nftActor!: ImplementedActorMethods;
  xdrActor!: ImplementedActorMethods;

  // loginType: string;
  pending: Boolean;
  constructor(params: ConstructorParams) {
    const { token, canisterId, badgeCanisterId, userCanisterId, nftCanisterId, xdrCanisterId, lastUpdate } = params;
    this.token = token;
    this.canisterId = canisterId;
    this.badgeCanisterId = badgeCanisterId;
    this.userCanisterId = userCanisterId;
    this.nftCanisterId = nftCanisterId;
    this.xdrCanisterId = xdrCanisterId;
    this.lastUpdate = lastUpdate;

    this.pending = false;
  }
  async initActor() {
    return getActor<NDPTest>({ needAuth: true, idl: idlFactory, cid: this.canisterId });
  }
  async initBadgeActor() {
    return getActor<BadgeActor>({ needAuth: true, idl: badgeIdlFactory, cid: this.badgeCanisterId });
  }
  async initUserActor() {
    return getActor<UserActor>({ needAuth: true, idl: userIdlFactory, cid: this.userCanisterId });
  }
  // NDP canister interface function
  async approve() {
    const actor = await this.initActor();
    return actor.approve();
  }
  async getBalance(arg: any) {
    const actor = await this.initActor();
    // console.log('actor', actor);
    return actor.balance(arg);
  }
  async getClaim() {
    const actor = await this.initActor();
    return actor.claim();
  }
  async getAccountId() {
    const actor = await this.initActor();
    return actor.getAccountId();
  }
  // async getMetadata() {
  //   const actor = await this.initActor();
  //   return actor.metadata();
  // }
  // async getTransfer(TransferRequest: string) {
  //   const actor = await this.initActor();
  //   return actor.transfer();
  // }
  async getMinted() {
    const actor = await this.initActor();
    return actor.minted();
  }

  async getSupply(TokenIdentifier: string) {
    const actor = await this.initActor();
    return actor.supply(TokenIdentifier);
  }

  async getClaimStatus() {
    const actor = await this.initActor();
    return actor.claimStatus();
  }

  async getReward() {
    const actor = await this.initActor();
    return actor.reward();
  }
  async dropExchange(arg: any) {
    const actor = await this.initActor();
    return actor.dropExchange(arg);
  }
  // badgeActor canister interface function
  async getAllBadgeList() {
    const actor = await this.initBadgeActor();
    return actor.getAllBadgeList();
  }
  async getUserBadgeList(arg: any) {
    const actor = await this.initBadgeActor();
    return actor.getUserBadgeList(arg);
  }

  // userActor canister interface function
  async getUserInfo() {
    const actor = await this.initUserActor();
    return this.userActor.getUserInfo();
  }
  // get nft list
  async getUserNfts(arg: any) {
    const agent = new HttpAgent({});
    const nftActor = Actor.createActor(nftIdlFactory, { agent: agent, canisterId: this.nftCanisterId });
    // nftIdlFactory
    return nftActor.mTokensExt(arg);
  }

  async icpUpdateUSD() {
    let _rate = 0;

    if (!this.lastUpdate || Date.now() - this.lastUpdate > 10 * 60 * 1000) {
      this.lastUpdate = Date.now();
      const agent = new HttpAgent({});
      const nftActor = Actor.createActor(xdrIdlFactory, { agent: agent, canisterId: this.xdrCanisterId });
      const b: any = await nftActor.get_icp_xdr_conversion_rate();
      var b2 = await fetch(
        'https://free.currconv.com/api/v7/convert?q=XDR_USD&compact=ultra&apiKey=fc7d261fade031a3212e'
      ).then(r => r.json());
      _rate =
        Number(b.data.xdr_permyriad_per_icp / BigInt(10000)) * (b2.hasOwnProperty('XDR_USD') ? b2.XDR_USD : 1.4023);
    }
    return _rate;
  }
}

const NDP_TOKEN = 'cf66e87d469890ca0f1f6504eebce076fa587449e9e325dd597b189347c37908';
const canisterId = 'vgqnj-miaaa-aaaal-qaapa-cai';
const badgeCanisterId = 'rfde3-eyaaa-aaaal-qaaua-cai';
const userCanisterId = 'o27sk-yiaaa-aaaag-qabbq-cai';
const nftCanisterId = 'vcpye-qyaaa-aaaak-qafjq-cai';
const xdrCanisterId = 'rkp4c-7iaaa-aaaaa-aaaca-cai';

export default new NdpService({
  token: NDP_TOKEN,
  canisterId: canisterId,
  badgeCanisterId: badgeCanisterId,
  userCanisterId: userCanisterId,
  nftCanisterId: nftCanisterId,
  xdrCanisterId: xdrCanisterId,
  lastUpdate: 0,
});

// Type
// =================================================
interface ConstructorParams {
  token: string;
  canisterId: string;
  badgeCanisterId: string;
  userCanisterId: string;
  nftCanisterId: string;
  xdrCanisterId: string;
  lastUpdate: number;
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
  // nft
  mTokensExt: (arg: any) => Promise<any>;
}
