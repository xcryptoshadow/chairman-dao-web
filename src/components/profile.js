// @src/components/Profile.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwtEncode from 'jwt-encode';

// Chakra imports
import {
  Flex,
  Image,
  Text,
  useColorModeValue,
  Box,
  Circle,
  Stack,
  Button,
  Center,
  chakra,
} from '@chakra-ui/react';

function Profile(props) {
  const { variant, ...rest } = props;
  let navigate = useNavigate();

  let boxBg = useColorModeValue('white !important', '#111c44 !important');
  let mainText = useColorModeValue('gray.800', 'white');
  let secondaryText = useColorModeValue('gray.400', 'gray.400');

  async function handleClick(buyURL) {
    const response = await axios.post(
      process.env.REACT_APP_SERVER_URL +
        `/getCompletedDAO?guildID=${props.DAOGuildID}`
    );
    const daoObject = response.data.response;

    const secret = process.env.REACT_APP_JWT_SECRET;
    const data = {
      guildID: props.DAOGuildID,
      daoName: props.DAOName,
      editionDropAddress: daoObject.editionDropAddress,
    };
    const payload = jwtEncode(data, secret);

    return navigate(`/wallet/${payload}`);
  }

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
            backgroundImage: `url(${props.DAOLogoURL})`,
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
            height={240}
            width={294}
            objectFit={'cover'}
            src={props.DAOLogoURL}
          />
        </Box>

        <Flex flexDirection="column" mb="20px">
          <Image
            src={props.inviterAvatarURL}
            border="5px solid red"
            mx="auto"
            borderColor={boxBg}
            width="68px"
            height="68px"
            mt="-38px"
            borderRadius="50%"
            zIndex="100"
          />

          <Flex
            direction={'column'}
            textAlign={'left'}
            justifyContent={'space-between'}
            p={2}
          >
            <Text
              as="i"
              fontSize={{ base: 'sm', md: 'sm' }}
              color={useColorModeValue('red.800', 'red.800')}
              fontFamily={'Inter'}
              textAlign={'center'}
              maxW={'3xl'}
            >
              {`"${props.quote}"`}
            </Text>

            <Text textAlign={'center'} fontSize={'xs'} fontWeight={600}>
              {props.inviterName}
            </Text>
            <Text
              textAlign={'center'}
              fontSize={'xs'}
              color={useColorModeValue('gray.400', 'gray.400')}
            >
              {props.inviterRole}
            </Text>
          </Flex>

          <Text
            id={props.dialogID}
            color={props.titleColor}
            textAlign="center"
            fontSize="sm"
            fontWeight="500"
            p={4}
          >
            This is your {props.DAOName} NFT Airdrop Invitation
          </Text>

          <Stack mb={4}>
            <Text color={'gray.500'} fontSize={'sm'}>
              {props.DAODescription}
            </Text>
          </Stack>

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
              bg: props.titleColor,
            }}
            _focus={{
              bg: props.titleColor,
            }}
            onClick={() => {
              //Implement purchase modal and logic here.

              handleClick(props.buyURL);
            }}
          >
            {props.title}
          </Button>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Profile;
