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

module.exports = {
    createInviteRecord, 
    fetchInviteRecord
}