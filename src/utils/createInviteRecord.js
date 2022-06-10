/* import moralis */
const Moralis = require('moralis/node');
const ConfigFactory = require('./moralis');

const INVITEBASEURI = 'http://localhost:3000/claim_invite';

/* Create new user and insert record into the DB */
const createInviteRecord = async (
  guildID,
  DAOName,
  inviterName,
  inviterAvatarURL,
  inviterDiscordID,
  messageTxt,
  roleTxt,
  DAOLogoURL
) => {
  //TODO - assert that arguments exist
  const creds = ConfigFactory.getServerCredentials(ConfigFactory.MASTER_DB_ID);
  var serverUrl = creds.moralisServerURL;
  var appId = creds.moralisAppID;
  var masterKey = creds.moralisMasterKey;

  await Moralis.start({ serverUrl, appId, masterKey });

  const InviteRecord = Moralis.Object.extend('InviteRecording');
  const newInvite = new InviteRecord();
  console.log(`Guild ID is ${guildID}`);
  newInvite.set('guildID', guildID);
  newInvite.set('DAOName', DAOName);
  newInvite.set('inviterName', inviterName);
  newInvite.set('inviterAvatarURL', inviterAvatarURL);
  newInvite.set('inviterDiscordID', inviterDiscordID);
  newInvite.set('messageTxt', messageTxt);
  newInvite.set('roleTxt', roleTxt);
  newInvite.set('DAOLogoURL', DAOLogoURL);

  console.log(`Object Guild ID is ${newInvite.get('guildID')}`);

  var inviteObj = await newInvite.save();
  console.log(`Created new invite record with id ${inviteObj.id}`);
  var inviteLink = `${INVITEBASEURI}?inviteID=${inviteObj.id}`;

  return inviteLink;
};

const fetchInviteRecord = async inviteID => {
  //TODO - assert that arguments exist
  const creds = ConfigFactory.getServerCredentials(ConfigFactory.MASTER_DB_ID);
  var serverUrl = creds.moralisServerURL;
  var appId = creds.moralisAppID;
  var masterKey = creds.moralisMasterKey;

  await Moralis.start({ serverUrl, appId, masterKey });

  const InviteRecord = Moralis.Object.extend('InviteRecording');
  const query = new Moralis.Query(InviteRecord);
  var inviteObj = await query.get(inviteID);

  var inviteData = {
    guildID: inviteObj.get('guildID'),
    DAOName: inviteObj.get('DAOName'),
    inviterName: inviteObj.get('inviterName'),
    inviterAvatarURL: inviteObj.get('inviterAvatarURL'),
    inviterDiscordID: inviteObj.get('inviterDiscordID'),
    inviterMessage: inviteObj.get('messageTxt'),
    inviterRole: inviteObj.get('roleTxt'),
    DAOLogoURL: inviteObj.get('DAOLogoURL'),
  };

  return inviteData;

  /*
    query.get(inviteID).then(
        (inviteObj) => {
            console.log("got result - returning object");
            console.log(JSON.stringify(inviteObj));
            return inviteObj;
        },
        (error) => {
            console.err(
                `Record retrieval failed with error ${error.message}`);
        }

    );*/
};

const getDAORoles = async discordID => {
  const creds = ConfigFactory.getServerCredentials(ConfigFactory.MASTER_DB_ID);
  var serverUrl = creds.moralisServerURL;
  var appId = creds.moralisAppID;
  var masterKey = creds.moralisMasterKey;

  await Moralis.start({ serverUrl, appId, masterKey });

  //query DB for all DAOs user is a member of

  var testData = [
    {
      guildID: 213902,
      DAOName: 'Chad DAO',
      memberAccess: 'Member',
      canInvite: true,
      DAODescription: `The place for all the world's Chads.  Join now`,
      DAOLogoURL: 'https://c.tenor.com/qOI3iBvktYcAAAAd/giga-chad.gif',
    },
    {
      guildID: 98454,
      DAOName: 'Poke DAO',
      memberAccess: 'Member',
      canInvite: true,
      DAODescription: `Raising money to buy all ultra rare Pokemon Cards in the world`,
      DAOLogoURL: 'https://c.tenor.com/KKdd0koqb0YAAAAd/pikachu-pokemon.gif',
    },
  ];

  //return result
  return testData;
};

module.exports = {
  createInviteRecord,
  fetchInviteRecord,
  getDAORoles,
};
