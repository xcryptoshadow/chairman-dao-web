import React, { Fragment } from 'react';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  SimpleGrid,
  VStack,
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';


var testData = [
  {username: 'jahan khanna',
   avatarURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDrt5laSmJ8vL0VNZpLrGa1qWS99JHp3SJPQ&usqp=CAU',
   backgroundURL: 'https://media.istockphoto.com/vectors/worker-holding-a-flag-industry-poster-vector-id480370080?k=20&m=480370080&s=612x612&w=0&h=PquLZIdfVAhJrCpslBQdlvnAVSvyz9zPBhGgbn6CWdc=',
  },
  {username: 'jahan khanna 2',
   avatarURL: 'https://c8.alamy.com/comp/2D9WYW6/worlds-leaders-vector-illustration-of-xi-jinping-leader-of-china-general-secretary-of-the-chinese-communist-party-ccp-2020-side-profile-2D9WYW6.jpg',
   backgroundURL: 'https://c.tenor.com/lAx5BcehzoAAAAAC/marxism-communist.gif',
  },
  {username: 'Chiller Max',
   avatarURL: 'https://i1.sndcdn.com/avatars-000722023207-njfz03-t240x240.jpg',
   backgroundURL: 'https://thumbs.gfycat.com/AgedMiniatureBoto-max-1mb.gif',
  },
  {username: 'Mad UX Bro',
   avatarURL: 'https://yt3.ggpht.com/ytc/AKedOLTlGVLrXzgZDwItF-m8Tux0NF5II9C-TIa6HgIalg=s900-c-k-c0x00ffffff-no-rj',
   backgroundURL: 'https://s.yimg.com/uu/api/res/1.2/3eB9uLp9psHRKlMuAeLX9g--~B/aD0zNzU7dz01MDA7YXBwaWQ9eXRhY2h5b24-/http://media.zenfs.com/en-US/homerun/mic_26/b50b195098258bf778f982189e53851a',
  },
  {username: 'American Psycho',
   avatarURL: 'https://media3.giphy.com/media/DLm2IJPuLnMTS/200.gif?cid=82a1493bsnu4nnft3c7zin9nisok7z70dnjn2hwaq4tj3l84&rid=200.gif&ct=g',
   backgroundURL: 'https://j.gifs.com/n55P84.gif',
  },
  {username: 'Pinkerton Strange',
   avatarURL: 'https://cdn.dribbble.com/users/1210339/screenshots/2767019/avatar18.gif',
   backgroundURL: 'https://i.gifer.com/NKJt.gif',
  },
];


//create object data
var outputArr = []

for(var i = 0; i < testData.length; i++){
  var cardID = 'usercard_' + i;

  outputArr.push(<Usercard
    cardID={cardID}
    username={testData[i].username}
    avatarURL={testData[i].avatarURL}
    backgroundURL={testData[i].backgroundURL}
    />);
}


const InviteMember = () => {
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
                  <Button borderRadius="full" bg="black" color="white" w="100%">
                    Send invite to (2) users
                  </Button>
                </Box>

              <SimpleGrid 
                minChildWidth='286px' 
                spacing='40px'
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
