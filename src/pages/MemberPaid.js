import React, { Fragment } from 'react';

// chakra ui
import { Box, Text, Button, Flex, Image, Container } from '@chakra-ui/react';

const MemberPaid = () => {
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
                <Text fontSize="2xl" style={{ fontWeight: '700' }}>
                  You just got PAID!
                </Text>
              </Box>

              <Box>
                <Box boxSize="90%">
                  <Image
                    src="https://wallpapercave.com/wp/wp233762.jpg"
                    alt="Hot Commie"
                    borderRadius="20px"
                  />
                </Box>
              </Box>

              <Box mb={4}>
                <Text fontSize="lg" style={{ fontWeight: '600' }}>
                  Cool Commies DAO
                </Text>
              </Box>

              <Box mb={4}>
                <Flex
                  direction="row"
                  align="center"
                  justify="center"
                  color="#A8151A"
                >
                  <Text fontSize="5xl" fontWeight="700">
                    300
                  </Text>
                  <Text fontSize="xl" fontWeight="500" ml={3}>
                    CHR
                  </Text>
                </Flex>
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

export default MemberPaid;
