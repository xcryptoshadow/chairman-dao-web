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
  Container,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <Fragment>
      <Box minH="66vh" bg="#A8151A" color="white">
        <Container p={6} pt={20} pb={40}>
          <Box align="center" justify="center" mb={8}>
            <Text style={{ fontWeight: '700', fontSize: 29 }}>
              WELCOME COMRADE!
            </Text>
            <Text style={{ fontWeight: '500', fontSize: 18 }}>
              Look like you’re new here
            </Text>
          </Box>

          <Box align="center" justify="center" mb={8}>
            <Box style={{ marginBottom: 60 }}>
              <Button
                size="lg"
                width="300px"
                color="#A8151A"
                bg="white"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">DISCORD</Text>
              </Button>
            </Box>

            <Box style={{ marginBottom: 20 }}>
              <Button
                colorScheme="#A8151A"
                variant="outline"
                size="lg"
                width="300px"
                borderWidth="4px"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">DASHBOARD</Text>
              </Button>
            </Box>
            <Box style={{ marginBottom: 20 }}>
              <Button
                colorScheme="#A8151A"
                variant="outline"
                size="lg"
                width="300px"
                borderWidth="4px"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">INVITE MEMBER</Text>
              </Button>
            </Box>
            <Box style={{ marginBottom: 20 }}>
              <Button
                colorScheme="#A8151A"
                variant="outline"
                size="lg"
                width="300px"
                borderWidth="4px"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">PAY MEMBER</Text>
              </Button>
            </Box>
            <Box style={{ marginBottom: 20 }}>
              <Button
                colorScheme="#A8151A"
                variant="outline"
                size="lg"
                width="300px"
                borderWidth="4px"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">RAISE MONEY</Text>
              </Button>
            </Box>
            <Box style={{ marginBottom: 20 }}>
              <Button
                colorScheme="#A8151A"
                variant="outline"
                size="lg"
                width="300px"
                borderWidth="4px"
                borderRadius="50px"
                rightIcon={<ChevronRightIcon w={8} h={8} ml={6} />}
              >
                <Text fontWeight="700">SETTINGS</Text>
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default Home;
