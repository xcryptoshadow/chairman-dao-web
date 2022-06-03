import React, { Fragment, useState } from 'react';
import { useContext } from 'react';
import AppContext from '../components/appContext';
import { Buffer } from "buffer";

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  SimpleGrid,
  VStack,
  Stack,
  PinInputDescendantsProvider,
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';
import { findAllByDisplayValue } from '@testing-library/react';

function onClick(URL){
    
    document.location = URL;
}

const DiscordLogin = (props) => {

    //generate OAuth link w/ appropriate permissions
    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=961849988667834420&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffriends&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20gdm.join%20guilds.members.read';

    //encode state payload through oauth redirect
    const state = {
        guildID: props.guildID,
        inviteGenerator: props.inviteGeneratorID
    }
    const stateURL = `&state=${Buffer.from(JSON.stringify(state)).toString('base64')}`
    const finalURL = `${discordOAuthURL}${stateURL}`;

    return(
        <Button borderRadius="full" 
            bg={'purple.600'}
            _hover={{ bg: 'purple.800' }} 
            color="white" 
            w="100%"
            onClick={() => {

                onClick(finalURL);
                }
            } 
            >
            Log in with Discord to Continue
        </Button>
    );

}

export default DiscordLogin;