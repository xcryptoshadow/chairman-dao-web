// @src/components/Profile.js

import React from "react";
// Chakra imports
import { Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";

var usersToInvite = [];

function selectBox(){

}

function Profile(props) {

  const { variant, ...rest } = props

  let boxBg = useColorModeValue("white !important", "#111c44 !important");
  let mainText = useColorModeValue("gray.800", "white");
  let secondaryText = useColorModeValue("gray.400", "gray.400");

var inviteTextHandle = props.cardID + '_' + 'InviteText';

  return (
    <Flex
      bg={boxBg}
      p='10px'
      h='340px'
      w={{ base: "295px", md: "325px" }}
      alignItems='center'
      direction='column'>
      <Image
        src={props.backgroundURL}
        maxW='100%'
        maxH='50%'
        borderRadius='20px'
      />
      <Flex flexDirection='column' mb='30px'>
        <Image
          src={props.avatarURL}
          border='5px solid red'
          mx='auto'
          borderColor={boxBg}
          width='68px'
          height='68px'
          mt='-38px'
          borderRadius='50%'
        />
        <Text
          fontWeight='600'
          color={mainText}
          textAlign='center'
          fontSize='xl'>
          {props.username}
        </Text>
        <Text
          id={inviteTextHandle}
          color={secondaryText}
          textAlign='center'
          fontSize='sm'
          fontWeight='500'>
          Click to Invite
        </Text>
      </Flex>
      <Flex justify='space-between' w='100%' px='36px'>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            17
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Posts
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            color={mainText}
            fontSize='xl'
            textAlign='center'>
            9.7k
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Followers
          </Text>
        </Flex>
        <Flex flexDirection='column'>
          <Text
            fontWeight='600'
            fontSize='xl'
            color={mainText}
            textAlign='center'>
            274
          </Text>
          <Text color={secondaryText} fontWeight='500'>
            Following
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Profile;