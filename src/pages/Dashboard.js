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
              <Text style={{ fontWeight: '700', fontSize: 23 }}>Ownership</Text>

              <Flex
                direction={'column'}
                align="center"
                justify="center"
                style={{ marginTop: 30 }}
              >
                <Flex style={{ width: '300px' }}>
                  <Doughnut data={data} />
                </Flex>
              </Flex>

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
                        Email
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
                        Percentage
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
                        user1@gmail.com
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        34.56%
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
                        user2@gmail.com
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        24.23%
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
                        user3@gmail.com
                      </Text>
                    </Box>
                    <Box textAlign="right">
                      <Text
                        style={{
                          fontWeight: '700',
                          fontSize: 15,
                        }}
                      >
                        9.78%
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
              <Text style={{ fontWeight: '700', fontSize: 23 }}>
                Token Info
              </Text>

              <Box>
                <Flex px={4} pt={4}>
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

                <Flex px={4} pt={2}>
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

                <Flex px={4} pt={2}>
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

                <Flex px={4} pt={2}>
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

                <Flex px={4} pt={2}>
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
              <Text style={{ fontWeight: '700', fontSize: 23 }}>
                Event Info
              </Text>

              <Flex direction={'column'} align="center" justify="center" mt={4}>
                <Box
                  style={{
                    padding: 10,
                    width: 500,
                    borderColor: '#C4C4C4',
                    borderWidth: 4,
                    borderRadius: 20,
                  }}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box style={{ textAlign: 'left' }}>
                      <Text style={{ fontWeight: '700', fontSize: 15 }}>
                        user5@gmail.com is a new member!
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 11,
                          color: '#9D9D9D',
                        }}
                      >
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 12,
                          color: '#A8151A',
                        }}
                      >
                        Details{' '}
                        <ChevronRightIcon
                          w={5}
                          h={5}
                          style={{ marginLeft: 3 }}
                        />
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 10,
                          color: '#9D9D9D',
                        }}
                      >
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  style={{
                    padding: 10,
                    width: 500,
                    borderColor: '#C4C4C4',
                    borderWidth: 4,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box style={{ textAlign: 'left' }}>
                      <Text style={{ fontWeight: '700', fontSize: 15 }}>
                        user5@gmail.com is a new member!
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 11,
                          color: '#9D9D9D',
                        }}
                      >
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 12,
                          color: '#A8151A',
                        }}
                      >
                        Details{' '}
                        <ChevronRightIcon
                          w={5}
                          h={5}
                          style={{ marginLeft: 3 }}
                        />
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 10,
                          color: '#9D9D9D',
                        }}
                      >
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  style={{
                    padding: 10,
                    width: 500,
                    borderColor: '#C4C4C4',
                    borderWidth: 4,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box style={{ textAlign: 'left' }}>
                      <Text style={{ fontWeight: '700', fontSize: 15 }}>
                        user5@gmail.com is a new member!
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 11,
                          color: '#9D9D9D',
                        }}
                      >
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 12,
                          color: '#A8151A',
                        }}
                      >
                        Details{' '}
                        <ChevronRightIcon
                          w={5}
                          h={5}
                          style={{ marginLeft: 3 }}
                        />
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 10,
                          color: '#9D9D9D',
                        }}
                      >
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  style={{
                    padding: 10,
                    width: 500,
                    borderColor: '#C4C4C4',
                    borderWidth: 4,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box style={{ textAlign: 'left' }}>
                      <Text style={{ fontWeight: '700', fontSize: 15 }}>
                        user5@gmail.com is a new member!
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 11,
                          color: '#9D9D9D',
                        }}
                      >
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 12,
                          color: '#A8151A',
                        }}
                      >
                        Details{' '}
                        <ChevronRightIcon
                          w={5}
                          h={5}
                          style={{ marginLeft: 3 }}
                        />
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 10,
                          color: '#9D9D9D',
                        }}
                      >
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>

                <Box
                  style={{
                    padding: 10,
                    width: 500,
                    borderColor: '#C4C4C4',
                    borderWidth: 4,
                    borderRadius: 20,
                    marginTop: 10,
                  }}
                >
                  <VStack spacing={2} align="stretch" p={4}>
                    <Box style={{ textAlign: 'left' }}>
                      <Text style={{ fontWeight: '700', fontSize: 15 }}>
                        user5@gmail.com is a new member!
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 11,
                          color: '#9D9D9D',
                        }}
                      >
                        user5@gmail.com has become a new member of the Cool
                        Commie DAO
                      </Text>
                    </Box>
                    <Box style={{ textAlign: 'left' }}>
                      <Text
                        style={{
                          fontWeight: '600',
                          fontSize: 12,
                          color: '#A8151A',
                        }}
                      >
                        Details{' '}
                        <ChevronRightIcon
                          w={5}
                          h={5}
                          style={{ marginLeft: 3 }}
                        />
                      </Text>
                    </Box>
                    <Box>
                      <Text
                        style={{
                          fontWeight: '400',
                          fontSize: 10,
                          color: '#9D9D9D',
                        }}
                      >
                        Created At: May 12th, 2022
                      </Text>
                    </Box>
                  </VStack>
                </Box>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default Dashboard;
