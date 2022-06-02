import React, { Fragment, useState } from 'react';
import { useContext } from 'react';
import AppContext from '../components/appContext';


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

const DiscordLogin = () => {

    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=961849988667834420&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffriends&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20gdm.join%20guilds.members.read';

    return(
        <Button borderRadius="full" 
            bg={'purple.600'}
            _hover={{ bg: 'purple.800' }} 
            color="white" 
            w="100%"
            onClick={() => {

                onClick(discordOAuthURL);
                }
            } 
            >
            Log in with Disord
        </Button>
    );

}

export default DiscordLogin;