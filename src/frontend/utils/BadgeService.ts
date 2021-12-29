import { Actor, HttpAgent, Identity } from '@dfinity/agent';
import { StoicIdentity } from 'ic-stoic-identity';
import { Badge } from 'src/declarations/badge/badge.did';
import { idlFactory } from '../../declarations/badge/index';
class BadgeService {
  agent!: HttpAgent;
  identity!: Identity;
  canisterId: string;
  actor!: Badge;
  pending: Boolean;

  constructor(params: ConstructorParams) {
    const { canisterId } = params;
    this.canisterId = canisterId;
    this.pending = false;
  }
  async initService() {
    // Concurrent
    if (this.pending) {
      await Promise.resolve(this.actor);
      return;
    }
    if (!this.actor) {
      this.pending = true;
      let identity = await StoicIdentity.load();
      if (identity === false) {
        // Has not beed authorized,
        identity = await StoicIdentity.connect();
      }
      this.identity = identity;
      this.agent = new HttpAgent({ identity });
      this.actor = Actor.createActor(idlFactory, { agent: this.agent, canisterId: this.canisterId });
      this.pending = false;
      return;
    }
  }
  resetService() {
    // @ts-ignore
    this.actor = undefined;
    // @ts-ignore
    this.agent = undefined;
    // @ts-ignore
    this.identity = null;
  }

  async getAllBadgeList() {
    await this.initService();
    return this.actor.getAllBadgeList();
  }
  async getUserBadgeList(arg: any) {
    await this.initService();
    return this.actor.getUserBadgeList(arg);
  }
}

const canisterId = 'rfde3-eyaaa-aaaal-qaaua-cai';
export default new BadgeService({
  canisterId: canisterId,
});

// Type
// =================================================
interface ConstructorParams {
  canisterId: string;
}
