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
  Heading,
  Wrap,
  WrapItem,
  Avatar,
  Center,
  PinInputDescendantsProvider,
  Flex,
  useColorModeValue
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { findAllByDisplayValue } from '@testing-library/react';


const GenerateInviteLogin = () => {

    //GENERATE Redirect LINK
    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=961849988667834420&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fgenerate&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20guilds.members.read';

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
            <Flex
            role={'group'}
            p={6}
            maxW={'360px'}
            w={'full'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
            alignItems='center'
            direction='column'>
                <DiscordLogin 
                    redirectURL={discordOAuthURL}
                    action={'generateInvite'}
                />
            </Flex>
        </Box>
    </Fragment>

    );
}

export default GenerateInviteLogin;