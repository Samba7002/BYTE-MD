
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "TalkDrove@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "923072380380@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/HyHamza/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/logo.jpg";
global.devs = "923072380380";
global.sudo = process.env.SUDO || "923072380380";
global.owner = process.env.OWNER_NUMBER || "923072380380";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUlUZkRMZ0pNTmlORHFsK0p4WWE4MEdieXAwWDJBaXo1RGtiNVYyUjdIcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWDA0VkEvaEhsclpzSDV0M3BvMjAyQVZpNFp2UFhndUJXdUc1Vm9JSGFEVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTW9venl1N2RIbjFsOFFHaUZCby8rWmRWL0t2Q20xa1c4Ymt0cEVDRVhZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGa0NBWXRrSE5PeVc0ZGoraHM5UFpra1hMUEQrTXBwNVVmd2dIVmpsNXlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNIb20zUnovalRtcEtXem5lYmtyVzNTQWwrYUdTbUZyZm5Qc3YxdGpOVWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjYwTVZsK2h5ZEhqc09mZGV4WmJaN2NXbGhONXlsOWhYSWdzclJPTCt0UVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0c2VzFPaE9aN3crc3FjUzRha3BUaG1nMXlaaEIyL1FBRXVRTkhrVjUxZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVJNVExuUVNSZFlLbm4vTXJBMWlvTzFiRVhUM1JTSW1tQ2RJSWxnTW1FTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZFU21ib1FHcTYrcXJxUzkvVFJmM2MyYUFtK3FTQ0t4aDBMbS8rSy95WjF4RCszVHRXYkM5WUlMNHRoc1ovZ2VESWx5TGhTMzg3R1pUblJCWXkwaUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcyLCJhZHZTZWNyZXRLZXkiOiJIdHc2K3ZLeEtnN1ZmbGN1YTlIbEFFU3JpQ21Pb2VPZ3o1RHZZUVR6WmhFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ5VWxWSGNrZVRkbUFfRk5ZOTZENmx3IiwicGhvbmVJZCI6IjI4MTNiNTA3LWI3ZDctNDgyYS1iMjBhLTE5ZjY3NmMxYmZkMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXUEcvUGIxU0IrUk4wa0ROR2xnaC9IV0NNbzA9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9UNE9VdnRYZStMQ3AvbWl2c2kwQXBKWmllUT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096OTlKY0JFTnE4aWJVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjNzdGFQZVBwQXl1K3J0S1JmOHl2RFVRQWNsZTFTOHVlNlAzQ25sMHhTVVE9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBNZzhnSit3TTdXei9LM1BFWWpVUkMySEJucndJd1pRaVV0WFo3RWI1TjlzS0tTRFVCNmN5UlhtaVBGY3JYRDNXRTI0TU1ZMUN6ME8wOUZwMU1NMUNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJUdzYxZFpGWmRySWo0UGYyNWxCSm92R2Y3MFI1cENUbHdteDBVYTJ3VFF2QklGTU1mVFVXblMwdEZCczMzT1B6OXhjeVMwS0N5TWtPQnl5Z3Q5bFBEdz09In0sIm1lIjp7ImlkIjoiMjIxNzg1ODM5MTA2OjQxQHMud2hhdHNhcHAubmV0In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc4NTgzOTEwNjo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkN0xXajNqNlFNcnZxN1NrWC9NcncxRUFISlh0VXZMbnVqOXdwNWRNVWxFIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTE3MDMxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQURsaCJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*Powered By TalkDrove*",
  author: process.env.PACK_AUTHER || "TalkDrove",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "BYTE-MD",
  ownername: process.env.OWNER_NAME || "TalkDrove",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
