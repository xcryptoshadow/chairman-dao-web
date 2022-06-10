import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';

// chakra ui
import { Button } from '@chakra-ui/react';

const ConnectMetamaskButton = () => {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  return (
    <div>
      {address ? (
        <h4>Connected as {address}</h4>
      ) : (
        <Button onClick={connectWithMetamask}>Connect Metamask Wallet</Button>
      )}
    </div>
  );
};

export default ConnectMetamaskButton;
