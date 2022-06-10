import React, { Fragment } from 'react';

// components
import ConnectMetamaskButton from './ConnectMetamaskButton';

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

const WalletSignIn = () => {
  return (
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
            <ConnectMetamaskButton />
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default WalletSignIn;
