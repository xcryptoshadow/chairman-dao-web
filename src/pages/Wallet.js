import React, { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwtEncode from 'jwt-encode';

// chakra ui
import {
  Box,
  Text,
  VStack,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Container,
  Divider,
  Spacer,
  Center,
  Heading,
  Input,
} from '@chakra-ui/react';

import { useAddress } from '@thirdweb-dev/react';

// components
import WalletSignIn from '../components/WalletSignIn';
import WalletDashboard from '../components/WalletDashboard';

const Wallet = () => {
  const { payload } = useParams();

  let inviteData = null;
  if (payload) {
    const decoded = jwtDecode(payload);
    inviteData = {
      guildID: decoded.guildID,
      daoName: decoded.daoName,
      editionDropAddress: decoded.editionDropAddress,
    };
  }

  const address = useAddress();

  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mb={10}>
          {address ? (
            <Fragment>
              <WalletDashboard inviteData={inviteData} />
            </Fragment>
          ) : (
            <Fragment>
              <WalletSignIn />
            </Fragment>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

export default Wallet;
