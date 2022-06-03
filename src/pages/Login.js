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
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';
import { findAllByDisplayValue } from '@testing-library/react';


const Login = () => {

    const DAOName = 'Chad DAO';
    const inviterName = 'APsycho#3455';
    const inviteGeneratorID = 10920;
    const guildID = 23892;
    const avatarURL = 'https://media3.giphy.com/media/DLm2IJPuLnMTS/200.gif?cid=82a1493bsnu4nnft3c7zin9nisok7z70dnjn2hwaq4tj3l84&rid=200.gif&ct=g';
    
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
            <Center>
                <Wrap>
                    <WrapItem>
                    <Avatar size='xl' 
                        name={inviterName} 
                        src={avatarURL} />{' '}
                    </WrapItem>
                </Wrap>
            </Center>
            
            <Heading
                p={4}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                {inviterName} has invited you to join {' '}
            </Heading>
            <Heading
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}
            >
                <Text as={'span'} color={'red.800'}>
                    {DAOName}
                </Text>
            </Heading>
            

            <VStack width="100%" p={4} space={4}>
                <Stack>
                    <DiscordLogin 
                        inviteGeneratorID={inviteGeneratorID}
                        guildID={guildID}
                        action={'inviteUsersToDAO'}
                    />
                </Stack>
            </VStack>
        </Box>
    </Fragment>

    );
}

export default Login;