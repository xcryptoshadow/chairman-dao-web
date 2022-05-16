import React, { Fragment } from 'react';
import '../App.css';

// chakra ui
import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Fragment>
      <Box
        bg="#A8151A"
        className="Content"
        p={4}
        h="27vh"
        style={{ color: 'white' }}
      >
        <Box textAlign="center">
          <Text className="Logo" style={{ fontSize: 19, paddingTop: 4 }}>
            CHAIRMAN DAO
          </Text>
        </Box>

        <Box textAlign="right">
          <Box style={{ marginBottom: 20, fontSize: 12 }}>
            <Text style={{ fontWeight: '600', fontSize: 17, marginBottom: 5 }}>
              Social
            </Text>
            <Text style={{ fontWeight: '400' }}>Discord</Text>
            <Text style={{ fontWeight: '400' }}>Twitter</Text>
            <Text style={{ fontWeight: '400' }}>Telegram</Text>
          </Box>

          <Box style={{ marginBottom: 20, fontSize: 12 }}>
            <Text style={{ fontWeight: '600', fontSize: 17, marginBottom: 5 }}>
              About
            </Text>
            <Text style={{ fontWeight: '400' }}>Terms of Service</Text>
            <Text style={{ fontWeight: '400' }}>Privacy Policy</Text>
          </Box>
        </Box>

        <Box textAlign="center">
          <Text style={{ fontWeight: '300', fontSize: 10 }}>
            © 2022 Chairman DAO, Inc.
          </Text>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Footer;
