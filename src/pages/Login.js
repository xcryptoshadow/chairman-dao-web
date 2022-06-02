import React, { Fragment, useState } from 'react';
import { useContext } from 'react';
import AppContext from '../components/appContext';
import DiscordLogin from '../components/discordLogin';


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


const Login = () => {

    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=961849988667834420&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffriends&response_type=code&scope=identify%20email%20connections%20relationships.read%20guilds%20guilds.members.read';

    return(

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
                <Stack>
                    <DiscordLogin />
                </Stack>
            </VStack>
        </Box>
    </Fragment>

    );
}

export default Login;