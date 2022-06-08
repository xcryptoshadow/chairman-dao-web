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
  Image,
  Input,
  useClipboard,
  Select,
  ToastProvider,
  useToast
} from '@chakra-ui/react';

import DatastoreFactory from '../utils/createInviteRecord';


async function handleGenerateLink(dObj, setURLValue, toast){

  const link = await DatastoreFactory.createInviteRecord(dObj.guildID,
    dObj.DAOName, dObj.inviterName, dObj.inviterAvatarURL, dObj.inviterDiscordID, 
    dObj.quote, dObj.inviterRole, dObj.DAOLogoURL);

  document.getElementById("GeneratedURLText")
    .setAttribute("placeholder", link);

  setURLValue(link);

  toast({
    title: 'Invite Link Created',
    description: "We've created your invite link! Copy and paste it to your friends!",
    status: 'success',
    duration: 9000,
    isClosable: true,
  });

}

function GenerateInviteForm(props){

    const toast = useToast();

    const inviteIconURL = 'https://cdn.iconscout.com/icon/free/png-256/invite-a-friend-1817222-1538092.png';
    let boxBg = useColorModeValue("white !important", "#111c44 !important");
    let mainText = useColorModeValue("gray.800", "white");
    let secondaryText = useColorModeValue("gray.400", "gray.400");

    const [URLValue, setURLValue] = useState('Generated Link will appear here');
    const { hasCopied, onCopy } = useClipboard(URLValue);
    
    const DAOObject = {
      guildID: props.DAOGuildID,
      DAOName: props.DAOName,
      inviterName: props.inviterName,
      inviterAvatarURL: props.inviterAvatarURL,
      inviterDiscordID: props.inviterID,
      inviterRole: props.inviterRole,
      DAOLogoURL: props.DAOLogoURL,
      quote: props.quote

    }
    console.log(`DAOObject is ${JSON.stringify(DAOObject)}`);

    //TODO: fix state scope bug
    const [DAOInviteObj, setDAOInviteObj] = useState({data:DAOObject});

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
                marginTop={4}
                px={8}
                py={4}
                fontSize={'lg'}
                rounded={'full'}
                bg={'red.500'}
                color={'white'}
                boxShadow={
                '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                }
                _hover={{
                bg: 'red.600',
                }}
                _focus={{
                bg: 'red.600',
                }}
                onClick={() =>  {
                    //Implement purchase modal and logic here.
                    handleGenerateLink(DAOObject, setURLValue, toast);  
                  }
                }
                >
                Generate {props.DAOName} Invite
            </Button>

            <Flex marginTop={16}  width={294}>
              <Input id="GeneratedURLText" 
                width={254}
                value={URLValue} isReadOnly
                placeholder='Generated Link will appear here' />
              <Button onClick={onCopy} ml={2}>
                {hasCopied ? 'Copied' : 'Copy'}
              </Button>
            </Flex>

        </Flex>
    
        </Center> 
      );

}

export default GenerateInviteForm;