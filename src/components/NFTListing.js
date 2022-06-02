// @src/components/NFTListing.js

import React, { Fragment, useState } from 'react';

import { useContext } from 'react';
import AppContext from './appContext';

import {
  Flex,
  Icon,
  chakra,
  Box,
  Center,
  Tooltip,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Editable,
  EditablePreview,
  EditableTextarea,
  EditableInput,
  Circle,
  Checkbox,
  Badge,
  LinkOverlay,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Collapse,
  InputGroup,
  InputLeftAddon,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';

const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

const data = {
  isNew: true,
  imageURL:
    'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
  name: 'Wayfarer Classic',
  price: 4.5,
  rating: 4.2,
  numReviews: 34,
};

const MODALTITLE = 'ModalTitle_';
const URLINPUTID = 'URLInput_';
const IMAGEID = 'Image_';
const BACKGROUNDID = 'Background_';
const FORMID = 'Form_';

function onClick(myContext, url) {
  //implement purchase logic here

  window.open(url, '_blank');
}

const NFTListing = props => {
  const myContext = useContext(AppContext);

  const titleText = `${props.title}`;
  const priceText = `$${props.price}`;

  const numeratorText = `${props.quantityRemaining}`;
  const denominatorText = ` / ${props.quantityMinted} remaining`;

  const imgHandle = IMAGEID + props.tier;
  const backgroundHandle = BACKGROUNDID + props.tier;

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
      >
        <Box
          id={backgroundHandle}
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${props.imgURL})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Circle
            size="30px"
            position="absolute"
            top={2}
            right={2}
            bg={props.color}
          />
          <Image
            id={imgHandle}
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={props.imgURL}
          />
        </Box>
        <Stack pt={10} pb={4} align={'center'}>
          <Stack direction={'row'} align={'center'}>
            <Heading
              color={props.titleColor}
              fontSize={'2xl'}
              fontFamily={'body'}
              fontWeight="semibold"
              as="h4"
              textTransform={'uppercase'}
            >
              {titleText}
            </Heading>
          </Stack>
          <Stack direction={'row'} align={'center'}>
            <Text fontSize={'md'} fontWeight="bold" color={props.titleColor}>
              {numeratorText}
            </Text>
            <Text fontSize={'xs'} color={'gray.600'}>
              {denominatorText}
            </Text>
          </Stack>

          <Text color={'gray.500'} fontSize={'sm'}>
            {props.description}
          </Text>
          <Stack direction={'row'} align={'center'}>
            <Text
              color={'red.600'}
              fontSize={'2xl'}
              fontWeight={1200}
              textTransform={'uppercase'}
            >
              {priceText}
            </Text>
          </Stack>
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

            onClick(myContext, props.buyURL);
          }}
        >
          Buy {props.title}
        </Button>
      </Box>
    </Center>
  );
};

export default NFTListing;
