import React, { Fragment } from 'react';

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
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Imageupload from '../components/imageupload';

const RaiseMoney = () => {
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
                    Raise Money
                  </Text>
                </Box>

                <Box>
                  <Button id="publishRaise"
                    borderRadius="full" 
                    bg={'red.600'}
                    _hover={{ bg: 'red.800' }} 
                    color="white" 
                    w="100%" 
                    isLoading
                    loadingText='Click any field to edit details...'
                    >
                    Click any field to edit details...
                  </Button>
                </Box>

              <SimpleGrid
                columns={2} 
                minChildWidth='286px' 
                spacing={3}
                width="60%"
                align="center"
                justify="center"
              >
                  
                <Imageupload
                  imgURL='https://i.gifer.com/87ke.gif'
                  tier='Sapphire'
                  title='Melon Tier'
                  price='36.00'
                  quantityMinted='3000'
                  color='blue.200'
                  titleColor='blue.500'
                  NFTNum="3"
                  />
                <Imageupload
                  imgURL='https://bestanimations.com/media/diamonds/300032029lips-jewerly-animated-gif.gif'
                  tier='Bronze'
                  title='Teeth Tier'
                  price='100.00'
                  quantityMinted='1000'
                  color='orange.600'
                  titleColor='orange.600'
                  NFTNum="2"
                  />
                <Imageupload
                  imgURL='https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
                  tier='Silver'
                  title='Chair Tier'
                  price='500.00'
                  quantityMinted='200'
                  color='gray.300'
                  titleColor='gray.600'
                  NFTNum="1"
                  />
                <Imageupload
                  imgURL='https://data.whicdn.com/images/132813216/original.gif'
                  tier='Gold'
                  title='Gatsby Tier'
                  price='10,000.00'
                  quantityMinted='10'
                  color='yellow.300'
                  titleColor='yellow.500'
                  NFTNum="0"
                  />

              </SimpleGrid>

            </VStack>
              

               
          </Box>
    </Fragment>
  );
};

export default RaiseMoney;
