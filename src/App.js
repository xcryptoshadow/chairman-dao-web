import React, {useState, useContext} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
  useDisclosure
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { MoralisProvider } from 'react-moralis';

// pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import InviteMember from './pages/InviteMember';
import PayMember from './pages/PayMember';
import RaiseMoney from './pages/RaiseMoney';
import Settings from './pages/Settings';
import MemberInvited from './pages/MemberInvited';
import MemberPaid from './pages/MemberPaid';
import InvestMoney from './pages/investMoney';
import CreateDao from './pages/CreateDao';
import Listing from './pages/Listing';
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



  //define all global state variables here
  const [usersToInvite, setUsersToInvite] = useState([]);
  const [NFTURL, setNFTUrl] = useState('');
  const [tierToChange, setTierToChange] = useState(-1);

  const updateUsersToInvite = (inviteArr) => {
    setUsersToInvite(inviteArr);
  };

  /* Global state variables - DO NOT REMOVE */
  const userSettings = {
    usersToInvite:[],
    updateUsersToInvite,
    NFTUrl: '',
    setNFTUrl,
    tierToChange: -1,
    setTierToChange
  };
  /* END Global Variables */


  return (
    <AppContext.Provider value={userSettings}>

    <MoralisProvider 
      appId={MoralisConfig.getAppID()}
      serverUrl={MoralisConfig.getServerURL()}
      >
    <ChakraProvider theme={theme}>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/invite" element={<InviteMember />} />
          <Route path="/pay_member" element={<PayMember />} />
          <Route path="/raise" element={<RaiseMoney />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/member_invited" element={<MemberInvited />} />
          <Route path="/member_paid" element={<MemberPaid />} />
          <Route path="/listing" element={<Listing />} />
          <Route path="/create_dao" element={<CreateDao />} />
          <Route path="/claim_invite" element={<ClaimInviteLogin />} />
          <Route path="/create_invite" element={<GenerateInviteLogin />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/generate" element={<Generate />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </ChakraProvider>
    </MoralisProvider>

    </AppContext.Provider>
  );



  
}

export default App;
