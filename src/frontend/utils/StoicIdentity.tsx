import React from 'react';
import { StoicIdentity } from 'ic-stoic-identity';
import { Principal } from '@dfinity/principal';
import { HttpAgent, Identity } from '@dfinity/agent';


interface StoicState {
    connect: () => Promise<void>;
    disconnect: () => Promise<void>;
    isConnected: boolean;
    principal?: Principal;
    agent?: HttpAgent;
};

interface ContextProviderProps {
    children?: React.ReactNode;
};

const defaultState: StoicState = {
    connect: async () => { },
    disconnect: async () => { },
    isConnected: false,
};

export const stoicContext = React.createContext<StoicState>(defaultState);
export const useStoic = () => React.useContext(stoicContext);

export default function StoicProvider({ children }: ContextProviderProps) {

    async function connect() {
        StoicIdentity.load().then(async (identity: any) => {
            if (identity === false) {
                identity = await StoicIdentity.connect();
            };
            initActor(identity);
        });
    };

    async function disconnect() {
        StoicIdentity.disconnect();
        setIsConnected(false);
        setPrincipal(undefined);
        window.sessionStorage.removeItem('stoicIsConnected');
    };


    const [isConnected, setIsConnected] = React.useState<boolean>(defaultState.isConnected);
    const [principal, setPrincipal] = React.useState<Principal>();
    const [agent, setAgent] = React.useState<HttpAgent>();

    React.useEffect(() => {
        const sessionIsConnected = window.sessionStorage.getItem('stoicIsConnected') === 'true';
        if (sessionIsConnected) {
            StoicIdentity.load().then(async (identity: any) => {
                identity && initActor(identity);
            });
        }
    }, []);

    async function initActor(identity: Identity) {
        const agent = new HttpAgent({
            identity,
            host: 'http://localhost:8000',
        });
        setIsConnected(true);
        setPrincipal(identity.getPrincipal());
        setAgent(agent);
        console.log(identity.getPrincipal().toText(),90909000);
        window.sessionStorage.setItem('stoicIsConnected', 'true');
        window.sessionStorage.setItem('stoicPrincipal', identity.getPrincipal().toText());
    };

    return <stoicContext.Provider
        value={{
            connect,
            disconnect,
            isConnected,
            principal,
            agent,
        }}
        children={children} 
    />
};