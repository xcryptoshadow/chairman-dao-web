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
  Checkbox,
} from '@chakra-ui/react';

const InvestMoney = () => {
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
              <Text style={{ fontWeight: '500', fontSize: 23 }}>
                You’ve been invited to invest in the <br />
                <span style={{ fontWeight: '700' }}>Cool Commie DAO</span>
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

              <Box mt={4}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={7}>
                  <GridItem
                    colSpan={2}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text
                      style={{
                        color: '#9D9D9D',
                        fontWeight: '600',
                        fontSize: 20,
                      }}
                    >
                      You will invest:
                    </Text>
                  </GridItem>
                  <GridItem colSpan={3} style={{ textAlign: 'right' }}>
                    <Text
                      style={{
                        color: '#A8151A',
                        fontWeight: '700',
                        fontSize: 25,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                      }}
                    >
                      $ 25,000.00
                    </Text>
                  </GridItem>
                </Grid>

                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={2}>
                  <GridItem
                    colSpan={2}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text
                      style={{
                        color: '#9D9D9D',
                        fontWeight: '600',
                        fontSize: 20,
                      }}
                    >
                      You will receive:
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={3}
                    style={{
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'right',
                    }}
                  >
                    <Text
                      style={{
                        color: '#A8151A',
                        fontWeight: '700',
                        fontSize: 25,
                      }}
                    >
                      CHD 100.00
                    </Text>
                  </GridItem>
                </Grid>
              </Box>

              <Box mt={2}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={7}>
                  <GridItem
                    colSpan={4}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text
                      style={{
                        color: '#9D9D9D',
                        fontWeight: '600',
                        fontSize: 20,
                      }}
                    >
                      I am an accredited investor:
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1} style={{ textAlign: 'right' }}>
                    <Text
                      style={{
                        color: '#A8151A',
                        fontWeight: '700',
                        fontSize: 25,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'right',
                      }}
                    >
                      <Checkbox size="lg" defaultChecked></Checkbox>
                    </Text>
                  </GridItem>
                </Grid>

                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={2}>
                  <GridItem
                    colSpan={4}
                    style={{
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text
                      style={{
                        color: '#9D9D9D',
                        fontWeight: '600',
                        fontSize: 20,
                      }}
                    >
                      Captcha:
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={1}
                    style={{
                      textAlign: 'right',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'right',
                    }}
                  >
                    <Text
                      style={{
                        color: '#A8151A',
                        fontWeight: '700',
                        fontSize: 25,
                      }}
                    >
                      <Checkbox size="lg" defaultChecked></Checkbox>
                    </Text>
                  </GridItem>
                </Grid>
              </Box>

              <Box mt={8}>
                <Button
                  borderRadius="full"
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    width: '100%',
                  }}
                >
                  Proceed with investment
                </Button>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Fragment>
  );
};

export default InvestMoney;
