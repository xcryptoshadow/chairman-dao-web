import React, { Fragment, useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AppContext from '../components/appContext';
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

import CreateNFT from '../components/createNFT';

const MODALTITLE = 'ModalTitle';
const URLINPUTID = 'URLInput';

const RaiseMoney = () => {
  let { payload } = useParams();
  let navigate = useNavigate();

  const decoded = jwtDecode(payload);
  console.log('Decoded: ', decoded);

  const daoName = decoded.daoName;
  const guildID = decoded.guildID;

  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState({
    imgURL: 'https://data.whicdn.com/images/132813216/original.gif',
    tier: 'Gold',
    title: `${daoName} Gold NFTs`,
    price: '10,000.00',
    quantityMinted: '10',
    color: 'yellow.300',
    titleColor: 'yellow.500',
  });
  const [silverData, setSilverData] = useState({
    imgURL:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    tier: 'Silver',
    title: `${daoName} Silver NFTs`,
    price: '500.00',
    quantityMinted: '200',
    color: 'gray.300',
    titleColor: 'gray.600',
  });
  const [bronzeData, setBronzeData] = useState({
    imgURL:
      'https://bestanimations.com/media/diamonds/300032029lips-jewerly-animated-gif.gif',
    tier: 'Bronze',
    title: `${daoName} Bronze NFT Name`,
    price: '100.00',
    quantityMinted: '1000',
    color: 'orange.600',
    titleColor: 'orange.600',
  });

  useEffect(() => {}, []);

  const testData = [
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

  const onSubmit = async (myContext, tiersToSubmit) => {
    //collect form data

    const secret = 'secret';
    const data = {
      daoName: daoName,
      guildID: guildID,
      goldNft: {
        imgURL: goldData.imgURL,
        title: goldData.title,
        price: goldData.price,
        quantityMinted: goldData.quantityMinted,
      },
      silverNft: {
        imgURL: silverData.imgURL,
        title: silverData.title,
        price: silverData.price,
        quantityMinted: silverData.quantityMinted,
      },
      bronzeNft: {
        imgURL: bronzeData.imgURL,
        title: bronzeData.title,
        price: bronzeData.price,
        quantityMinted: bronzeData.quantityMinted,
      },
    };

    console.log('DATA ==> ', data);

    const payload = jwtEncode(data, secret);

    //collect NFT URLs

    //submit
    setLoading(true);
    const response = await axios.post(
      `http://localhost:3000/v1/dao/mintNftCollections/?payload=${payload}`
    );
    setLoading(false);

    navigate(`/listing/${guildID}`);
    // console.log('CONSOLE', response.data);
  };

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <Box p={4} height={'66vh'}>
            <Center>
              <div>
                <Spinner />
              </div>
            </Center>
            <Center>
              <div>Creating your NFTs.....</div>
            </Center>
          </Box>
        </Fragment>
      ) : (
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
                  Create {daoName} NFT Tiers
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
                <CreateNFT
                  imgURL={goldData.imgURL}
                  tier={goldData.tier}
                  title={goldData.title}
                  price={goldData.price}
                  quantityMinted={goldData.quantityMinted}
                  color={goldData.color}
                  titleColor={goldData.titleColor}
                />
                <CreateNFT
                  imgURL={silverData.imgURL}
                  tier={silverData.tier}
                  title={silverData.title}
                  price={silverData.price}
                  quantityMinted={silverData.quantityMinted}
                  color={silverData.color}
                  titleColor={silverData.titleColor}
                />
                <CreateNFT
                  imgURL={bronzeData.imgURL}
                  tier={bronzeData.tier}
                  title={bronzeData.title}
                  price={bronzeData.price}
                  quantityMinted={bronzeData.quantityMinted}
                  color={bronzeData.color}
                  titleColor={bronzeData.titleColor}
                />
              </SimpleGrid>
            </VStack>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default RaiseMoney;
