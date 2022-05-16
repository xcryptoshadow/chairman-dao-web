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
  Grid,
  theme,
  Button,
  Flex,
  Spacer,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

const Dashboard = () => {
  return (
    <Fragment>
      <Flex
        bg="#FFFFFF"
        textAlign="center"
        className="Content"
        minHeight={'66vh'}
        p={4}
        direction={'row'}
        justify={'center'}
      >
        <Flex direction={'column'}>
          <Box
            style={{
              padding: 20,
              width: 600,
              borderColor: 'black',
              borderWidth: 7,
              borderRadius: 20,
              marginTop: 80,
            }}
          >
            <Center>
              <Box>
                <Image
                  borderRadius="full"
                  boxSize="110px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  style={{ marginTop: -90 }}
                />
              </Box>
            </Center>
            <Box>
              <Text style={{ fontWeight: '700', fontSize: 23 }}>
                Cool Commie DAO
              </Text>
              <Text
                style={{ fontWeight: '500', fontSize: 13, color: '#9B9B9B' }}
              >
                0x7c88...8075
              </Text>
              <Text
                style={{ fontWeight: '500', fontSize: 13, color: '#9B9B9B' }}
              >
                Created May 1st, 2022
              </Text>
            </Box>
          </Box>

          <Box
            style={{
              padding: 20,
              width: 600,
              borderColor: 'black',
              borderWidth: 7,
              borderRadius: 20,
              marginTop: 30,
            }}
          >
            <Box>
              <Text style={{ fontWeight: '700', fontSize: 23 }}>
                Treasury Balance
              </Text>

              <Flex p={4}>
                <Box width="100%">
                  <SimpleGrid columns={2} spacing={10} width="100%">
                    <Box textAlign="left">
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 15,
                          color: '#9B9B9B',
                        }}
                      >
                        Token Symbol
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 15,
                          color: '#9B9B9B',
                        }}
                      >
                        Amount
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Dashboard;
