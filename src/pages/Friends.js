import React, { Fragment, useState } from 'react';
import { useContext, useEffect } from 'react';
import AppContext from '../components/appContext';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Buffer } from 'buffer';
import { retrieveDiscordOAuthIdentity } from '../utils/discord';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  SimpleGrid,
  VStack,
  CircularProgress,
  Stack,
  Center,
  Wrap,
  WrapItem,
  Avatar,
  Heading,
  PinInputDescendantsProvider,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';
import FetchInterstitial from '../components/fetchInterstitial';
import { findAllByDisplayValue } from '@testing-library/react';

import { fetchInviteRecord } from '../utils/createInviteRecord';

const discordRedirectURI = process.env.REACT_APP_WEB_URL + '/friends';

var bearerToken = '';

const Friends = () => {
  //create data state object to retrieve Discord API Information
  const [data, setData] = useState({ loading: true, userObj: {} });

  //acquire GET URL Payload from OAuth Redirect
  const [searchParams, setSearchParams] = useSearchParams();
  let singleUseCode = searchParams.get('code');
  let contextData = searchParams.get('state');

  //TODO: retrieve Inviter and DAO Information from Moralis DB
  var DAOLogoURL =
    'https://lh3.googleusercontent.com/zFjkeNZ5C3hxcHKT2s3mSehd_WjcXHVI6_BdP9OZKTaVcSunx4Ub-WHQrAXmYbYuAIzjtvvPIxISxN-O1TeoEZy-jrkg93DA4BZwjA=w600';
  var DAOName = 'Chad DAO';
  var inviterName = 'APsycho#3455';
  var inviterRole = 'Chad in Chief';
  var inviterAvatarURL =
    'https://media3.giphy.com/media/DLm2IJPuLnMTS/200.gif?cid=82a1493bsnu4nnft3c7zin9nisok7z70dnjn2hwaq4tj3l84&rid=200.gif&ct=g';
  const loremStr =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae elit eleifend sem congue aliquam eu vel libero. Maecenas justo ex, aliquet at feugiat eget, aliquam quis felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec feugiat id nulla vitae venenatis. Ut cursus lorem vitae lacus semper, ut porttitor nunc pulvinar. Aliquam erat volutpat. Aliquam erat volutpat.';
  const quote = 'Are you a Chad or a Chud? Choose Now!';

  //decode state variable from oauth
  let buff = Buffer.from(contextData, 'base64');
  let text = buff.toString('ascii');
  var stateObj = JSON.parse(text);

  console.log(`state variable is ${JSON.stringify(stateObj)}`);

  useEffect(() => {
    async function fetchData() {
      //exchange OAuth Code for Short TTL access token
      var discordResponse = await retrieveDiscordOAuthIdentity(
        singleUseCode,
        discordRedirectURI
      );
      console.log(discordResponse);

      //parse response data appropriately
      var inviteeAvatarURL = `https://cdn.discordapp.com/avatars/${discordResponse.id}/${discordResponse.avatar}.png`;

      var inviteData = await fetchInviteRecord(stateObj.inviteID);

      //THIS IS THE FINAL DATA OBJECT THAT GETS PASSED TO THE UX
      var renderObj = {
        inviteeAvatarURL: inviteeAvatarURL,
        inviteeName: discordResponse.username,
        DAOName: inviteData.DAOName,
        DAOGuildID: inviteData.guildID,
        DAOLogoURL: inviteData.DAOLogoURL,
        DAODescription: loremStr,
        inviteGenerator: inviteData.inviterDiscordID,
        inviterName: inviteData.inviterName,
        inviterRole: inviteData.inviterRole,
        inviterAvatarURL: inviteData.inviterAvatarURL,
        title: 'Claim Invite',
        color: 'blue.500',
        titleColor: 'blue.600',
        priceText: `$0.00`,
        quote: inviteData.inviterMessage,
      };

      //draw page
      setData({ loading: false, userObj: renderObj });
    }

    try {
      fetchData();
    } catch (exception) {
      console.error(exception);
    }
  }, []);

  return (
    <Fragment>
      <Box
        borderWidth="8px"
        borderRadius="20px"
        borderColor="black"
        align="center"
        justify="center"
        p={4}
        m={2}
      >
        <VStack width="100%" space={4}>
          <Box mb={4}>
            <Text fontSize="2xl" style={{ fontWeight: '700' }}>
              Join DAO
            </Text>
          </Box>

          {data.loading ? (
            <Stack direction={'row'}>
              <FetchInterstitial />
            </Stack>
          ) : (
            <VStack>
              <Center>
                <Wrap>
                  <WrapItem>
                    <Avatar
                      size="xl"
                      name={data.userObj.inviteeName}
                      src={data.userObj.inviteeAvatarURL}
                    />{' '}
                  </WrapItem>
                </Wrap>
              </Center>
              <Stack direction={'row'}>
                <Heading
                  p={4}
                  fontWeight={600}
                  fontSize={{ base: '2xl', sm: '3xl', md: '3xl' }}
                  lineHeight={'110%'}
                >
                  Hi {data.userObj.inviteeName} ????
                </Heading>
              </Stack>
              <Stack direction={'row'}>
                <Heading
                  p={4}
                  fontWeight={600}
                  fontSize={{ base: 'lg', sm: 'lg', md: 'lg' }}
                  lineHeight={'110%'}
                >
                  {data.userObj.inviterName} has invited you to join{' '}
                </Heading>
              </Stack>
              <Stack direction={'row'}>
                <Heading
                  fontWeight={600}
                  fontSize={{ base: 'lg', sm: 'lg', md: 'lg' }}
                  lineHeight={'110%'}
                >
                  <Text as={'span'} color={'red.800'}>
                    {data.userObj.DAOName}
                  </Text>
                </Heading>
              </Stack>
              <Stack direction={'row'} align="center" justify="center">
                <Usercard
                  DAOName={data.userObj.DAOName}
                  inviterName={data.userObj.inviterName}
                  inviterRole={data.userObj.inviterRole}
                  quote={data.userObj.quote}
                  inviterAvatarURL={data.userObj.inviterAvatarURL}
                  DAOLogoURL={data.userObj.DAOLogoURL}
                  DAODescription={data.userObj.DAODescription}
                  title={data.userObj.title}
                  color={data.userObj.color}
                  titleColor={data.userObj.titleColor}
                  priceText={data.userObj.priceText}
                  DAOGuildID={data.userObj.DAOGuildID}
                />
              </Stack>
            </VStack>
          )}
        </VStack>
      </Box>
    </Fragment>
  );
};

export default Friends;
