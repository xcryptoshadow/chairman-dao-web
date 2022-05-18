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
  StackDivider,
  Container,
  GridItem,
  Divider,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

// chartjs
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Doughnut Chart',
        color: 'blue',
        font: {
          size: 34,
        },
        padding: {
          top: 30,
          bottom: 30,
        },
        responsive: true,
        animation: {
          animateScale: true,
        },
      },
    },
  };

  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mt={20}>
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
              <Box boxSize="120px" mb={4}>
                <Image
                  borderRadius="full"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                  style={{ marginTop: -90 }}
                />
              </Box>

              <Box>
                <Text fontSize="2xl" fontWeight="700">
                  Cool Commie DAO
                </Text>

                <Text fontSize="md" fontWeight="500" color="#9B9B9B">
                  0x7c88...8075
                </Text>
                <Text fontSize="xs" fontWeight="500" color="#9B9B9B">
                  Created May 1st, 2022
                </Text>
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
            mb={8}
          >
            <Container p={4}>
              <Box mb={4}>
                <Text fontSize="2xl" fontWeight="700">
                  Ownership
                </Text>
              </Box>

              <Box mb={4}>
                <Box w="70%">
                  <Doughnut data={data} />
                </Box>
              </Box>

              <Box mb={4}>
                <SimpleGrid columns={2} spacing={10} width="100%" mb={3}>
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                      Email
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="600" color="#9B9B9B">
                      Percentage
                    </Text>
                  </Box>
                </SimpleGrid>

                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      user1@gmail.com
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      34.56%
                    </Text>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      user2@gmail.com
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      24.23%
                    </Text>
                  </Box>
                </SimpleGrid>
                <SimpleGrid columns={2} spacing={10} width="100%">
                  <Box textAlign="left">
                    <Text fontSize="md" fontWeight="500">
                      user3@gmail.com
                    </Text>
                  </Box>
                  <Box textAlign="right">
                    <Text fontSize="md" fontWeight="700">
                      9.78%
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
            mb={8}
          >
            <Container p={4}>
              <Box mb={4}>
                <Text fontSize="2xl" fontWeight="700">
                  Token Info
                </Text>
              </Box>

              <Box mb={4}>
                <Flex direction="row" align="center" justify="left">
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#9B9B9B',
                      marginRight: 10,
                    }}
                  >
                    Token Info #1:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                    }}
                  >
                    Lorem Ipsem
                  </Text>
                </Flex>

                <Flex direction="row" align="center" justify="left">
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#9B9B9B',
                      marginRight: 10,
                    }}
                  >
                    Token Info #2:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                    }}
                  >
                    Lorem Ipsem
                  </Text>
                </Flex>

                <Flex direction="row" align="center" justify="left">
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#9B9B9B',
                      marginRight: 10,
                    }}
                  >
                    Token Info #3:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                    }}
                  >
                    Lorem Ipsem
                  </Text>
                </Flex>

                <Flex direction="row" align="center" justify="left">
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#9B9B9B',
                      marginRight: 10,
                    }}
                  >
                    Token Info #4:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                    }}
                  >
                    Lorem Ipsem
                  </Text>
                </Flex>

                <Flex direction="row" align="center" justify="left">
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#9B9B9B',
                      marginRight: 10,
                    }}
                  >
                    Token Info #5:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 17,
                    }}
                  >
                    Lorem Ipsem
                  </Text>
                </Flex>
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
                <Text fontSize="2xl" fontWeight="700">
                  Event Info
                </Text>
              </Box>

              <Divider mb={4} style={{ borderColor: 'black' }} />

              <Box style={{ overflowY: 'scroll', maxHeight: '550px' }}>
                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  p={4}
                  borderColor="#C4C4C4"
                  borderWidth="4px"
                  borderRadius="20px"
                  mb={4}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box textAlign="left">
                      <Text fontSize="md" fontWeight="700">
                        user5@gmail.com is a new member!
                      </Text>
                      <Text fontSize="sm" fontWeight="500" color="#9B9B9B">
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box textAlign="left">
                      <Text fontSize="sm" fontWeight="600" color="#A8151A">
                        Details
                        <ChevronRightIcon w={5} h={5} ml={2} />
                      </Text>
                    </Box>
                    <Box>
                      <Text fontSize="xs" fontWeight="400" color="#9D9D9D">
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Dashboard;
