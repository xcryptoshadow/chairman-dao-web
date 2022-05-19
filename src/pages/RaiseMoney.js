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

const RaiseMoney = () => {
  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mb={10}>
          <Box
            maxW="xl"
            borderWidth="8px"
            borderRadius="20px"
            borderColor="black"
            align="center"
            justify="center"
          >
            <Container p={4}>
              <Box mb={4}>
                <Text fontSize="2xl" style={{ fontWeight: '700' }}>
                  Raise Money From Users
                </Text>
              </Box>

              <Box>
                <Box mb={4} textAlign="left">
                  <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                    Sell token at:
                  </Text>
                </Box>
                <Box>
                  <InputGroup size="lg">
                    <Input
                      variant="filled"
                      placeholder="$1,000,000.00"
                      borderColor="black"
                      borderWidth="2px"
                      style={{ borderRadius: 7 }}
                    />
                    <InputRightAddon
                      children={<span style={{ fontWeight: 500 }}>CAP</span>}
                      borderColor="white"
                      bg="white"
                    />
                  </InputGroup>

                  <Box my={1}>
                    <Text fontWeight="500" fontSize="md">
                      or
                    </Text>
                  </Box>

                  <InputGroup size="lg">
                    <Input
                      variant="filled"
                      placeholder="25.00%"
                      borderColor="black"
                      borderRadius="7px"
                      borderWidth="2px"
                      style={{ borderRadius: 7 }}
                    />
                    <InputRightAddon
                      children={
                        <span style={{ fontWeight: 500 }}>DISCOUNT</span>
                      }
                      borderColor="white"
                      bg="white"
                    />
                  </InputGroup>
                </Box>
              </Box>

              <Divider my={6} />

              <Box>
                <Grid templateColumns="repeat(7, 1fr)" gap={6} mb={5}>
                  <GridItem colSpan={3}>
                    <Box>
                      <Button size="lg" w={'100%'} bg="black" color="white">
                        <Text fontSize="sm" fontWeight="700">
                          Use default <br /> deal memo
                        </Text>
                      </Button>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Flex
                      w="100%"
                      h="100%"
                      direction="row"
                      align="center"
                      justify="center"
                    >
                      <Text fontSize="md" fontWeight="600">
                        or
                      </Text>
                    </Flex>
                  </GridItem>
                  <GridItem colSpan={3}>
                    <Box>
                      <Button
                        size="lg"
                        variant="outline"
                        w="100%"
                        borderColor="black"
                        borderWidth="2px"
                      >
                        <Text fontSize="sm" fontWeight="700">
                          Create custom <br /> deal memo
                        </Text>
                      </Button>
                    </Box>
                  </GridItem>
                </Grid>
              </Box>

              <Divider my={6} />

              <Box mb={8}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={5}>
                  <GridItem colSpan={1}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                        Profile
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <Box textAlign="right">
                      <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                        Amount
                      </Text>
                    </Box>
                  </GridItem>
                </Grid>

                <Box>
                  <Box mb={4}>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={3}>
                      <GridItem colSpan={2}>
                        <Flex
                          textAlign="left"
                          direction="row"
                          align="center"
                          justify="left"
                          w="100%"
                          h="100%"
                        >
                          <Box boxSize="80px">
                            <Image
                              borderRadius="full"
                              src="https://bit.ly/dan-abramov"
                              alt="Dan Abramov"
                            />
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={3}>
                        <Flex
                          textAlign="right"
                          direction="column"
                          align="right"
                          justify="center"
                          w="100%"
                          h="100%"
                        >
                          <InputGroup size="lg" mt={4}>
                            <InputLeftElement
                              pointerEvents="none"
                              color="gray.300"
                              fontSize="1.2em"
                              children="$"
                            />
                            <Input
                              placeholder="Amount"
                              borderColor="black"
                              borderWidth="2px"
                            />
                          </InputGroup>
                        </Flex>
                      </GridItem>
                    </Grid>

                    <Box>
                      <Button w="100%" bg="red" color="white" size="xs">
                        <Text fontSize="sm" fontWeight="500">
                          Delete
                        </Text>
                      </Button>
                    </Box>
                  </Box>

                  <Box mb={4}>
                    <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={3}>
                      <GridItem colSpan={2}>
                        <Flex
                          textAlign="left"
                          direction="row"
                          align="center"
                          justify="left"
                          w="100%"
                          h="100%"
                        >
                          <Box boxSize="80px">
                            <Image
                              borderRadius="full"
                              src="https://bit.ly/dan-abramov"
                              alt="Dan Abramov"
                            />
                          </Box>
                        </Flex>
                      </GridItem>
                      <GridItem colSpan={3}>
                        <Flex
                          textAlign="left"
                          direction="column"
                          align="left"
                          justify="center"
                          w="100%"
                          h="100%"
                        >
                          <InputGroup size="lg" mt={4}>
                            <InputLeftElement
                              pointerEvents="none"
                              color="gray.300"
                              fontSize="1.2em"
                              children="$"
                            />
                            <Input
                              placeholder="Amount"
                              borderColor="black"
                              borderWidth="2px"
                            />
                          </InputGroup>
                        </Flex>
                      </GridItem>
                    </Grid>

                    <Box>
                      <Button w="100%" bg="red" color="white" size="xs">
                        <Text fontSize="sm" fontWeight="500">
                          Delete
                        </Text>
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box mb={8}>
                <Input
                  placeholder="Add User"
                  size="lg"
                  borderColor="black"
                  borderWidth={3}
                />
              </Box>

              <Box>
                <Button
                  size="lg"
                  borderRadius="full"
                  bg="black"
                  color="white"
                  w="100%"
                >
                  <Text fontSize="md" fontWeight="600">
                    Sell (x%) of DAO to these Users for (Y ETH)
                  </Text>
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default RaiseMoney;
