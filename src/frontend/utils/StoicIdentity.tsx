import { HttpAgent, Identity } from '@dfinity/agent';
import { Principal } from '@dfinity/principal';
import { agent as agentCopy } from '@nnsdao/nnsdao-kit/helper/agent';
import { StoicIdentity } from 'ic-stoic-identity';
import React from 'react';
import NdpService from './NdpService';
interface StoicState {
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
  isConnected: boolean;
  principal?: Principal;
  agent?: HttpAgent;
}

interface ContextProviderProps {
  children?: React.ReactNode;
}

const defaultState: StoicState = {
  connect: async () => {},
  disconnect: async () => {},
  isConnected: false,
};

export const stoicContext = React.createContext<StoicState>(defaultState);
export const useStoic = () => React.useContext(stoicContext);

export default function StoicProvider({ children }: ContextProviderProps) {
  async function connect() {
    console.log(33333333333);
    StoicIdentity.load().then(async (identity: any) => {
      if (identity === false) {
        identity = await StoicIdentity.connect();
        agentCopy?.replaceIdentity(identity);
        console.log(888888888888);
      }
      initActor(identity);
      agentCopy?.replaceIdentity(identity);
    });
  }

  async function disconnect() {
    StoicIdentity.disconnect();
    setIsConnected(false);
    setPrincipal(undefined);
    window.sessionStorage.removeItem('stoicIsConnected');
  }

  const [isConnected, setIsConnected] = React.useState<boolean>(defaultState.isConnected);
  const [principal, setPrincipal] = React.useState<Principal>();
  const [agent, setAgent] = React.useState<HttpAgent>();

  React.useEffect(() => {
    const sessionIsConnected = window.sessionStorage.getItem('stoicIsConnected') === 'true';
    if (sessionIsConnected) {
      StoicIdentity.load().then(async (identity: any) => {
        identity && initActor(identity);
        agentCopy?.replaceIdentity(identity);
        console.log(444444444444);
      });
    }
  }, []);

  async function initActor(identity: Identity) {
    // const agent = new HttpAgent({
    //   identity,
    //   host: 'http://localhost:8000',
    // });

    await NdpService.stoicLogin();
    setIsConnected(true);
    agentCopy?.replaceIdentity(identity);
    console.log(5555555555555);
    setPrincipal(identity.getPrincipal());
    setAgent(NdpService.agent);
    console.log(identity.getPrincipal().toText(), 90909000);
    window.sessionStorage.setItem('stoicIsConnected', 'true');
    window.sessionStorage.setItem('stoicPrincipal', identity.getPrincipal().toText());
  }

  return (
    <stoicContext.Provider
      value={{
        connect,
        disconnect,
        isConnected,
        principal,
        agent,
      }}
      children={children}
    />
  );
}
