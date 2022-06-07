// @src/components/NFTListing.js

import React, { Fragment, useState, useContext } from 'react';
import {
  useAddress,
  useMarketplace,
  useEditionDrop,
} from '@thirdweb-dev/react';

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
  Spinner,
} from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';

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
  const address = useAddress();
  const marketplace = useMarketplace(props.marketplaceAddress);

  const [loading, setLoading] = useState(false);

  const titleText = `${props.title}`;
  const dollarPriceText = `$ ${(props.price * 1753.86).toFixed(2)}`;
  const ethPriceText = props.price ? `ETH ${props.price.toFixed(2)}` : `ETH 0`;

  const numeratorText = `${props.quantityRemaining}`;
  const denominatorText = ` / ${props.quantityMinted} remaining`;

  const imgHandle = IMAGEID + props.tier;
  const backgroundHandle = BACKGROUNDID + props.tier;

  const handleOpensea = async () => {
    window.open(props.buyURL);
    return null;
  };

  const handleBuy = async () => {
    setLoading(true);
    const response = await marketplace.buyoutListing(
      parseInt(props.tokenID),
      1
    );
    console.log('RESPONSE: ', response);
    setLoading(false);
    console.log('buyout');
  };

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
        {loading ? (
          <Fragment>
            <Flex
              flexDirection="column"
              justifyContent={'center'}
              alignItems={'center'}
              minH={'300px'}
            >
              <Box>
                <Spinner size="xl" color={props.color} />
              </Box>
            </Flex>
          </Fragment>
        ) : (
          <Fragment>
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
                onClick={() => {
                  handleOpensea();
                }}
              >
                <img src="https://i.imgur.com/UnZo08r.png" alt="opeansea" />
              </Circle>
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
                <Text
                  fontSize={'md'}
                  fontWeight="bold"
                  color={props.titleColor}
                >
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
                  {dollarPriceText}
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                <Text
                  color={'red.400'}
                  fontSize={'md'}
                  fontWeight={1500}
                  textTransform={'uppercase'}
                >
                  {ethPriceText}
                </Text>
              </Stack>
            </Stack>

            <Button
              /* flex={1} */
              px={4}
              py={4}
              fontSize={'1vw'}
              rounded={'full'}
              bg={props.color}
              color={'white'}
              maxW={'290px'}
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

                handleBuy();
              }}
              disabled={address ? false : true}
            >
              <span>Buy {props.title}</span>
            </Button>
          </Fragment>
        )}
      </Box>
    </Center>
  );
};

export default NFTListing;
