// @src/components/generateInviteForm.js
import React, { Fragment, useState } from 'react';

import { useContext } from 'react';
import AppContext from './appContext';

// chakra ui
import {
  Box,
  useStyleConfig,
  LinkBox,
  LinkOverlay,
  useColorModeValue,
  useControllableProp, 
  useControllableState,
  Text,
  Stack,
  Button,
  Center,
  Flex,
  Image
} from '@chakra-ui/react';

import DiscordLogin from './discordLogin';

function createInvite(){
    alert("creating invite");
}

function GenerateInviteForm(props){

    const inviteIconURL = 'https://cdn.iconscout.com/icon/free/png-256/invite-a-friend-1817222-1538092.png';
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");


    return (
        <Center py={12}>
        <Flex
    
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          alignItems='center'
          direction='column'>
          
          <Box
                rounded={'lg'}
                mt={-12}
                pos={'relative'}
                height={'213px'}
                _after={{
                  transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  pos: 'absolute',
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${inviteIconURL})`,
                  filter: 'blur(15px)',
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: 'blur(15px)',
                  },
                }}>
                
                <Image
                  rounded={'lg'}
                  height={240}
                  width={294}
                  objectFit={'cover'}
                  src={inviteIconURL}
                />
    
            </Box>
    
    
          <Flex flexDirection='column' mb='20px'>
    
    
    
            <Image
              src={props.inviterAvatarURL}
              border='5px solid red'
              mx='auto'
              borderColor={boxBg}
              width='68px'
              height='68px'
              mt='-38px'
              borderRadius='50%'
              zIndex='100'
            />
            
    
            <Flex
            direction={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}
            p={2}
            >
            <Text as='i'
            fontSize={{ base: 'sm', md: 'sm' }}
            color={useColorModeValue('red.800', 'red.800')}
            fontFamily={'Inter'}
            textAlign={'center'}
            maxW={'3xl'}>
              {`"${props.quote}"`}
            </Text>
              
              <Text textAlign={'center'} fontSize={'sm'} fontWeight={600}>{props.inviterName}</Text>
              <Text textAlign={'center'} fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
                {props.inviterRole}
              </Text>
         
            </Flex>
    
            <Text
              color={'red.500'}
              textAlign='center'
              fontSize='sm'
              fontWeight='500'
              p={4}
              >
              Login w/ Discord to receive your {props.DAOName} NFT Airdrop Invitation
            </Text>
    
                <Stack>    
                  <Text
                      color={'gray.500'} fontSize={'sm'} 
                  >
    
                      {props.DAODescription}
    
                  </Text>
                </Stack>          
                  
          </Flex>
          <Button
                /* flex={1} */
                px={4}
                py={4}
                fontSize={'lg'}
                rounded={'full'}
                bg={props.color}
                color={'white'}
                boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                bg: 'red.500',
                }}
                _focus={{
                bg: 'red.600',
                }}
                onClick={() => {
                    //Implement purchase modal and logic here.

                    createInvite();
                    
                  }
                }
                >
                Buy {props.title} NFT
            </Button>

        </Flex>
    
        </Center> 
      );

}

export default GenerateInviteForm;