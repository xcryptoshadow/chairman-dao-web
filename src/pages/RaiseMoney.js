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
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const RaiseMoney = () => {
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
        mb={10}
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
                Raise Money From Users
              </Text>

              <Flex p={4} direction={'column'}>
                <Box>
                  <Box style={{ textAlign: 'left' }}>
                    <Text
                      style={{
                        fontWeight: '600',
                        fontSize: 15,
                        color: '#9B9B9B',
                      }}
                    >
                      Sell token at:
                    </Text>
                  </Box>

                  <Box>
                    <InputGroup size="lg" mt={4}>
                      <Input
                        variant="filled"
                        placeholder="$1,000,000.00"
                        style={{
                          borderColor: 'black',
                          borderRadius: 7,
                          borderWidth: 2,
                        }}
                      />
                      <InputRightAddon
                        children={<span style={{ fontWeight: 500 }}>CAP</span>}
                        style={{
                          borderColor: 'white',
                          borderRadius: 7,
                          borderWidth: 3,
                          backgroundColor: 'white',
                        }}
                      />
                    </InputGroup>

                    <Text mt={2} style={{ fontWeight: 500 }}>
                      or
                    </Text>

                    <InputGroup size="lg" mt={2}>
                      <Input
                        variant="filled"
                        placeholder="25.00%"
                        style={{
                          borderColor: 'black',
                          borderRadius: 7,
                          borderWidth: 3,
                        }}
                      />
                      <InputRightAddon
                        children={
                          <span style={{ fontWeight: 500 }}>DISCOUNT</span>
                        }
                        style={{
                          borderColor: 'white',
                          borderRadius: 7,
                          borderWidth: 2,
                          backgroundColor: 'white',
                        }}
                      />
                    </InputGroup>
                  </Box>
                </Box>

                <Divider my={6} />

                <Box>
                  <Grid templateColumns="repeat(5, 1fr)" gap={1}>
                    <GridItem colSpan={2}>
                      <Button
                        size="lg"
                        w={'100%'}
                        style={{ backgroundColor: 'black', color: 'white' }}
                      >
                        <Text m={4}>
                          Use default <br /> deal memo
                        </Text>
                      </Button>
                    </GridItem>
                    <GridItem colSpan={1}>
                      <Text mt={3} style={{ fontWeight: 500 }}>
                        or
                      </Text>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <Button
                        size="lg"
                        variant="outline"
                        w={'100%'}
                        style={{ borderColor: 'black', borderWidth: 2 }}
                      >
                        Create custom <br /> deal memo
                      </Button>
                    </GridItem>
                  </Grid>
                </Box>

                <Divider my={6} />

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
                      <InputGroup size={'lg'} mt={4}>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          placeholder="Amount"
                          style={{ borderColor: 'black', borderWidth: 3 }}
                        />
                      </InputGroup>
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
                      <InputGroup size={'lg'} mt={4}>
                        <InputLeftElement
                          pointerEvents="none"
                          color="gray.300"
                          fontSize="1.2em"
                          children="$"
                        />
                        <Input
                          placeholder="Amount"
                          style={{ borderColor: 'black', borderWidth: 3 }}
                        />
                      </InputGroup>
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
                  Sell (x%) of DAO to these Users for (Y ETH)
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default RaiseMoney;
