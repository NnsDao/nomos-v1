import dfinityLogo from '@/assets/dfinity.svg';
import { AuthClient } from '@dfinity/auth-client';
import React, { useEffect, useState } from 'react';
import { useCommonLogout } from '../hooks/login';

// Note: This is just a basic example to get you started
function Auth() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [principal, setPrincipal] = useState<string>('');
  const [client, setClient] = useState<any>();
  const { logout: commonLogout } = useCommonLogout();
  const initAuth = async () => {
    const client = await AuthClient.create();
    const isAuthenticated = await client.isAuthenticated();

    setClient(client);

    if (isAuthenticated) {
      const identity = client.getIdentity();
      const principal = identity.getPrincipal().toString();
      setSignedIn(true);
      setPrincipal(principal);
    }
  };

  // @ts-ignore
  const signIn = async () => {
    // @ts-ignore
    const { identity, principal } = await new Promise((resolve, reject) => {
      client.login({
        identityProvider: 'https://identity.ic0.app',
        onSuccess: () => {
          const identity = client.getIdentity();
          const principal = identity.getPrincipal().toString();
          resolve({ identity, principal });
        },
        onError: reject,
      });
    });
    setSignedIn(true);
    setPrincipal(principal);
  };

  // @ts-ignore
  const signOut = async () => {
    await client.logout();
    setSignedIn(false);
    setPrincipal('');
    await commonLogout();
  };

  useEffect(() => {
    initAuth();
  }, []);

  return (
    <div className="auth-section">
      {!signedIn && client ? (
        <button onClick={signIn} className="auth-button">
          Sign in
          <img style={{ width: '33px', marginRight: '-1em', marginLeft: '0.7em' }} src={dfinityLogo} />
        </button>
      ) : null}

      {signedIn ? (
        <>
          <p>Signed in as: {principal}</p>
          <button onClick={signOut} className="auth-button">
            Sign out
          </button>
        </>
      ) : null}
    </div>
  );
}

export { Auth };
