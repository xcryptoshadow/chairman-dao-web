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
  useColorModeValue,
  useControllableProp,
  useControllableState,
  Text,
  Stack,
  Button,
} from '@chakra-ui/react';

import Profile from './profile';

const SUBMIT_ID = 'sendInvites'; //TODO -- MIGRATE THESE CONSTANTS INTO GLOBAL CONSTANTS.JS FILE

//TODO - Define Submit Function HERE...
function submitAction(myContext) {
  if (myContext.usersToInvite.length == 0) {
    alert('Choose at least 1 user to invite first...');
    return;
  } else {
    var alertStr =
      'inviting ' + JSON.stringify(myContext.usersToInvite) + ' to DAO...';
    alert(alertStr);
  }
}

function Card(props) {
  const { variant, ...rest } = props;

  const styles = useStyleConfig('Card', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest} />;
}

//TODO - find a cleaner way to do this with Chakra
function updateSubmitButton(myContext) {
  var htmlStr = 'Choose users to invite';
  var usersSelected = false;
  if (myContext.usersToInvite.length == 1) {
    htmlStr = `Invite (${myContext.usersToInvite.length}) new user to DAO.`;
    usersSelected = true;
  } else if (myContext.usersToInvite.length > 1) {
    htmlStr = `Invite (${myContext.usersToInvite.length}) new users to DAO.`;
    usersSelected = true;
  }

  document.getElementById(SUBMIT_ID).innerHTML = htmlStr;

  if (usersSelected) {
    document.getElementById(SUBMIT_ID).disabled = false;
    document.getElementById(SUBMIT_ID).isLoading = true;
    document.getElementById(SUBMIT_ID).onclick = function () {
      submitAction(myContext);
    };
  } else {
    document.getElementById(SUBMIT_ID).disabled = true;
    document.getElementById(SUBMIT_ID).isLoading = false;
  }
}

//TODO - find a cleaner way to do this with Chakra themes, this is gross but works...
function updateCardUX(props, doUnselectAction) {
  //update inner card text
  var updateStr = '🚀 Inviting to DAO... 🚀';

  if (doUnselectAction) {
    updateStr = 'Click to invite';
  }
  document.getElementById(props.dialogID).innerHTML = updateStr;

  //update name text color
  var colorStr = '#E53E3E'; //red 500

  if (doUnselectAction) {
    colorStr = '#424242'; //black
  }
  document.getElementById(props.textID).style.color = colorStr;

  //update border color
  var colorStr = '#ECC94B'; //yellow 400
  if (doUnselectAction) {
    colorStr = '#1a202c'; //gray 800
  }
  document.getElementById(props.cardID).style.borderColor = colorStr;
}

function clicked(props, myContext) {
  var toSearch = myContext.usersToInvite;
  var selected = false;

  for (var i = 0; i < toSearch.length; i++) {
    if (toSearch[i].userID == props.userID) {
      selected = true;
      //user is already selected - unselect user
      toSearch.splice(i, 1);
      myContext.usersToInvite = toSearch;
      break;
    }
  }
  if (!selected) {
    myContext.usersToInvite.push(props);
  }

  updateSubmitButton(myContext);
  updateCardUX(props, selected);
}

function Usercard(props) {
  const myContext = useContext(AppContext);

  return (
    <LinkBox w={{ base: '326px', md: '356px' }}>
      <Box id={props.cardID}>
        <Profile
          DAOName={props.DAOName}
          DAODescription={props.DAODescription}
          inviterAvatarURL={props.inviterAvatarURL}
          DAOLogoURL={props.DAOLogoURL}
          title={props.title}
          color={props.color}
          titleColor={props.titleColor}
          priceText={props.priceText}
          cardID={props.cardID}
          circleID={props.circleID}
          dialogID={props.dialogID}
          textID={props.textID}
          quote={props.quote}
          inviterName={props.inviterName}
          inviterRole={props.inviterRole}
        />
      </Box>
    </LinkBox>
  );
}

export default Usercard;
