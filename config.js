const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : +2349035988258;




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "" SUHAIL_22_28_07_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MixcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICA1MixcbiAgICAgICAgNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDcyLFxuICAgICAgICAxODUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA2NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDcwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTg1LFxuICAgICAgICA4NSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA5LFxuICAgICAgICA0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMjAxLFxuICAgICAgICA0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTQxLFxuICAgICAgICA2MCxcbiAgICAgICAgMTk5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDksXG4gICAgICAgIDM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDk2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAxLFxuICAgICAgICA5NixcbiAgICAgICAgODYsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA2OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQwLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNCxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAzLFxuICAgICAgICA3MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODgsXG4gICAgICAgIDIsXG4gICAgICAgIDk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgODMsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRjWkF0RXd2Y0tvUzVrQ1JsL2s4OFRNYkg4K0tvQXI2dC9kcWlQRVMrOG89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlYxM0U0LUtoU2xXZml3RjRGeUhFVFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzcyODEzZDYtNGIyYi00MzhkLWIwOTUtOWZkYjgyNmFiYjIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTg3LFxuICAgICAgMTk1LFxuICAgICAgOCxcbiAgICAgIDQ3LFxuICAgICAgMzMsXG4gICAgICAyMzIsXG4gICAgICAxMDEsXG4gICAgICAzMCxcbiAgICAgIDgsXG4gICAgICAyMjgsXG4gICAgICA1OSxcbiAgICAgIDQ5LFxuICAgICAgMjU0LFxuICAgICAgODQsXG4gICAgICAyMzgsXG4gICAgICAxNTAsXG4gICAgICAxNzcsXG4gICAgICA3LFxuICAgICAgNzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA5NCxcbiAgICAgIDIxNyxcbiAgICAgIDMxLFxuICAgICAgMTIsXG4gICAgICAyNyxcbiAgICAgIDcsXG4gICAgICA1MixcbiAgICAgIDI0OCxcbiAgICAgIDE2NyxcbiAgICAgIDYsXG4gICAgICAxNTQsXG4gICAgICAyMTgsXG4gICAgICAyNDAsXG4gICAgICAxNTksXG4gICAgICAyMDEsXG4gICAgICAyNyxcbiAgICAgIDI1MCxcbiAgICAgIDE0NCxcbiAgICAgIDczXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw1QVpSSjFYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM1OTg4MjU4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1NzcxOTkyMzI2OTc3Mzo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xpcnRJb0RFSlhTcGJVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieFJZa3FocnJ4dUFyU04yN0tNdXBERlBJK3ZxZmhnbGFTZW5pdk5QREJITT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLTG9MclFwODNFZVZRbHptTnVNYmRMMWtNMWpZNTNXMWp4RFVXNWJUTHVuVjFqblorb0hTV0Jwd2lsR1ROYjIxczl0Ky83cUVhQ0ZYUm1uMU1kdjRCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJmbXJqODJxMWtxOE52b1NlNGkrVm9WQzkrbXc2cDJqcXhFT0xoK3JDUFhlSFRNNTl5Zm1Yc3hhZGp6VTZHTDkxNGkvU0htODI2TTYzK1F6Qm9tUS9DUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM1OTg4MjU4OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMzc4NTIxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "𝕾𝖍𝖆𝖉𝖔𝖜",
  ownername:process.env.OWNER_NAME|| "salam",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
