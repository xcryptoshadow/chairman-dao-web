import React, { Fragment, useState } from 'react';
import { useContext, useEffect } from 'react';
import AppContext from '../components/appContext';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { Buffer } from "buffer";







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

const discordClientID = '961849988667834420';
const discordClientSecret = 'o4FgeH_ju7weYINVQNu9M2BGL8nCeX3p';
const discordRedirectURI = 'http://localhost:3000/friends';

var bearerToken = '';

const Friends = () => {

  //create data state object to retrieve Discord API Information
  const [data, setData] = useState({loading: true, userObj:{}});

  //acquire GET URL Payload from OAuth Redirect
  const [searchParams, setSearchParams] = useSearchParams();
  let codeObj = searchParams.get("code");
  let contextData = searchParams.get('state');

  //TODO: retrieve Inviter and DAO Information from Moralis DB
  var DAOLogoURL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2FJGhR&psig=AOvVaw2pKA7cMy8Grs4Yw-C2PQ9S&ust=1654310828935000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCOiz_JyikPgCFQAAAAAdAAAAABAN';
  var DAOName = 'Chad DAO';
  var inviterName = 'APsycho#3455';
  var inviterAvatarURL = 'https://lh3.googleusercontent.com/zFjkeNZ5C3hxcHKT2s3mSehd_WjcXHVI6_BdP9OZKTaVcSunx4Ub-WHQrAXmYbYuAIzjtvvPIxISxN-O1TeoEZy-jrkg93DA4BZwjA=w600';


  //decode state variable from oauth
  let buff = Buffer.from(contextData, 'base64');  
  let text = buff.toString('ascii');
  var stateObj = JSON.parse(text);

  console.log(`state variable is ${JSON.stringify(stateObj)}`);

  var tokenType = 'Bearer';

  var retStr = `Code: ${codeObj}`;
  
  
  useEffect(() => {

      async function fetchData(){
        //exchange OAuth Code for Short TTL access token
        var tokenURL = 'https://discord.com/api/oauth2/token';

        var payload = new URLSearchParams();
        payload.append("client_id", discordClientID);
        payload.append("client_secret", discordClientSecret);
        payload.append("grant_type", 'authorization_code');
        payload.append("code", codeObj);
        payload.append('redirect_uri', discordRedirectURI);
 
        var tokenOptions = {
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        //assign OAuth Token
        const tokenResponse = await axios.post(tokenURL, payload, tokenOptions);
        bearerToken = tokenResponse.data.access_token;
 
        //now that we have an OAuth Token, get User Graph Info
        var userURL = 'https://discord.com/api/users/@me';
        var reqOptions = {
          headers:{
            'authorization': `Bearer ${bearerToken}`
          }
        }

        const responseObj = await axios.get(userURL, reqOptions);

        //assign response data
        var discordResponse = responseObj.data;
        console.log(discordResponse);

        //parse response data appropriately
        var inviteeAvatarURL = 
          `https://cdn.discordapp.com/avatars/${discordResponse.id}/${discordResponse.avatar}.png`;

        var renderObj = {
          inviteeAvatarURL: inviteeAvatarURL,
          inviteeName: discordResponse.username,
          DAOName: DAOName,
          DAOGuildID: stateObj.guildID,
          DAOLogoURL: DAOLogoURL,
          inviteGenerator: stateObj.inviteGenerator,
          inviterName: inviterName,
          inviterAvatarURL: inviterAvatarURL


        }

        //draw page
        setData({loading: false, userObj:renderObj});

      }

      try{
        fetchData();
      }
      catch(exception){
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


                  {data.loading ? <Stack direction={'row'}><FetchInterstitial /></Stack>:

                  <VStack>
                    <Center>
                      <Wrap>
                        <WrapItem>
                        <Avatar size='xl' 
                          name={data.userObj.inviteeName} 
                          src={data.userObj.inviteeAvatarURL} />{' '}
                        </WrapItem>
                      </Wrap>
                    </Center>
                    <Stack direction={'row'}>
                    <Heading
                        p={4}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        Hi {data.userObj.inviteeName} 👋 
                    </Heading>
                  </Stack>
                  <Stack direction={'row'}>
                    <Heading
                        p={4}
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}>
                        {data.userObj.inviterName} has invited you to join {' '}
                    </Heading>
                  </Stack>
                  <Stack direction={'row'}>
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                        lineHeight={'110%'}
                    >
                        <Text as={'span'} color={'red.800'}>
                            {data.userObj.DAOName}
                        </Text>
                    </Heading>
                    </Stack>
                    <SimpleGrid 
                      minChildWidth='296px' 
                      spacing='40px'
                      width="95%"
                      align="center"
                      justify="center"
                    >
                      
                    </SimpleGrid>
                   </VStack> 
                  }
                  
                
            
              
              

            </VStack>
              

               
          </Box>
    </Fragment>
  );
}
  
	

export default Friends;