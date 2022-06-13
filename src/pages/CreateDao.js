import React, { Fragment, useState } from 'react';
import axios from 'axios';

import { useCoinbaseWallet, useAddress } from '@thirdweb-dev/react';

const CreateDAO = () => {
  const address = useAddress();
  const connectWithCoinbaseWallet = useCoinbaseWallet();
  const [email, setEmail] = useState();

  return (
    <div>
      <div>{address}</div>
      {/* <input value={email} onChange={e => setEmail(e.target.value)} /> */}
      <button onClick={connectWithCoinbaseWallet}>Login</button>
    </div>
  );
};

export default CreateDAO;
