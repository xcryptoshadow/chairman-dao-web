import React, { Fragment, useState } from 'react';
import { useContext, useEffect } from 'react';
import AppContext from '../components/appContext';
import { useSearchParams } from "react-router-dom";
import axios from 'axios';
import { Buffer } from "buffer";
import {retrieveDiscordOAuthIdentity} from '../utils/discord';


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
  Select,
  PinInputDescendantsProvider,
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';
import FetchInterstitial from '../components/fetchInterstitial';
import { findAllByDisplayValue } from '@testing-library/react';
//import { useMoralis } from 'react-moralis';


/* TODO: WHY DOES THIS LIBRARY FAIL?!? */
import DatastoreFactory from '../utils/createInviteRecord';

const discordRedirectURI = 'http://localhost:3000/generate';

var bearerToken = '';

const Generate = () => {

    //create data state object to retrieve Discord API Information
    const [data, setData] = useState({loading: true, userObj:{}});


    //acquire GET URL Payload from OAuth Redirect
    const [searchParams, setSearchParams] = useSearchParams();
    let singleUseCode = searchParams.get("code");
    let contextData = searchParams.get('state');

    function onSelectChange(){

    }

    useEffect(() => {

        async function fetchData(){
          //exchange OAuth Code for Short TTL access token
          var discordResponse = 
            await retrieveDiscordOAuthIdentity(singleUseCode, discordRedirectURI);
          console.log(discordResponse);
  
          //parse response data appropriately
          var inviteeAvatarURL = 
            `https://cdn.discordapp.com/avatars/${discordResponse.id}/${discordResponse.avatar}.png`;
  
          //retrieve moralis DB records for this user
          const DAOs = await DatastoreFactory.getDAORoles(discordResponse.id);

          var selectOptions=[];
          for(var i = 0; i < DAOs.length; i++){
            selectOptions.push(
              <option value={DAOs[i].guildID}>
                {DAOs[i].DAOName}
              </option>);
          }
          //var DAOs = [];
          //THIS IS THE FINAL DATA OBJECT THAT GETS PASSED TO THE UX
          var renderObj = {
            inviterAvatarURL: inviteeAvatarURL,
            inviterName: discordResponse.username,
            inviterID: discordResponse.id,
            DAOs:DAOs,
            selectOptions:selectOptions
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

    return(
    <Fragment>
    
    <Box
        borderWidth="2px"
        borderRadius="20px"
        borderColor="black"
        align="center"
        justify="center"
        p={4}
        m={2}
        >
            
            <Heading
                p={2}
                m={3}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
                lineHeight={'110%'}>
                Generate Invite Link
            </Heading>
            
        {data.loading ? <Stack direction={'row'}><FetchInterstitial /></Stack>:
          <Fragment>
              <Text>{JSON.stringify(data.userObj)}</Text>
              <Select id="DAOSelect" placeholder="Select DAO">
                {data.userObj.selectOptions}
              </Select>
          </Fragment>
            
        }      
                     
        </Box>
    </Fragment>
    );
}

export default Generate;