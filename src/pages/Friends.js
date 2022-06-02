import React, { Fragment, useState } from 'react';
import { useContext, useEffect } from 'react';
import AppContext from '../components/appContext';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';


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

function discordLogin(url){
  document.location = url;
}

var bearerToken = '';

const Friends = () => {

  const [data, setData] = useState({loading: true, guilds:[]});

  const [searchParams, setSearchParams] = useSearchParams();
  let codeObj = searchParams.get("code");


  var tokenType = 'Bearer';

  //const fragment = new URLSearchParams(window.location.hash.slice(1));
	//const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];


  var retStr = `Code: ${codeObj}`;
  
  
  useEffect(() => {

      async function fetchData(){
         //exchange code for access token
         var tokenURL = 'https://discord.com/api/oauth2/token';

         var guildURL = 'https://discord.com/api/users/@me/guilds';
 
 
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

        const tokenResponse = await axios.post(tokenURL, payload, tokenOptions);
  
        bearerToken = tokenResponse.data.access_token;
 
        var guildOptions = {
          headers:{
            'authorization': `Bearer ${bearerToken}`
          }
        }

        const responseObj = await axios.get(guildURL, guildOptions);
        var guildResponse = responseObj.data;

 
        var guildArr = [];
        for(var i = 0; i < guildResponse.length; i++){

          //fetch guild info
          //var guildURL = `https://discord.com/api/users/@me/guilds/${guildResponse[i].id}`;
          //var guildOptions = {
          //  headers:{
          //    'authorization': `Bearer ${bearerToken}`
          //  }
          //}
          
          //const guildDetailObj = await axios.get(guildURL, guildOptions);
          //console.log(guildDetailObj);

          var cardID = 'card_' + i;
          var dialogID = 'dialog_' + i;
          var textHandle = 'text_' + i;
          var circleID = 'circle_' + i;
          var bannerURL = 'https://media.istockphoto.com/vectors/worker-holding-a-flag-industry-poster-vector-id480370080?k=20&m=480370080&s=612x612&w=0&h=PquLZIdfVAhJrCpslBQdlvnAVSvyz9zPBhGgbn6CWdc=';

          var avatarURL = `https://cdn.discordapp.com/icons/${guildResponse[i].id}/${guildResponse[i].icon}.png`;

          guildArr.push(<Usercard 
            username={guildResponse[i].name}
            avatarURL={avatarURL}
            backgroundURL={avatarURL}
            cardID={cardID}
            circleID={circleID}
            dialogID={dialogID}
            textID={textHandle}

          />);
        }
        
        console.log(guildArr);
        
        //draw cards
        setData({loading: false, guilds:guildArr});

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
                    Choose guild to invite from
                  </Text>
                </Box>


              
              
                
                  {

                  }
                  {data.loading ? <Stack direction={'row'}><FetchInterstitial /></Stack>: 
                  
                    <SimpleGrid 
                      minChildWidth='296px' 
                      spacing='40px'
                      width="95%"
                      align="center"
                      justify="center"
                    >
                      {data.guilds}
                    </SimpleGrid>
                  }
                  
                
            
              
              

            </VStack>
              

               
          </Box>
    </Fragment>
  );
}
  
	

export default Friends;