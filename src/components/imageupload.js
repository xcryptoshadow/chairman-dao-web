// @src/components/imageupload.js

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
    LinkOverlay
  } from '@chakra-ui/react';

import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiCamera } from 'react-icons/fi';
  
const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';

    

function Rating({ rating, numReviews }) {
    return (
        <Box d="flex" alignItems="center">
        {Array(5)
            .fill('')
            .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
                return (
                <BsStarFill
                    key={i}
                    style={{ marginLeft: '1' }}
                    color={i < rating ? 'teal.500' : 'gray.300'}
                />
                );
            }
            if (roundedRating - i === 0.5) {
                return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
            })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {numReviews} review{numReviews > 1 && 's'}
        </Box>
        </Box>
    );
    }

const data = {
    isNew: true,
    imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
};

function clicked(props, myContext){
    var alertStr = "clicked on " + props.tier;
    alert(alertStr);
}


const Imageupload = (props) =>{

    const myContext = useContext(AppContext);

    const eText = `Edit ${props.tier} Tier Perks Here ✏`;
    const titleText = `${props.title}`;
    const priceText = `$${props.price}`;
    const mintText = `(x${props.quantityMinted})`;

    const hrefStr = `javascript:clicked(${props.NFTNum})`;

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
          zIndex={1}>
          <Box
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
            }}>
            <Circle
                size="30px"
                position="absolute"
                top={2}
                right={2}
                bg={props.color}
            />
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={props.imgURL}
            />

          </Box>
          
          <Stack pt={10} align={'center'}>
            <Stack direction={'row'} align={'center'}> 
            <Editable
                color={props.titleColor} 
                fontSize={'2xl'}
                fontFamily={'body'}
                fontWeight="semibold"
                as="h4" 
                textTransform={'uppercase'} 
                defaultValue={titleText}>
                <EditablePreview />
                <EditableTextarea />
            </Editable>
            <Tooltip
                    label="Click to change NFT Image"
                    bg="white"
                    placement={'top'}
                    color={'gray.800'}
                    fontSize={'1.2em'}>
                    
                    <chakra.a onClick={() => clicked(props, myContext) }
                    
                    display={'flex'}>
                        <Icon as={FiCamera} 
                            h={7} w={7} 
                            alignSelf={'center'} 
                            />
                    </chakra.a>
                        
                    
                        
                    
                </Tooltip>
            </Stack>
            <Editable
                color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'} 
                defaultValue={eText}>
                <EditablePreview />
                <EditableTextarea />
            </Editable>
            <Stack direction={'row'} align={'center'}>
              <Editable
                color={'red.600'} 
                fontSize={'xl'} 
                fontWeight={1200}
                textTransform={'uppercase'} 
                defaultValue={priceText}>
                <EditablePreview />
                <EditableInput />
            </Editable>
            <Editable
                color={'gray.600'} 
                defaultValue={mintText}>
                <EditablePreview />
                <EditableInput />
            </Editable>
            </Stack>

          </Stack>
        </Box>
      </Center>
    );
  }

  export default Imageupload;  