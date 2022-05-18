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
} from '@chakra-ui/react';

const MemberPaid = () => {
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
                You just got PAID!
              </Text>

              <Flex
                direction={'row'}
                align={'center'}
                justify={'center'}
                mt={4}
              >
                <Image
                  src="https://wallpapercave.com/wp/wp233762.jpg"
                  alt="Dan Abramov"
                  style={{ borderRadius: 20 }}
                  w={'70%'}
                />
              </Flex>

              <Text mt={2} style={{ fontWeight: '600', fontSize: 19 }}>
                Cool Commies DAO
              </Text>

              <Flex
                mt={2}
                align={'center'}
                justify={'center'}
                style={{ color: '#A8151A' }}
              >
                <Text style={{ fontWeight: '700', fontSize: 45 }}>300</Text>
                <Text
                  style={{ fontWeight: '500', fontSize: 20, marginLeft: 10 }}
                >
                  CHR
                </Text>
              </Flex>

              <Box mt={4}>
                <Button
                  borderRadius="full"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  View Wallet
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default MemberPaid;
