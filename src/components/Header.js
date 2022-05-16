import React, { Fragment } from 'react';
import '../App.css';

// chakra ui
import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Fragment>
      <Box bg="#A8151A" w="100%" h="7vh" p={4} color="white" textAlign="center">
        <Text className="Logo" style={{ fontSize: 25, paddingTop: 4 }}>
          CHAIRMAN DAO
        </Text>
      </Box>
    </Fragment>
  );
};

export default Header;
