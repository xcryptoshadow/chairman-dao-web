// @src/components/createNFT.js

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
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
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

function changeURL(myContext, value) {
  myContext.NFTUrl = value;
}

const CreateNFT = props => {
  const myContext = useContext(AppContext);

  const handleNftDataChange = (value, keyChanged) => {
    if (keyChanged === 'price') {
      let oldPrice = parseFloat(props.nftData.price);
      let newPrice = parseFloat(value);

      let newNftData = props.nftData;
      newNftData[keyChanged] = value;
      props.setNftData(newNftData);

      let moneyChange =
        (newPrice - oldPrice) * parseFloat(props.nftData.quantityMinted);
      console.log('money', props.money);
      console.log('moneyChange', moneyChange);
      console.log(
        'NEWCHAGE',
        parseFloat(props.money) + parseFloat(moneyChange)
      );
      props.setMoney(parseFloat(props.money) + parseFloat(moneyChange));
    } else if (keyChanged === 'quantityMinted') {
      let oldQuantity = parseFloat(props.nftData.quantityMinted);
      let newQuantity = parseFloat(value);

      let newNftData = props.nftData;
      newNftData[keyChanged] = value;
      props.setNftData(newNftData);

      let moneyChange =
        (newQuantity - oldQuantity) * parseFloat(props.nftData.price);
      console.log('money', props.money);
      console.log('moneyChange', moneyChange);
      console.log(
        'NEWCHAGE',
        parseFloat(props.money) + parseFloat(moneyChange)
      );
      props.setMoney(parseFloat(props.money) + parseFloat(moneyChange));
    } else {
      let newNftData = props.nftData;
      newNftData[keyChanged] = value;
      props.setNftData(newNftData);
    }
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const modalTitle = MODALTITLE + props.nftData.tier;
  const urlHandle = URLINPUTID + props.nftData.tier;

  const imgHandle = IMAGEID + props.nftData.tier;
  const backgroundHandle = BACKGROUNDID + props.nftData.tier;
  const formHandle = FORMID + props.nftData.tier;

  return (
    <Center py={12}>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader id={modalTitle}>
            Change {props.nftData.tier} NFT Image
          </ModalHeader>
          <ModalCloseButton />
          <form>
            <ModalBody>
              <FormControl id={urlHandle} mt={4}>
                <FormLabel>Input Image URL</FormLabel>
                <Input
                  size="lg"
                  placeholder="https://mysite.com/image.png"
                  onChange={event =>
                    changeURL(myContext, event.currentTarget.value)
                  }
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="red"
                mr={3}
                onClick={() => {
                  onClose();
                  document.getElementById(imgHandle).src = myContext.NFTUrl;

                  //TODO: figure out how to change :after background-image
                  //may need rearchitecting...
                }}
              >
                Change Image
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>

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
            backgroundImage: `url(${props.nftData.imgURL})`,
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
            bg={props.nftData.color}
          />
          <Image
            id={imgHandle}
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={props.nftData.imgURL}
          />
        </Box>
        <form id={formHandle}>
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}>
              <Editable
                color={props.nftData.titleColor}
                fontSize={'2xl'}
                fontFamily={'body'}
                fontWeight="semibold"
                as="h4"
                textTransform={'uppercase'}
                defaultValue={props.nftData.title}
                onChange={nextValue => handleNftDataChange(nextValue, 'title')}
              >
                <EditablePreview />
                <EditableTextarea />
              </Editable>
              <Tooltip
                label="Click to change NFT Image"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}
              >
                <chakra.a onClick={() => onOpen()} display={'flex'}>
                  <Icon as={FiCamera} h={7} w={7} alignSelf={'center'} />
                </chakra.a>
              </Tooltip>
            </Stack>
            <Editable
              color={'gray.500'}
              fontSize={'sm'}
              textTransform={'uppercase'}
              defaultValue={props.nftData.description}
              onChange={nextValue =>
                handleNftDataChange(nextValue, 'description')
              }
            >
              <EditablePreview />
              <EditableTextarea />
            </Editable>
            <Stack direction={'row'} align={'center'}>
              {/* <Editable
                color={'red.600'}
                fontSize={'xl'}
                fontWeight={1200}
                textTransform={'uppercase'}
                value={props.nftData.price}
                onChange={nextValue => handleNftDataChange(nextValue, 'price')}
              >
                <EditablePreview />
                <EditableInput />
              </Editable> */}
              <Box
                color={'red.600'}
                fontSize={'xl'}
                fontWeight={1200}
                textTransform={'uppercase'}
              >
                $ {props.nftData.price}
              </Box>
              <Box>X</Box>
              <Editable
                color={'gray.600'}
                value={props.nftData.quantityMinted}
                onChange={nextValue =>
                  handleNftDataChange(nextValue, 'quantityMinted')
                }
              >
                {console.log(props.nftData.quantityMinted)}
                <EditablePreview />
                <EditableInput />
              </Editable>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Center>
  );
};

export default CreateNFT;
