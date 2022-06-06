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
import { findAllByDisplayValue } from '@testing-library/react';
import InviteCard from '../components/inviteCard';

const ClaimInviteLogin = () => {

    const DAOName = 'Chad DAO';
    const inviterName = 'APsycho#3455';
    const inviteGeneratorID = 10920;
    const guildID = 23892;
    const inviteIconURL = 'https://cdn.iconscout.com/icon/free/png-256/invite-a-friend-1817222-1538092.png';
    const avatarURL = 'https://media3.giphy.com/media/DLm2IJPuLnMTS/200.gif?cid=82a1493bsnu4nnft3c7zin9nisok7z70dnjn2hwaq4tj3l84&rid=200.gif&ct=g';
    const quote = 'Are you a Chad, or a Chud?  Choose now!';
    const inviterRole = 'Chad in Chief';

    //FRIENDS Redirect LINK
    const discordOAuthURL = 'https://discord.com/api/oauth2/authorize?client_id=961849988667834420&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Ffriends&response_type=code&scope=identify%20email%20connections%20guilds%20guilds.join%20gdm.join%20guilds.members.read';


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
            
            <Heading
                p={2}
                m={3}
                fontWeight={600}
                fontSize={{ base: 'xl', sm: 'xl', md: 'xl' }}
                lineHeight={'110%'}>
                {inviterName} has invited you to join: {' '}
            </Heading>
            <Heading
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '2xl', md: '2xl' }}
                lineHeight={'110%'}
            >
                <Text as={'span'} color={'red.800'}>
                    {DAOName}
                </Text>
            </Heading>
            

            <VStack width="100%" p={4} space={4}>
                <Stack>
                    <InviteCard 
                        redirectURL={discordOAuthURL}
                        inviterName={inviterName}
                        inviterAvatarURL={avatarURL}
                        inviterRole={inviterRole}
                        inviteGeneratorID={inviteGeneratorID}
                        quote={quote}
                        guildID={guildID}
                        action={'inviteUsersToDAO'}
                    />
                </Stack>
            </VStack>
        </Box>
    </Fragment>

    );
}

export default ClaimInviteLogin;