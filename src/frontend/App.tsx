import { agent } from '@nnsdao/nnsdao-kit/helper/agent';
import 'antd/dist/antd.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { StoicIdentity } from 'ic-stoic-identity';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import FrontendAuth from './FrontendAuth';
import routerMap from './routerMap';
AOS.init();
function App() {
  useEffect(() => {
    (async () => {
      const lt = localStorage.getItem('loginType');
      if (lt) {
        switch (lt) {
          case 'stoic':
            StoicIdentity.load().then(async identity => {
              identity &&
                identity.accounts().then(res => {
                  const address = JSON.parse(res);
                  const ads = address[0].address;
                });
              agent.replaceIdentity(identity);
              console.log(agent, '1111111111');
            });
            break;
          case 'plug':
            if (await window?.ic?.plug?.isConnected()) {
              console.log(1);
            }
            break;
        }
      }
    })();
  }, []);
  return (
    <Routes>
      <Route>
        <FrontendAuth routerConfig={routerMap} />
      </Route>
    </Routes>
  );
}
export default App;
