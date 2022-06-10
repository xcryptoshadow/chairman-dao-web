import React, { Fragment, useState } from 'react';

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

import { useMagic } from '@thirdweb-dev/react';

const ConnectMagicButton = () => {
  const connectWithMagic = useMagic();
  const [email, setEmail] = useState();

  return (
    <Fragment>
      <Flex maxW="md">
        <Input
          size="lg"
          placeholder="Email Address"
          borderRadius="10px 0px 0px 10px"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button
          colorScheme="blue"
          size="lg"
          borderRadius="0px 10px 10px 0px"
          onClick={() => connectWithMagic({ email })}
        >
          Create Wallet
        </Button>
      </Flex>
    </Fragment>
  );
};

export default ConnectMagicButton;
