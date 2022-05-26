// @src/components/Usercard.js

import React, { Fragment } from 'react';

// chakra ui
import {
  Box,
  useStyleConfig,
  LinkBox,
  LinkOverlay,
  useControllableProp, 
  useControllableState
  
} from '@chakra-ui/react';

import Profile from './profile';

function Card(props) {
    const { variant, ...rest } = props
  
    const styles = useStyleConfig('Card', { variant })
  
    // Pass the computed styles into the `__css` prop
    return <Box __css={styles} {...rest} />
  }

function clicked(name){
    alert("Clicked on " + name);
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
                <LinkOverlay onClick={() => clicked(props.username) }>
                <Profile
                    username={props.username}
                    avatarURL={props.avatarURL}
                    backgroundURL={props.backgroundURL}
                    />
                </LinkOverlay>  
              </Card>
            </LinkBox>

    );
}



export default Usercard;  