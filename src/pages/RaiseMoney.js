import React, { Fragment } from 'react';
import { useContext } from 'react';
import AppContext from '../components/appContext';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Center,
  Link,
  VStack,
  Code,
  theme,
  Button,
  Flex,
  Spacer,
  Image,
  SimpleGrid,
  StackDivider,
  Grid,
  GridItem,
  Input,
  Select,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Divider,
  InputLeftElement,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  useDisclosure,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import CreateNFT from '../components/createNFT';

const MODALTITLE = 'ModalTitle';
const URLINPUTID = 'URLInput';

function onSubmit(myContext, tiersToSubmit) {
  //collect form data

  //collect NFT URLs

  //submit
  alert('subitting form -- implement this handler!');
}

const RaiseMoney = () => {
  const DAOName = 'Chad DAO';
  const testData = [
    {
      imgURL: 'https://i.gifer.com/87ke.gif',
      tier: 'Sapphire',
      title: 'Sapphire NFT Name',
      price: '36.00',
      quantityMinted: '3000',
      color: 'blue.200',
      titleColor: 'blue.500',
    },
    {
      imgURL:
        'https://bestanimations.com/media/diamonds/300032029lips-jewerly-animated-gif.gif',
      tier: 'Bronze',
      title: 'Bronze NFT Name',
      price: '100.00',
      quantityMinted: '1000',
      color: 'orange.600',
      titleColor: 'orange.600',
    },
    {
      imgURL:
        'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      tier: 'Silver',
      title: 'Silver NFT Name',
      price: '500.00',
      quantityMinted: '200',
      color: 'gray.300',
      titleColor: 'gray.600',
    },
    {
      imgURL: 'https://data.whicdn.com/images/132813216/original.gif',
      tier: 'Gold',
      title: 'Gold NFT Name',
      price: '10,000.00',
      quantityMinted: '10',
      color: 'yellow.300',
      titleColor: 'yellow.500',
    },
  ];

  var outputArr = [];
  var tiersToSubmit = [];

  for (var i = 0; i < testData.length; i++) {
    outputArr.push(
      <CreateNFT
        imgURL={testData[i].imgURL}
        tier={testData[i].tier}
        title={testData[i].title}
        price={testData[i].price}
        quantityMinted={testData[i].quantityMinted}
        color={testData[i].color}
        titleColor={testData[i].titleColor}
      />
    );

    tiersToSubmit.push(testData[i].tier);
  }

  const myContext = useContext(AppContext);

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
              Create {DAOName} NFT Tiers
            </Text>
          </Box>

          <Box>
            <Button
              id="publishRaise"
              borderRadius="full"
              bg={'red.600'}
              _hover={{ bg: 'red.800' }}
              color="white"
              w="100%"
              onClick={() => {
                onSubmit(myContext, tiersToSubmit);
              }}
            >
              Publish these NFTs to blockchain
            </Button>
          </Box>

          <SimpleGrid
            columns={2}
            minChildWidth="286px"
            spacing={3}
            width="60%"
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

export default RaiseMoney;
