import React, { Fragment } from 'react';

import { useDisconnect } from '@thirdweb-dev/react';

// chakra ui
import { Button } from '@chakra-ui/react';

const DisconnectButton = () => {
  const disconnect = useDisconnect();

  return (
    <Fragment>
      <Button colorScheme="red" size="xs" onClick={disconnect}>
        Disconnect
      </Button>
    </Fragment>
  );
};

export default DisconnectButton;
