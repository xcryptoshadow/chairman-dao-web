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
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const PayMember = () => {
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
              marginTop: 30,
            }}
          >
            <Flex direction={'column'}>
              <Text style={{ fontWeight: '700', fontSize: 23 }}>
                Treasury Balance
              </Text>

              <Flex p={4} direction={'column'}>
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

                <Box width="100%" style={{ paddingTop: 10 }}>
                  <SimpleGrid columns={2} spacing={10} width="100%">
                    <Box textAlign="left">
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 15,
                        }}
                      >
                        CHR
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        1,000,000.00
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box width="100%">
                  <SimpleGrid columns={2} spacing={10} width="100%">
                    <Box textAlign="left">
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 15,
                        }}
                      >
                        BTC
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        123.45678
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>

                <Box width="100%">
                  <SimpleGrid columns={2} spacing={10} width="100%">
                    <Box textAlign="left">
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 15,
                        }}
                      >
                        ETH
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        12.3456789
                      </Text>
                    </Box>
                  </SimpleGrid>
                </Box>
              </Flex>

              <Box>
                <Button
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '300px',
                  }}
                >
                  Expand
                </Button>
              </Box>
            </Flex>
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
            <Flex direction={'column'}>
              <Text style={{ fontWeight: '700', fontSize: 23 }}>Pay Users</Text>

              <Flex p={4} direction={'column'}>
                <Box>
                  <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={6}
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    <GridItem colSpan={1}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 15,
                          color: '#9B9B9B',
                        }}
                      >
                        Profile
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 15,
                          color: '#9B9B9B',
                          textAlign: 'right',
                        }}
                      >
                        Amount
                      </Text>
                    </GridItem>
                  </Grid>
                </Box>

                <Box mt={6}>
                  <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={6}
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    <GridItem colSpan={1}>
                      <Image
                        boxSize="80px"
                        borderRadius="full"
                        objectFit="cover"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Input
                        placeholder="Amount"
                        style={{ borderColor: 'black', borderWidth: '2' }}
                      />
                      <Select
                        placeholder="Enter Token"
                        style={{ borderColor: 'black', borderWidth: '2' }}
                        mt={2}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </GridItem>
                    <GridItem colSpan={3}>
                      <Button
                        w={'100%'}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          fontSize: 13,
                        }}
                      >
                        Delete
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>

                <Box mt={10}>
                  <Grid
                    templateColumns="repeat(3, 1fr)"
                    gap={6}
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    <GridItem colSpan={1}>
                      <Image
                        boxSize="80px"
                        borderRadius="full"
                        objectFit="cover"
                        src="https://bit.ly/dan-abramov"
                        alt="Dan Abramov"
                      />
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Input
                        placeholder="Amount"
                        style={{ borderColor: 'black', borderWidth: '2' }}
                      />
                      <Select
                        placeholder="Enter Token"
                        style={{ borderColor: 'black', borderWidth: '2' }}
                        mt={2}
                      >
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                      </Select>
                    </GridItem>
                    <GridItem colSpan={3}>
                      <Button
                        w={'100%'}
                        style={{
                          backgroundColor: 'red',
                          color: 'white',
                          fontSize: 13,
                        }}
                      >
                        Delete
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>

                <Box mt={10}>
                  <Input
                    placeholder="Add User"
                    size="lg"
                    style={{ borderColor: 'black', borderWidth: 3 }}
                  />
                </Box>
              </Flex>

              <Box mt={10}>
                <Button
                  borderRadius="full"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  Pay (2) users
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default PayMember;
