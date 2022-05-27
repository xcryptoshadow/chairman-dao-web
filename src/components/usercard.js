// @src/components/Usercard.js

import React, { Fragment, useState } from 'react';

import { useContext } from 'react';
import AppContext from './appContext';

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

const SUBMIT_ID = 'sendInvites'; //TODO -- MIGRATE THESE CONSTANTS INTO GLOBAL CONSTANTS.JS FILE

function Card(props) {
    const { variant, ...rest } = props
  
    const styles = useStyleConfig('Card', { variant })
  
    // Pass the computed styles into the `__css` prop
    return <Box __css={styles} {...rest} />
  }

function updateSubmitButton(myContext){
    var htmlStr = 'Choose users to invite';
    var usersSelected = false;
    if(myContext.usersToInvite.length == 1){
        htmlStr = `Invite (${myContext.usersToInvite.length}) new user to DAO.`;
        usersSelected = true;
    }
    else if(myContext.usersToInvite.length > 1){
        htmlStr = `Invite (${myContext.usersToInvite.length}) new users to DAO.`;
        usersSelected = true;
    }

    document.getElementById(SUBMIT_ID).innerHTML = htmlStr;

    if(usersSelected){
        document.getElementById(SUBMIT_ID).disabled = false;
    }
    else{
        document.getElementById(SUBMIT_ID).disabled = true;
    }
}

function updateCardUX(props, myContext){

}

function clicked(props, myContext){
    var alertStr = "User not selected, adding - " + props.username;

    var toSearch = myContext.usersToInvite;
    var selected = false;

    
    for(var i = 0; i < toSearch.length; i++){
        if(toSearch[i].userID == props.userID){
            selected = true;
            //user is already selected - unselect user
            alertStr = "User already selected, removing user - " + props.username;

            toSearch.splice(i,1);
            myContext.usersToInvite = toSearch;
            break;
        }
    }
    if(!selected){
        myContext.usersToInvite.push(props);
    }
    
    console.log(myContext.usersToInvite);
    updateSubmitButton(myContext);

    alert(alertStr);
}  

function Usercard(props){
    const myContext = useContext(AppContext);

    return(

        <LinkBox
            w={{ base: "326px", md: "356px" }}
        >
              <Card
                borderWidth="8px"
                borderRadius="20px"
                boxShadow="dark-lg"
                borderColor="black"
                w={{ base: "326px", md: "356px" }}
                align="center"
                justify="center"
                _hover={{ borderColor: 'red.500' }}
                id={props.cardID}
                >
                <LinkOverlay onClick={() => clicked(props, myContext) }>
                <Profile
                    username={props.username}
                    avatarURL={props.avatarURL}
                    backgroundURL={props.backgroundURL}
                    cardID={props.cardID}
                    dialogID={props.dialogID}
                    />
                </LinkOverlay>  
              </Card>
            </LinkBox>

    );
}



export default Usercard;  