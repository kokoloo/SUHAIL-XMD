67const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263717869574";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_12_28_12_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDc1LFxuICAgICAgICAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM1LFxuICAgICAgICA0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMSxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDksXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDkyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NyxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTI0LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTc4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDI5LFxuICAgICAgICAyLFxuICAgICAgICAzOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NixcbiAgICAgICAgMTU3LFxuICAgICAgICAxODksXG4gICAgICAgIDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxODMsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM1LFxuICAgICAgICA2NCxcbiAgICAgICAgOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyLFxuICAgICAgICA4NixcbiAgICAgICAgNzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgwLFxuICAgICAgICA1OSxcbiAgICAgICAgOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyLFxuICAgICAgICA5MixcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDU4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDg5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjMzLFxuICAgICAgICA2MixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTM0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMDIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiT3hQb0NFWFB1MTFwV01Yc05RdUtTelFweFN2YUJER0NaMWltQmwyYjQ0WT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2lMS2c0VjBUYjJwQTFqaVlRZGd0QVwiLFxuICBcInBob25lSWRcIjogXCJmYjEyODY0OC01Yzg1LTQwYmQtYjMwNi1lYWM0ZTY1M2MwMGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNSxcbiAgICAgIDgxLFxuICAgICAgNTIsXG4gICAgICAxNDcsXG4gICAgICAxNDksXG4gICAgICAxNTksXG4gICAgICAyMjIsXG4gICAgICAxMzEsXG4gICAgICAzNixcbiAgICAgIDIzMSxcbiAgICAgIDIwOSxcbiAgICAgIDUxLFxuICAgICAgMjIyLFxuICAgICAgMTAyLFxuICAgICAgMTk0LFxuICAgICAgMTk2LFxuICAgICAgMTEyLFxuICAgICAgNzYsXG4gICAgICAxMjUsXG4gICAgICAxOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAzLFxuICAgICAgNTUsXG4gICAgICAxODEsXG4gICAgICAxMjMsXG4gICAgICAxMzEsXG4gICAgICA0OSxcbiAgICAgIDIsXG4gICAgICAyMDgsXG4gICAgICAxNzYsXG4gICAgICAyMTMsXG4gICAgICAyMzEsXG4gICAgICA2LFxuICAgICAgMjMyLFxuICAgICAgNTQsXG4gICAgICAxMjcsXG4gICAgICAzOCxcbiAgICAgIDIyOCxcbiAgICAgIDE4NCxcbiAgICAgIDEzOSxcbiAgICAgIDEwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJDSllENE5ZNVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzE3ODY5NTc0Ojc3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTGlsbmVtXCIsXG4gICAgXCJsaWRcIjogXCIxNTczNDIzMDE3NDExMDg6NzdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NWa3RvREVQeiswTG9HR0E0Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJDNE9qUkdzVlpzRkJNL0xLeUcwV3Z2NmlteWg2ZVpTT3RCRjJBemdVa2lrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkFHTkNRYWV5QlRhNUt1OE9kOTVZUU93dHk3TjBFd3d0VTlXakdaSkZCTmx5REQ4SDV6ei84ZnMwRGFjS1JxcTVjVGtkQXc1RHd3OFdwUTBMb2ttbkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJBdEE2aU9WemZpakdJZmpMMi8yWk9ZOXdsT2o5NEtGZ1B1Z29WaHJNWXd6YWpBRzMwWlBXUm9ZRmZweFg0NXc0MHhqRHNJS05Ib0xKTSszYmFnUGpBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2MzcxNzg2OTU3NDo3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMzNTc0NTI5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT0lxXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPSXEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhZlhQK3ZMcTBuZHgvQ2wyYVNBeEJ3Z2JCZEJlVFJiWEw5Nkd6czNqdzNJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5NDM0Nzc0OCxcImN1cnJlbnRJbmRleFwiOjEzLFwiZGV2aWNlSW5kZXhlc1wiOlswLDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM1NzQzMTEwNTRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "MEEW",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "M€EW-XMD",
  ownername:process.env.OWNER_NAME|| "M€§W-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
