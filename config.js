const fs = require('fs-extra')
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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_08_10_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDMyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDczLFxuICAgICAgICA5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNixcbiAgICAgICAgMTAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgzLFxuICAgICAgICA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDc5LFxuICAgICAgICA0OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MixcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzksXG4gICAgICAgIDAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI4LFxuICAgICAgICAwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA4NixcbiAgICAgICAgMTIsXG4gICAgICAgIDExMCxcbiAgICAgICAgODUsXG4gICAgICAgIDI5LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2MCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTQzLFxuICAgICAgICA1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDg5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjM1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNixcbiAgICAgICAgODcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTYxLFxuICAgICAgICA1MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDExLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNUWV2eHk5NlZiYmYrY3ExL1N5aENzSjY4anBGM2dXRmpad1hGSWdQR1ZvPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaSFRMdEdjSlFYYXVTSWFsRGNNaFF3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjAwMDQzNGNlLTU2ZDEtNDdjNC1iYTlkLWU0ZTMxMTdiMzZiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODUsXG4gICAgICAyMzYsXG4gICAgICAxODYsXG4gICAgICA1OCxcbiAgICAgIDIxMyxcbiAgICAgIDcsXG4gICAgICAyMjksXG4gICAgICAxMDMsXG4gICAgICAyNTMsXG4gICAgICAxNixcbiAgICAgIDEzMCxcbiAgICAgIDIyNCxcbiAgICAgIDEzMixcbiAgICAgIDIyOSxcbiAgICAgIDEwLFxuICAgICAgMTk0LFxuICAgICAgMjA1LFxuICAgICAgMTg3LFxuICAgICAgMzUsXG4gICAgICA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYsXG4gICAgICAxNzAsXG4gICAgICAxMzksXG4gICAgICAyMDUsXG4gICAgICA5LFxuICAgICAgMTcxLFxuICAgICAgNjAsXG4gICAgICAxMDIsXG4gICAgICA0OCxcbiAgICAgIDI1MixcbiAgICAgIDE3MyxcbiAgICAgIDIzOCxcbiAgICAgIDE0OSxcbiAgICAgIDI4LFxuICAgICAgMTAwLFxuICAgICAgNjEsXG4gICAgICAyMzgsXG4gICAgICA1MSxcbiAgICAgIDE3NCxcbiAgICAgIDUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkJYRE02V0tZXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3MTc4Njk1NzQ6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJMaWxuZW1cIixcbiAgICBcImxpZFwiOiBcIjE1NzM0MjMwMTc0MTEwODo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOeVZrdG9ERUppU3E3Z0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkM0T2pSR3NWWnNGQk0vTEt5RzBXdnY2aW15aDZlWlNPdEJGMkF6Z1VraWs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidm5RamdwaGh4M2xZK0tYL0dWcE8vWUNMNmFmQlZHZEVUeVpYakQ3ZmkyTGVLU3gzYTVJV0l0dnllUDNlbHV3TjcvR0I1Z3AzQ0x5cVZYRm9YWUFiQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMkdxSU5OSXBGeVp6YlpQWlZHNHluZVZKOWhIQ2x3c0pzdlNKRHUyU0drTlgyaENlNm9MYmR2RStIbndmbTI0RXlScDluYWFHamFTSTFrcGx3RWI4aUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzE3ODY5NTc0OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg3NjAwOTIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPSDdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9INy5qc29uIjogIntcImtleURhdGFcIjpcIjJHVVNKVjRIYWJDNzlvQnZHSTNYUWVCY3pjR3RUdUt4WFRBYVJhRi9WRkE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTk0MzQ3NzM4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "lilnem-XMD",
  ownername:process.env.OWNER_NAME|| "lilnem-XX",


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
