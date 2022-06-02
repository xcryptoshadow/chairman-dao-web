// @src/components/createNFT.js

import React, { Fragment, useState } from 'react';

import { useContext } from 'react';
import AppContext from './appContext';

import {
    ChakraProvider,
    Box,
    Text,
    Button,
    SimpleGrid,
    VStack,
    CircularProgress,
    Stack,
    Center,
    PinInputDescendantsProvider,
    
  } from '@chakra-ui/react';


function FetchInterstitial(){

    return(
        <Center py={12} px={4}>
            <Text
            color={'gray.500'} fontSize={'sm'} 
                    >
            Loading  
                      
            </Text>
            <CircularProgress px={4} isIndeterminate color='red.500' />
        </Center>
        
    );
    
}

export default FetchInterstitial;