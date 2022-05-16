import React, { Fragment } from 'react';

// chakra ui
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Button,
} from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

const Home = () => {
  return (
    <Fragment>
      <Box
        bg="#A8151A"
        textAlign="center"
        className="Content"
        minHeight={'66vh'}
        p={4}
        style={{ color: 'white' }}
      >
        <Box style={{ marginBottom: 30 }}>
          <Text style={{ fontWeight: '700', fontSize: 29 }}>
            WELCOME COMRADE!
          </Text>
          <Text style={{ fontWeight: '500', fontSize: 18 }}>
            Look like you’re new here
          </Text>
        </Box>

        <Box>
          <Box style={{ marginBottom: 60 }}>
            <Button
              size="lg"
              width="300px"
              style={{ color: '#A8151A', backgroundColor: 'white' }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>DISCORD</Text>
            </Button>
          </Box>

          <Box style={{ marginBottom: 20 }}>
            <Button
              colorScheme="#A8151A"
              variant="outline"
              size="lg"
              width="300px"
              style={{ borderWidth: 4 }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>DASHBOARD</Text>
            </Button>
          </Box>

          <Box style={{ marginBottom: 20 }}>
            <Button
              colorScheme="#A8151A"
              variant="outline"
              size="lg"
              width="300px"
              style={{ borderWidth: 4 }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>INVITE MEMBER</Text>
            </Button>
          </Box>

          <Box style={{ marginBottom: 20 }}>
            <Button
              colorScheme="#A8151A"
              variant="outline"
              size="lg"
              width="300px"
              style={{ borderWidth: 4 }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>PAY MEMBER</Text>
            </Button>
          </Box>

          <Box style={{ marginBottom: 20 }}>
            <Button
              colorScheme="#A8151A"
              variant="outline"
              size="lg"
              width="300px"
              style={{ borderWidth: 4 }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>RAISE MONEY</Text>
            </Button>
          </Box>

          <Box style={{ marginBottom: 20 }}>
            <Button
              colorScheme="#A8151A"
              variant="outline"
              size="lg"
              width="300px"
              style={{ borderWidth: 4 }}
              rightIcon={
                <ChevronRightIcon w={8} h={8} style={{ marginLeft: 10 }} />
              }
            >
              <Text style={{ fontWeight: '700' }}>SETTINGS</Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Home;
