import React, { Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../components/appContext';
import Iframe from 'react-iframe';

import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwtEncode from 'jwt-encode';

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
  Spinner,
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
  let { guildID } = useParams();
  const [daoName, setDaoName] = useState('');
  const [goldNft, setGoldNft] = useState({});
  const [silverNft, setSilverNft] = useState({});
  const [bronzeNft, setBronzeNft] = useState({});
  const [sapphireNft, setSapphireNft] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.post(
        'http://localhost:3001/v1/dao/getNftContracts?guildID=952747397426065418'
      );
      setLoading(false);
      console.log(response.data);

      setDaoName('Aviserver_DAO');
      setGoldNft(response.data.goldResponse);
      setSilverNft(response.data.silverResponse);
      setBronzeNft(response.data.bronzeResponse);
      setSapphireNft(response.data.sapphireResponse);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const testData = [
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
  ];

  var outputArr = [];
  var tiersToSubmit = [];

  var titleStr = `Purchase ${daoName} NFTs`;

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
        {loading ? (
          <Fragment>
            <Flex
              flexDirection="column"
              justifyContent={'center'}
              alignItems={'center'}
              minH="59.5vh"
            >
              <Box>
                <Spinner size="xl" />
              </Box>
              <Box>Loading...</Box>
            </Flex>
          </Fragment>
        ) : (
          <Fragment>
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
                <NFTListing
                  imgURL={goldNft.imageUrl}
                  tier={'Gold'}
                  title={goldNft.name}
                  price={goldNft.price}
                  quantityMinted={goldNft.supply}
                  quantityRemaining={goldNft.supply}
                  color={testData[0].color}
                  titleColor={testData[0].titleColor}
                  description={goldNft.description}
                  buyURL={`https://testnets.opensea.io/assets/rinkeby/${goldNft.contractAddress}/${goldNft.tokenID}`}
                  marketplaceAddress={goldNft.marketplaceAddress}
                  tokenID={goldNft.tokenID}
                />
                <NFTListing
                  imgURL={silverNft.imageUrl}
                  tier={'Silver'}
                  title={silverNft.name}
                  price={silverNft.price}
                  quantityMinted={silverNft.supply}
                  quantityRemaining={silverNft.supply}
                  color={testData[1].color}
                  titleColor={testData[1].titleColor}
                  description={silverNft.description}
                  buyURL={`https://testnets.opensea.io/assets/rinkeby/${silverNft.contractAddress}/${silverNft.tokenID}`}
                  marketplaceAddress={silverNft.marketplaceAddress}
                  tokenID={silverNft.tokenID}
                />
                <NFTListing
                  imgURL={bronzeNft.imageUrl}
                  tier={'Bronze'}
                  title={bronzeNft.name}
                  price={bronzeNft.price}
                  quantityMinted={bronzeNft.supply}
                  quantityRemaining={bronzeNft.supply}
                  color={testData[2].color}
                  titleColor={testData[2].titleColor}
                  description={bronzeNft.description}
                  buyURL={`https://testnets.opensea.io/assets/rinkeby/${bronzeNft.contractAddress}/${bronzeNft.tokenID}`}
                  marketplaceAddress={bronzeNft.marketplaceAddress}
                  tokenID={bronzeNft.tokenID}
                />
                <NFTListing
                  imgURL={sapphireNft.imageUrl}
                  tier={'Bronze'}
                  title={sapphireNft.name}
                  price={sapphireNft.price}
                  quantityMinted={sapphireNft.supply}
                  quantityRemaining={sapphireNft.supply}
                  color={'blue.200'}
                  titleColor={'blue.500'}
                  description={sapphireNft.description}
                  buyURL={`https://testnets.opensea.io/assets/rinkeby/${sapphireNft.contractAddress}/${sapphireNft.tokenID}`}
                  marketplaceAddress={sapphireNft.marketplaceAddress}
                  tokenID={sapphireNft.tokenID}
                />
              </SimpleGrid>
            </VStack>
          </Fragment>
        )}
      </Box>
    </Fragment>
  );
};

export default Listing;
