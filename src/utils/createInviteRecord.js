/* import moralis */
const Moralis = require("moralis/node");
const ConfigFactory = require('./moralis');

const INVITEBASEURI = 'http://localhost:3000/invite/';

/* Create new user and insert record into the DB */
const createInviteRecord = async (guildID,
        inviterName, inviterAvatarURL, inviterDiscordID, messageTxt, roleTxt) => {

    //TODO - assert that arguments exist
    const creds = ConfigFactory.getServerCredentials(ConfigFactory.MASTER_DB_ID);
    var serverUrl = creds.moralisServerURL;
    var appId = creds.moralisAppID;
    var masterKey = creds.moralisMasterKey;

    await Moralis.start({ serverUrl, appId, masterKey });

    const InviteRecord = Moralis.Object.extend("InviteRecord");
    const newInvite = new InviteRecord();

    newInvite.set("guildID", guildID);
    newInvite.set("inviterName", inviterName);
    newInvite.set("inviterAvatarURL", inviterAvatarURL);
    newInvite.set("inviterDiscordID", inviterDiscordID);
    newInvite.set("messageTxt", messageTxt);
    newInvite.set("roleTxt", roleTxt);

    newInvite.save().then(
        (newInvite) => {
            var inviteID = newInvite.id;
            console.log(
                `Created new invite record with id ${newInvite.id}`);

            var inviteLink = `${INVITEBASEURI}${inviteID}`;
            
            return inviteLink;
        },
        (error) => {
            console.err(`Failed to save invite ${error.message}`);
            return error;
        }

    );
};

const fetchInviteRecord = async(inviteID) => {
    
    //TODO - assert that arguments exist
    const creds = ConfigFactory.getServerCredentials(ConfigFactory.MASTER_DB_ID);
    var serverUrl = creds.moralisServerURL;
    var appId = creds.moralisAppID;
    var masterKey = creds.moralisMasterKey;

    await Moralis.start({ serverUrl, appId, masterKey });

    const InviteRecord = Moralis.Object.extend("InviteRecord");
    const query = new Moralis.Query(InviteRecord);
    query.get(inviteID).then(
        (inviteObj) => {
            return inviteObj;
        },
        (error) => {
            console.err(
                `Record retrieval failed with error ${error.message}`);
        }
    
    );
}

const getDAORoles = async(discordID) => {
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
            DAOLogoURL: 'https://c.tenor.com/qOI3iBvktYcAAAAd/giga-chad.gif'
        },
        {
            guildID: 98454,
            DAOName: 'Poke DAO',
            memberAccess: 'Member',
            canInvite: true,
            DAODescription: `Raising money to buy all ultra rare Pokemon Cards in the world`,
            DAOLogoURL: 'https://c.tenor.com/KKdd0koqb0YAAAAd/pikachu-pokemon.gif'
        }
    ];

    //return result
    return testData;
}

module.exports = {
    createInviteRecord, 
    fetchInviteRecord,
    getDAORoles
}