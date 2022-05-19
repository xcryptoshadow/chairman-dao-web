import React, { Fragment } from 'react';

// chakra ui
import { Box, Text, Button, Image, Container } from '@chakra-ui/react';

const MemberInvited = () => {
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
                  You’ve been invited!
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

              <Box>
                <Button borderRadius="full" bg="black" color="white" w="100%">
                  Claim invite with Fortmatic
                </Button>
              </Box>
            </Container>
          </Box>
        </Container>
      </Box>
    </Fragment>
  );
};

export default MemberInvited;
