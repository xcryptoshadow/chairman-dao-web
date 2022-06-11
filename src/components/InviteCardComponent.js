import React, { Fragment, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAddress, useEditionDrop } from '@thirdweb-dev/react';

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
  Spinner,
} from '@chakra-ui/react';

const InviteCardComponent = props => {
  let navigate = useNavigate();
  const address = useAddress();
  const [loading, setLoading] = useState(false);
  const [invited, setInvited] = useState(false);

  const editionDropAddress = props.inviteData.editionDropAddress;
  const guildID = props.inviteData.guildID;
  const daoName = props.inviteData.daoName;

  const editionDrop = useEditionDrop(editionDropAddress);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      setLoading(true);
      const balance = await editionDrop.balanceOf(address, 0);

      if (balance.gt(0)) {
        setInvited(true);
      } else {
        setInvited(false);
      }

      console.log('BALANCE: ', balance);
      setLoading(false);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  const handleInvite = async () => {
    setLoading(true);

    await editionDrop.claim('0', 1);
    setInvited(true);

    setLoading(false);

    return navigate('/wallet');
  };
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
          {loading ? (
            <Fragment>
              <Center>
                <Spinner size="xl" />
              </Center>
            </Fragment>
          ) : (
            <Fragment>
              <Box mb={8}>
                <Text fontSize="2xl" fontWeight="700">
                  Invite
                </Text>
              </Box>
              <Box>
                <Container maxW="md">
                  <Flex mb={4}>
                    <Center>
                      <Text fontSize="lg" fontWeight="500">
                        {daoName}
                      </Text>
                    </Center>
                    <Spacer />
                    <Center>
                      {invited ? (
                        <Fragment>
                          <Button disabled={true}>Invited</Button>
                        </Fragment>
                      ) : (
                        <Fragment>
                          <Button
                            colorScheme="blue"
                            onClick={() => {
                              handleInvite();
                            }}
                          >
                            Accept Invite
                          </Button>
                        </Fragment>
                      )}
                    </Center>
                  </Flex>
                </Container>
              </Box>
            </Fragment>
          )}
        </Container>
      </Box>
    </Fragment>
  );
};

export default InviteCardComponent;
