import React, { Fragment } from 'react';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  SimpleGrid,
  VStack,
  
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Usercard from '../components/usercard';


var testData = [];

const InviteMember = () => {
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
                    Invite Users to DAO
                  </Text>
                </Box>

                <Box>
                  <Button borderRadius="full" bg="black" color="white" w="100%">
                    Send invite to (2) users
                  </Button>
                </Box>

              <SimpleGrid 
                minChildWidth='286px' 
                spacing='40px'
                width="95%"
                align="center"
                justify="center"
              >
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
                <Usercard/>
              </SimpleGrid>

            </VStack>
              

               
          </Box>
    </Fragment>
  );
};

export default InviteMember;
