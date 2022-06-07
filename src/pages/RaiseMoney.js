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
  Editable,
  EditablePreview,
  EditableTextarea,
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

  const [money, setMoney] = useState('1000000');
  const [percent, setPercent] = useState('10');

  const [loading, setLoading] = useState(false);
  const [goldData, setGoldData] = useState({
    imgURL: 'https://data.whicdn.com/images/132813216/original.gif',
    tier: 'Gold',
    title: `${daoName} Gold NFTs`,
    description: `Edit Gold Tier Perks Here ✏`,
    price: 25000,
    quantityMinted: 10,
    color: 'yellow.300',
    titleColor: 'yellow.500',
  });
  const [silverData, setSilverData] = useState({
    imgURL:
      'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
    tier: 'Silver',
    title: `${daoName} Silver NFTs`,
    description: `Edit Silver Tier Perks Here ✏`,
    price: 2500,
    quantityMinted: 100,
    color: 'gray.300',
    titleColor: 'gray.600',
  });
  const [bronzeData, setBronzeData] = useState({
    imgURL:
      'https://bestanimations.com/media/diamonds/300032029lips-jewerly-animated-gif.gif',
    tier: 'Bronze',
    title: `${daoName} Bronze NFT Name`,
    description: `Edit Bronze Tier Perks Here ✏`,
    price: 250,
    quantityMinted: 1000,
    color: 'orange.600',
    titleColor: 'orange.600',
  });
  const [sapphireData, setSapphireData] = useState({
    imgURL: 'https://i.gifer.com/87ke.gif',
    tier: 'Sapphire',
    title: `${daoName} Sapphire NFT Name`,
    description: `Edit Sapphire Tier Perks Here ✏`,
    price: 25,
    quantityMinted: 10000,
    color: 'blue.200',
    titleColor: 'blue.500',
  });

  const myContext = useContext(AppContext);

  const onSubmit = async () => {
    //collect form data

    const secret = 'secret';
    const data = {
      daoName: daoName,
      guildID: guildID,
      goldNft: {
        imgURL: goldData.imgURL,
        title: goldData.title,
        description: goldData.description,
        price: goldData.price,
        quantityMinted: goldData.quantityMinted,
      },
      silverNft: {
        imgURL: silverData.imgURL,
        title: silverData.title,
        description: silverData.description,
        price: silverData.price,
        quantityMinted: silverData.quantityMinted,
      },
      bronzeNft: {
        imgURL: bronzeData.imgURL,
        title: bronzeData.title,
        description: bronzeData.description,
        price: bronzeData.price,
        quantityMinted: bronzeData.quantityMinted,
      },
      sapphireNft: {
        imgURL: sapphireData.imgURL,
        title: sapphireData.title,
        description: sapphireData.description,
        price: sapphireData.price,
        quantityMinted: sapphireData.quantityMinted,
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
  };

  const handleNftDataChange = (value, keyChanged) => {
    if (keyChanged === 'money') {
      let oldMoney = parseFloat(money);
      let newMoney = parseFloat(value);

      setMoney(value);

      let goldMoneyChange =
        ((newMoney - oldMoney) * 0.25) / goldData.quantityMinted;
      let newGoldData = goldData;
      newGoldData['price'] =
        parseFloat(goldData.price) + parseFloat(goldMoneyChange);
      setGoldData(newGoldData);

      let silverMoneyChange =
        ((newMoney - oldMoney) * 0.25) / silverData.quantityMinted;
      let newSilverData = silverData;
      newSilverData['price'] =
        parseFloat(silverData.price) + parseFloat(silverMoneyChange);
      setSilverData(newSilverData);

      let bronzeMoneyChange =
        ((newMoney - oldMoney) * 0.25) / bronzeData.quantityMinted;
      let newBronzeData = bronzeData;
      newBronzeData['price'] =
        parseFloat(bronzeData.price) + parseFloat(bronzeMoneyChange);
      setBronzeData(newBronzeData);

      let sapphireMoneyChange =
        ((newMoney - oldMoney) * 0.25) / sapphireData.quantityMinted;
      let newSapphireData = sapphireData;
      newSapphireData['price'] =
        parseFloat(sapphireData.price) + parseFloat(sapphireMoneyChange);
      setSapphireData(newSapphireData);
    }
  };

  // (money % percent) * 100 = (goldPrice * goldSupply) + (silverPrice * silverSupply) + (bronzePrice * bronzeSupply) + (sapphirePrice * sapphireSupply)

  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <Flex
            flexDirection="column"
            justifyContent={'center'}
            alignItems={'center'}
            minH="66vh"
          >
            <Box boxSize="sm" mb={4}>
              <Image
                src="https://64.media.tumblr.com/018cf1102da66a2193a42139d6634902/bc411e95d4f33a33-75/s500x750/ffab89441ae9ad97a14da309dd30fd6f3eb5a2ae.gif"
                alt="wait"
                borderRadius="20px"
              />
            </Box>
            <Box>
              <Spinner size="xl" />
            </Box>
            <Box>Creating your NFTs...</Box>
          </Flex>
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
                    onSubmit();
                  }}
                >
                  Publish these NFTs to blockchain
                </Button>
              </Box>

              <Box>
                {/* <Editable
                  color={props.titleColor}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                  fontWeight="semibold"
                  as="h4"
                  textTransform={'uppercase'}
                  defaultValue={titleText}
                >
                  <EditablePreview />
                  <EditableTextarea />
                </Editable> */}
                <Box
                  boxShadow="2xl"
                  p="6"
                  borderRadius="5"
                  bg="white"
                  w="100%"
                  align="center"
                  justify="center"
                  direction="column"
                >
                  <span>Raise $</span>
                  <span>
                    <Editable
                      // color={props.titleColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight="semibold"
                      as="h4"
                      textTransform={'uppercase'}
                      value={money}
                      onChange={nextValue =>
                        handleNftDataChange(nextValue, 'money')
                      }
                    >
                      <EditablePreview />
                      <EditableTextarea />
                    </Editable>
                  </span>
                  <span> for </span>
                  <span>
                    <Editable
                      // color={props.titleColor}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight="semibold"
                      as="h4"
                      textTransform={'uppercase'}
                      defaultValue={percent}
                      onChange={nextValue => setPercent(nextValue)}
                    >
                      <EditablePreview />
                      <EditableTextarea />
                    </Editable>
                  </span>
                  <span>% of the DAO's governance tokens</span>
                </Box>
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
                  nftData={goldData}
                  setNftData={setGoldData}
                  money={money}
                  setMoney={setMoney}
                />
                <CreateNFT
                  imgURL={silverData.imgURL}
                  tier={silverData.tier}
                  title={silverData.title}
                  price={silverData.price}
                  quantityMinted={silverData.quantityMinted}
                  color={silverData.color}
                  titleColor={silverData.titleColor}
                  nftData={silverData}
                  setNftData={setSilverData}
                  money={money}
                  setMoney={setMoney}
                />
                <CreateNFT
                  imgURL={bronzeData.imgURL}
                  tier={bronzeData.tier}
                  title={bronzeData.title}
                  price={bronzeData.price}
                  quantityMinted={bronzeData.quantityMinted}
                  color={bronzeData.color}
                  titleColor={bronzeData.titleColor}
                  nftData={bronzeData}
                  setNftData={setBronzeData}
                  money={money}
                  setMoney={setMoney}
                />
                <CreateNFT
                  imgURL={sapphireData.imgURL}
                  tier={sapphireData.tier}
                  title={sapphireData.title}
                  price={sapphireData.price}
                  quantityMinted={sapphireData.quantityMinted}
                  color={sapphireData.color}
                  titleColor={sapphireData.titleColor}
                  nftData={sapphireData}
                  setNftData={setSapphireData}
                  money={money}
                  setMoney={setMoney}
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
