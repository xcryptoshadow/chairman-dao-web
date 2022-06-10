import React, { Fragment } from 'react';
import { useCoinbaseWallet } from '@thirdweb-dev/react';

// chakra ui
import { Button } from '@chakra-ui/react';

const ConnectWalletConnect = () => {
  const connectWithWalletConnect = useCoinbaseWallet();

  return (
    <Fragment>
      <Button colorScheme="blue" size="lg" onClick={connectWithWalletConnect}>
        Connect WalletConnect
      </Button>
    </Fragment>
  );
};

export default ConnectWalletConnect;
