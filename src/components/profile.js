// @src/components/Profile.js

import React from 'react';
// Chakra imports
import {
  Flex,
  Image,
  Text,
  useColorModeValue,
  Box,
  Circle,
  Center,
} from '@chakra-ui/react';

function Profile(props) {
  const { variant, ...rest } = props;

  let boxBg = useColorModeValue('white !important', '#111c44 !important');
  let mainText = useColorModeValue('gray.800', 'white');
  let secondaryText = useColorModeValue('gray.400', 'gray.400');

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
        alignItems="center"
        direction="column"
      >
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
            backgroundImage: `url(${props.backgroundURL})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(15px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={props.backgroundURL}
          />
        </Box>

        <Flex flexDirection="column" mb="20px">
          <Image
            src={props.avatarURL}
            border="5px solid red"
            mx="auto"
            borderColor={boxBg}
            width="68px"
            height="68px"
            mt="-38px"
            borderRadius="50%"
            zIndex="100"
          />
          <Text
            fontWeight="600"
            id={props.textID}
            color={mainText}
            textAlign="center"
            fontSize="xl"
          >
            {props.username}
          </Text>
          <Text
            id={props.dialogID}
            color={secondaryText}
            textAlign="center"
            fontSize="sm"
            fontWeight="500"
          >
            Click to Invite
          </Text>
        </Flex>
        <Flex justify="space-between" w="100%" px="36px">
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              17
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Posts
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              color={mainText}
              fontSize="xl"
              textAlign="center"
            >
              9.7k
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Followers
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <Text
              fontWeight="600"
              fontSize="xl"
              color={mainText}
              textAlign="center"
            >
              274
            </Text>
            <Text color={secondaryText} fontWeight="500">
              Following
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Profile;
