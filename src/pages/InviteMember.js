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
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const InviteMember = () => {
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
                Invite Users
              </Text>

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
                        }}
                      >
                        Info
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
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account Name:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account Description:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account:
                      </Text>
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
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account Name:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account Description:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account:
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 13,
                          color: '#9B9B9B',
                        }}
                      >
                        Account:
                      </Text>
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
                  Send invite to (2) users
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default InviteMember;
