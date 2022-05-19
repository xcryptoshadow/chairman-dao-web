import React, { Fragment } from 'react';

// chakra ui
import {
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';

const InvestMoney = () => {
  return (
    <Fragment>
      <Box minH="66vh">
        <Container p={6} mb={10}>
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
                <Text fontSize="2xl" fontWeight="500">
                  You’ve been invited to invest in the
                </Text>
                <Text fontSize="2xl" fontWeight="700">
                  Cool Commie DAO
                </Text>
              </Box>

              <Box mb={4}>
                <Box boxSize="90%">
                  <Image
                    src="https://wallpapercave.com/wp/wp233762.jpg"
                    alt="Hot Commie"
                    borderRadius="20px"
                  />
                </Box>
              </Box>

              <Box mb={8}>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={7}>
                  <GridItem
                    colSpan={2}
                    textAlign="left"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text color="#9D9D9D" fontWeight="600" fontSize="xl">
                      You will invest:
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={3}
                    textAlign="right"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'right',
                    }}
                  >
                    <Text color="#A8151A" fontWeight="700" fontSize="2xl">
                      $ 25,000.00
                    </Text>
                  </GridItem>
                </Grid>
                <Grid templateColumns="repeat(5, 1fr)" gap={6} mt={7}>
                  <GridItem
                    colSpan={2}
                    textAlign="left"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'left',
                    }}
                  >
                    <Text color="#9D9D9D" fontWeight="600" fontSize="xl">
                      You will receive:
                    </Text>
                  </GridItem>
                  <GridItem
                    colSpan={3}
                    textAlign="right"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'right',
                    }}
                  >
                    <Text color="#A8151A" fontWeight="700" fontSize="2xl">
                      CHD 100.00
                    </Text>
                  </GridItem>
                </Grid>
              </Box>

              <Box>
                <Button borderRadius="full" bg="black" color="white" w="100%">
                  View Wallet
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default InvestMoney;
