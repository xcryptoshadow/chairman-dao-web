import React, { Fragment, useState } from 'react';

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
} from '@chakra-ui/react';

import { useAddress } from '@thirdweb-dev/react';

// utils
import ConnectMagicButton from '../components/ConnectMagicButton';
import ConnectMetamaskButton from '../components/ConnectMetamaskButton';

const Wallet = () => {
  const address = useAddress();

  let CreateWallet = (
    <Fragment>
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
          <Box boxSize="350px" mb={4}>
            <Image
              borderRadius="20px"
              src="https://i.guim.co.uk/img/media/bc39fec3e5dabffc0d80406656ec2feb6a0ebec5/34_16_1115_669/master/1115.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=7700f10f0750d6bd0284f07b63b11b2b"
              alt="Dan Abramov"
            />
          </Box>
          <Box>
            <ConnectMagicButton />
            {/* <ConnectMetamaskButton /> */}
          </Box>
        </Container>
      </Box>
    </Fragment>
  );

  let WalletDashboard = (
    <Fragment>
      <Box mb={8} maxW="xl" align="center" justify="center">
        <Text fontSize="2xl" fontWeight="700">
          GM avikonduru@gmail.com
        </Text>
        <Text fontSize="md" fontWeight="500" color="#9B9B9B">
          0x5a4203C8F1cB39643a8A51C460411Ef2D257793a
        </Text>
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
            <Text fontSize="2xl" fontWeight="700">
              Invites
            </Text>
          </Box>
          <Box>
            <Container maxW="md">
              <Flex mb={4}>
                <Center>
                  <Text fontSize="lg" fontWeight="500">
                    PizzaDAO
                  </Text>
                </Center>
                <Spacer />
                <Center>
                  <Button colorScheme="blue">Accept Invite</Button>
                </Center>
              </Flex>
              <Flex mb={4}>
                <Center>
                  <Text fontSize="lg" fontWeight="500">
                    PizzaDAO
                  </Text>
                </Center>
                <Spacer />
                <Center>
                  <Button colorScheme="blue">Accept Invite</Button>
                </Center>
              </Flex>
              <Flex mb={4}>
                <Center>
                  <Text fontSize="lg" fontWeight="500">
                    PizzaDAO
                  </Text>
                </Center>
                <Spacer />
                <Center>
                  <Button colorScheme="blue">Accept Invite</Button>
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
              Balance
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
    </Fragment>
  );

  return (
    <Fragment>
      <Box minH="66vh">
        <div>{address}</div>
        <Container p={6} mb={10}>
          {CreateWallet}
        </Container>
      </Box>
    </Fragment>
  );
};

export default Wallet;
