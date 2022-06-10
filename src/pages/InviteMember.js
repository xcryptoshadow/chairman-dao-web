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
  PinInputDescendantsProvider,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';
import { findAllByDisplayValue } from '@testing-library/react';

//TODO - migrate to a global constants file
const ID_STR = 'usercard_';
const DIALOG_STR = 'dialog_';
const SUBMIT_ID = 'sendInvites';
const TEXT_STR = 'name_';
const CIRCLE_STR = 'circle_';

var testData = [
  {
    username: 'jahan khanna',
    avatarURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrt5laSmJ8vL0VNZpLrGa1qWS99JHp3SJPQ&usqp=CAU',
    backgroundURL:
      'https://media.istockphoto.com/vectors/worker-holding-a-flag-industry-poster-vector-id480370080?k=20&m=480370080&s=612x612&w=0&h=PquLZIdfVAhJrCpslBQdlvnAVSvyz9zPBhGgbn6CWdc=',
    userID: 0,
    guildID: 2,
  },
  {
    username: 'jahan khanna 2',
    avatarURL:
      'https://c8.alamy.com/comp/2D9WYW6/worlds-leaders-vector-illustration-of-xi-jinping-leader-of-china-general-secretary-of-the-chinese-communist-party-ccp-2020-side-profile-2D9WYW6.jpg',
    backgroundURL: 'https://cdn.wallpapersafari.com/70/27/WteaF8.gif',
    userID: 1,
    guildID: 2,
  },
  {
    username: 'Chiller Max',
    avatarURL: 'https://i1.sndcdn.com/avatars-000722023207-njfz03-t240x240.jpg',
    backgroundURL: 'https://thumbs.gfycat.com/AgedMiniatureBoto-max-1mb.gif',
    userID: 2,
    guildID: 2,
  },
  {
    username: 'Mad UX Bro',
    avatarURL:
      'https://yt3.ggpht.com/ytc/AKedOLTlGVLrXzgZDwItF-m8Tux0NF5II9C-TIa6HgIalg=s900-c-k-c0x00ffffff-no-rj',
    backgroundURL:
      'https://s.yimg.com/uu/api/res/1.2/3eB9uLp9psHRKlMuAeLX9g--~B/aD0zNzU7dz01MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/mic_26/b50b195098258bf778f982189e53851a',
    userID: 3,
    guildID: 2,
  },
  {
    username: 'American Psycho',
    avatarURL:
      'https://media3.giphy.com/media/DLm2IJPuLnMTS/200.gif?cid=82a1493bsnu4nnft3c7zin9nisok7z70dnjn2hwaq4tj3l84&rid=200.gif&ct=g',
    backgroundURL: 'https://j.gifs.com/n55P84.gif',
    userID: 4,
    guildID: 2,
  },
  {
    username: 'Pinkerton Strange',
    avatarURL:
      'https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif',
    backgroundURL: 'https://i.gifer.com/NKJt.gif',
    userID: 5,
    guildID: 2,
  },
];

var toInviteArr = [];

const InviteMember = () => {
  //create global state variable
  var toSet = [];
  //create object data
  var outputArr = [];

  const myContext = useContext(AppContext);

  //create a usercard object for each piece of testdata
  for (var i = 0; i < testData.length; i++) {
    var cardID = ID_STR + i;
    var dialogID = DIALOG_STR + i;
    var textHandle = TEXT_STR + i;
    var circleID = CIRCLE_STR + i;

    outputArr.push(
      <Usercard
        cardID={cardID}
        circleID={circleID}
        dialogID={dialogID}
        textID={textHandle}
        username={testData[i].username}
        avatarURL={testData[i].avatarURL}
        backgroundURL={testData[i].backgroundURL}
        userID={testData[i].userID}
        guildID={testData[i].guildID}
      />
    );
  }

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
              Invite Users to DAO
            </Text>
          </Box>

          <Box>
            <Button
              id={SUBMIT_ID}
              borderRadius="full"
              bg={'red.600'}
              _hover={{ bg: 'red.800' }}
              color="white"
              w="100%"
              isLoading
              loadingText="Choose Users to Invite..."
            >
              Choose users to invite
            </Button>
          </Box>

          <SimpleGrid
            minChildWidth="296px"
            spacing="40px"
            width="95%"
            align="center"
            justify="center"
          >
            {outputArr}
          </SimpleGrid>
        </VStack>
      </Box>
    </Fragment>
  );
};

export default InviteMember;
