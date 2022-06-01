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

import NFTListing from '../components/NFTListing';

const MODALTITLE = 'ModalTitle';
const URLINPUTID = 'URLInput';

function onSubmit(tiersToSubmit) {
  //collect form data
  //collect NFT URLs
  //submit
}

const loremStr =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae elit eleifend sem congue aliquam eu vel libero. Maecenas justo ex, aliquet at feugiat eget, aliquam quis felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec feugiat id nulla vitae venenatis. Ut cursus lorem vitae lacus semper, ut porttitor nunc pulvinar. Aliquam erat volutpat. Aliquam erat volutpat.';
const buyURL =
  'https://opensea.io/assets/ethereum/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/311000172';

const Listing = () => {
  const DAOName = 'Chad DAO';

  const testData = [
    {
      imgURL: 'https://i.gifer.com/87ke.gif',
      tier: 'Sapphire',
      title: 'Melon Tier',
      price: '36.00',
      quantityMinted: '3000',
      quantityRemaining: '2539',
      color: 'blue.500',
      titleColor: 'blue.600',
      description: loremStr,
      buyURL: buyURL,
    },
    {
      imgURL:
        'https://bestanimations.com/media/diamonds/300032029lips-jewerly-animated-gif.gif',
      tier: 'Bronze',
      title: 'Teeth Tier',
      price: '100.00',
      quantityMinted: '1000',
      quantityRemaining: '539',
      color: 'orange.600',
      titleColor: 'orange.700',
      description: loremStr,
      buyURL: buyURL,
    },
    {
      imgURL:
        'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      tier: 'Silver',
      title: 'Chair Tier',
      price: '500.00',
      quantityMinted: '200',
      quantityRemaining: '39',
      color: 'gray.500',
      titleColor: 'gray.600',
      description: loremStr,
      buyURL: buyURL,
    },
    {
      imgURL: 'https://data.whicdn.com/images/132813216/original.gif',
      tier: 'Gold',
      title: 'Gatsby Tier',
      price: '10,000.00',
      quantityMinted: '10',
      quantityRemaining: '4',
      color: 'yellow.500',
      titleColor: 'yellow.700',
      description: loremStr,
      buyURL: buyURL,
    },
  ];

  var outputArr = [];
  var tiersToSubmit = [];

  for (var i = 0; i < testData.length; i++) {
    outputArr.push(
      <NFTListing
        imgURL={testData[i].imgURL}
        tier={testData[i].tier}
        title={testData[i].title}
        price={testData[i].price}
        quantityMinted={testData[i].quantityMinted}
        quantityRemaining={testData[i].quantityRemaining}
        color={testData[i].color}
        titleColor={testData[i].titleColor}
        description={testData[i].description}
        buyURL={testData[i].buyURL}
      />
    );

    tiersToSubmit.push(testData[i].tier);
  }

  var titleStr = `Purchase ${DAOName} NFTs`;

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
              {titleStr}
            </Text>
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

export default Listing;
