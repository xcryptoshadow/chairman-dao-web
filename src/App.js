import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MoralisProvider } from 'react-moralis';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

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

// components
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Rinkeby}>
      <ChakraProvider theme={theme}>
        <MoralisProvider
          serverUrl={process.env.MORALIS_SERVER_URL}
          appId={process.env.MORALIS_APP_ID}
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
            </Routes>
          </BrowserRouter>

          <Footer />
        </MoralisProvider>
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default App;
