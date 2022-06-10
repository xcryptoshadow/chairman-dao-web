import React, { Fragment, useState } from 'react';

// components
import DisconnectButton from './DisconnectButton';
import InviteCardComponent from './InviteCardComponent';

import { useAddress, useEditionDrop } from '@thirdweb-dev/react';

// chakra ui
import {
  Box,
  Text,
  VStack,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Container,
  Divider,
  Spacer,
  Center,
  Heading,
  Input,
  Spinner,
} from '@chakra-ui/react';

const WalletDashboard = props => {
  const address = useAddress();
  const [loading, setLoading] = useState(false);
  return (
    <Fragment>
      {loading ? (
        <Fragment>
          <Box>
            <Center>
              <Spinner size="xl" />
            </Center>
          </Box>
        </Fragment>
      ) : (
        <Fragment>
          <Box mb={8} maxW="xl" align="center" justify="center">
            <Text fontSize="2xl" fontWeight="700">
              GM avikonduru@gmail.com
            </Text>
            <Text fontSize="md" fontWeight="500" color="#9B9B9B">
              {address}
            </Text>
          </Box>

          {props.inviteData && (
            <Fragment>
              <InviteCardComponent inviteData={props.inviteData} />
            </Fragment>
          )}

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
              <Box mb={8}>
                <Heading as="h2" size="2xl">
                  Governance Tokens
                </Heading>
              </Box>
              <Box>
                <Container maxW="md">
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        BTC
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Text fontSize="lg" fontWeight="800">
                        123.45678
                      </Text>
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        ETH
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Text fontSize="lg" fontWeight="800">
                        0.9876
                      </Text>
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        MATIC
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Text fontSize="lg" fontWeight="800">
                        732.682
                      </Text>
                    </Center>
                  </Flex>
                </Container>
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
              <Box mb={8}>
                <Heading as="h2" size="2xl">
                  NFTs
                </Heading>
              </Box>
              <Box>
                <Container maxW="md">
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        #219
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Image
                        boxSize="80px"
                        borderRadius="10px"
                        objectFit="cover"
                        src="https://img.seadn.io/files/1bb055d6c11b63cbbc7a14a40745a169.png?fit=max&auto=format&w=600"
                        alt="nft_image"
                      />
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        Dobie #3061
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Image
                        boxSize="80px"
                        borderRadius="10px"
                        objectFit="cover"
                        src="https://lh3.googleusercontent.com/KsNPp2tlaHoLfdExDmoExAP9d6sbQJGQjM3DpH_L5zY5VkfrD7Bk5nbWpHszhrOUSpApLiK3hNbtfRntaAftpQUo-vY6eF2UrwwWig=w600"
                        alt="nft_image"
                      />
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        Azuki #2904
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Image
                        boxSize="80px"
                        borderRadius="5px"
                        objectFit="cover"
                        src="https://img.seadn.io/files/908873b117e96395e2cbb5f4784e2396.png?fit=max&auto=format&w=600"
                        alt="nft_image"
                      />
                    </Center>
                  </Flex>
                </Container>
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
              <Box mb={8}>
                <Heading as="h2" size="2xl">
                  DAOs
                </Heading>
                <Text fontSize="md" fontWeight="500" color="#9B9B9B">
                  These are the DAO's you're apart of
                </Text>
              </Box>
              <Box>
                <Container maxW="md">
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        Chad DAO
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Button colorScheme="purple">Go to Discord</Button>
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        Giga DAO
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Button colorScheme="purple">Go to Discord</Button>
                    </Center>
                  </Flex>
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        Dao DAO
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      <Button colorScheme="purple">Go to Discord</Button>
                    </Center>
                  </Flex>
                </Container>
              </Box>
            </Container>
          </Box>
          <Box maxW="xl" align="center" justify="center">
            <DisconnectButton />
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default WalletDashboard;
