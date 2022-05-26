// @src/components/Usercard.js

import React, { Fragment } from 'react';

// chakra ui
import {
  Box,
  useStyleConfig,
  LinkBox,
  LinkOverlay
  
} from '@chakra-ui/react';


import Profile from './profile';

function Card(props) {
    const { variant, ...rest } = props
  
    const styles = useStyleConfig('Card', { variant })
  
    // Pass the computed styles into the `__css` prop
    return <Box __css={styles} {...rest} />
  }


function Usercard(props){
    return(

        <LinkBox
            w={{ base: "326px", md: "356px" }}
        >
              <Card
                borderWidth="8px"
                borderRadius="20px"
                borderColor="black"
                w={{ base: "326px", md: "356px" }}
                align="center"
                justify="center"
                _hover={{ borderColor: 'red.500' }}
                >
                <LinkOverlay href='javascript:alert("clicked!")'>
                <Profile/>
                </LinkOverlay>  
              </Card>
            </LinkBox>

    );
}



export default Usercard;  