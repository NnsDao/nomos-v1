import { plugLogin, stoicLogin } from '@nnsdao/nnsdao-kit';
import storage from '@nnsdao/nnsdao-kit/helper/storage';
import { useQueryClient } from '@tanstack/react-query';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import canister, { canisterIdList } from '../service/config';

const defaultValue = {
  loginType: storage.get('loginType') ?? '', // plug ,stoic || ''
  principalId: '',
  accountId: '',
  isLogin: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        ...action.data,
      };
    case 'logout':
      return {
        ...state,
        ...defaultValue,
        loginType: '',
      };
  }
}
type UserStoreT = typeof defaultValue & {
  dispatch: React.Dispatch<any>;
};
const UserStore = createContext(null as unknown as UserStoreT);

export function UserStoreProvider({ children }) {
  const [userInfo, dispatch] = useReducer(reducer, defaultValue);
  const queryClient = useQueryClient();

  useEffect(() => {
    console.log('login_userInfo', userInfo);
    if (userInfo.loginType) {
      autoLogin(userInfo.loginType);
    } else {
      queryClient.invalidateQueries();
    }
  }, [userInfo.loginType]);

  async function autoLogin(loginType: string) {
    let loginRes = null as any;

    if (loginType == 'plug') {
      const whiteList = canisterIdList.concat(Object.values(canister).map(item => item.cid));
      loginRes = await plugLogin(whiteList);
    } else if (loginType == 'stoic') {
      loginRes = await stoicLogin();
    }
    if (!loginRes) return;
    console.log(`auto login res`, loginRes);
    const loginInfo = {
      loginType: loginType ?? '',
      principalId: loginRes.principalId,
      accountId: loginRes.accountId,
      isLogin: true,
    };
    // @ts-ignore
    storage.set('userInfo', loginInfo);
    dispatch({
      type: 'login',
      data: loginInfo,
    });
  }
  return <UserStore.Provider value={{ ...userInfo, dispatch }}>{children}</UserStore.Provider>;
}

export function useUserStore() {
  return useContext(UserStore);
}
