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

const MemberInvited = () => {
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
                You’ve been invited!
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

              <Box mt={4}>
                <Button
                  borderRadius="full"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  Claim invite with Fortmatic
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default MemberInvited;
