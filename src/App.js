import React, { useState, useContext } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import AppContext from './components/appContext';
import { ModalProvider } from './components/modalContext';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import InviteMember from './pages/InviteMember';
import PayMember from './pages/PayMember';
import RaiseMoney from './pages/RaiseMoney';
import Settings from './pages/Settings';
import MemberInvited from './pages/MemberInvited';
import MemberPaid from './pages/MemberPaid';
import InvestMoney from './pages/InvestMoney';
import CreateDao from './pages/CreateDao';
import FormDao from './pages/FormDao';
import Listing from './pages/Listing';
import Wallet from './pages/Wallet';

import ClaimInviteLogin from './pages/ClaimInviteLogin';
import Friends from './pages/Friends';
import GenerateInviteLogin from './pages/GenerateInviteLogin';
import Generate from './pages/Generate';

// components
import Header from './components/Header';
import Footer from './components/Footer';

//utilities
import MoralisConfig from './utils/moralis';

function App() {
  // const connectors = {
  //   name: 'magic',
  //   options: {
  //     apiKey: 'pk_live_DF7B653BC268D10F',
  //     rpcUrls: {
  //       [ChainId.Rinkeby]:
  //         'https://eth-rinkeby.alchemyapi.io/v2/3X3bHcX9RyZRPuYU-n3Cb7JgoqBeR5Ah',
  //     },
  //   },
  // };

  const connectors = ['metamask', 'walletConnect', 'walletLink'];

  //define all global state variables here
  const [usersToInvite, setUsersToInvite] = useState([]);
  const [NFTURL, setNFTUrl] = useState('');
  const [tierToChange, setTierToChange] = useState(-1);

  const updateUsersToInvite = inviteArr => {
    setUsersToInvite(inviteArr);
  };

  /* Global state variables - DO NOT REMOVE */
  const userSettings = {
    usersToInvite: [],
    updateUsersToInvite,
    NFTUrl: '',
    setNFTUrl,
    tierToChange: -1,
    setTierToChange,
  };
  /* END Global Variables */

  return (
    <AppContext.Provider value={userSettings}>
      <ThirdwebProvider
        walletConnectors={connectors}
        desiredChainId={ChainId.Rinkeby}
      >
        <ChakraProvider theme={theme}>
          <MoralisProvider
            serverUrl={process.env.REACT_APP_MORALIS_SERVER_URL}
            appId={process.env.REACT_APP_MORALIS_APP_ID}
          >
            <Header />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/invite_member" element={<InviteMember />} />
                <Route path="/pay_member" element={<PayMember />} />
                <Route path="/raise/:payload" element={<RaiseMoney />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/member_invited" element={<MemberInvited />} />
                <Route path="/member_paid" element={<MemberPaid />} />
                <Route path="/invest_money" element={<InvestMoney />} />
                <Route path="/listing/:payload" element={<Listing />} />
                <Route path="/create_dao/:payload" element={<FormDao />} />
                <Route path="/wallet_demo" element={<CreateDao />} />
                <Route path="/wallet">
                  <Route index element={<Wallet />} />
                  <Route path=":payload" element={<Wallet />} />
                </Route>

                <Route path="/claim_invite" element={<ClaimInviteLogin />} />
                <Route
                  path="/create_invite"
                  element={<GenerateInviteLogin />}
                />
                <Route path="/friends" element={<Friends />} />
                <Route path="/generate" element={<Generate />} />
              </Routes>
            </BrowserRouter>

            <Footer />
          </MoralisProvider>
        </ChakraProvider>
      </ThirdwebProvider>
    </AppContext.Provider>
  );
}

export default App;
