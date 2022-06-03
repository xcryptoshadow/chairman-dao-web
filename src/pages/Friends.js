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

        //draw page
        setData({loading: false, userObj:discordResponse});

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
                  
                    <SimpleGrid 
                      minChildWidth='296px' 
                      spacing='40px'
                      width="95%"
                      align="center"
                      justify="center"
                    >
                      {JSON.stringify(stateObj)}
                      {JSON.stringify(data.userObj)}
                    </SimpleGrid>
                  }
                  
                
            
              
              

            </VStack>
              

               
          </Box>
    </Fragment>
  );
}
  
	

export default Friends;