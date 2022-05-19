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
  Container,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const PayMember = () => {
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
            mb={8}
          >
            <Container p={4}>
              <Box mb={4}>
                <Text fontSize="2xl" fontWeight="700">
                  Treasury Balance
                </Text>
              </Box>

              <Box mb={4}>
                <SimpleGrid columns={2} spacing={10} width="100%" mb={3}>
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                      Token Symbol
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                      Amount
                    </Text>
                  </Box>
                </SimpleGrid>

                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      CHR
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      1,000,000.00
                    </Text>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      BTC
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      123.45678
                    </Text>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      ETH
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      12.3456789
                    </Text>
                  </Box>
                </SimpleGrid>
              </Box>

              <Box>
                <Button borderRadius="full" bg="black" color="white" w="50%">
                  Expand
                </Button>
              </Box>
            </Container>
          </Box>
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
                  Pay Users
                </Text>
              </Box>

              <Box mb={4}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={5}>
                  <GridItem colSpan={2}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                        Token Symbol
                      </Text>
                    </Box>
                  </GridItem>
                  <GridItem colSpan={3}>
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
                          <Input
                            placeholder="Amount"
                            size="sm"
                            borderColor="black"
                            borderWidth="2"
                            borderRadius="5px"
                            mb={2}
                          />
                          <Select
                            placeholder="Enter Token"
                            size="sm"
                            borderColor="black"
                            borderWidth="2"
                            borderRadius="5px"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
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
                          <Input
                            placeholder="Amount"
                            size="sm"
                            borderColor="black"
                            borderWidth="2"
                            borderRadius="5px"
                            mb={2}
                          />
                          <Select
                            placeholder="Enter Token"
                            size="sm"
                            borderColor="black"
                            borderWidth="2"
                            borderRadius="5px"
                          >
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                          </Select>
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
                <Button borderRadius="full" bg="black" color="white" w="100%">
                  Pay (2) users
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default PayMember;
