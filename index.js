//Importing all needed Commands
const Discord = require("discord.js"); //this is the official discord.js wrapper for the Discord Api, which we use!
const { keep_alive } = require("./server");
const colors = require("colors"); //this Package is used, to change the colors of our Console! (optional and doesnt effect performance)
const fs = require("fs"); //this package is for reading files and getting their inputs
//Creating the Discord.js Client for This Bot with some default settings ;) and with partials, so you can fetch OLD messages
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://aviicroft:sH5w2KBJMm8h25B@acjett.67rz0.mongodb.net/data', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}).then(console.log('finally connected to mongo'))
const mySecret = process.env['TOKEN']

const client = new Discord.Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  disableEveryone: true,
  partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});
//Client variables to use everywhere
client.commands = new Discord.Collection(); //an collection (like a digital map(database)) for all your commands
client.aliases = new Discord.Collection(); //an collection for all your command-aliases
client.categories = fs.readdirSync("./commands/"); //categories
client.cooldowns = new Discord.Collection(); //an collection for cooldown commands of each user

//Loading files, with the client variable like Command Handler, Event Handler, ...
["command", "events"].forEach(handler => {
  try{
    require(`./handlers/${handler}`)(client);
  }catch (e){
    console.log(e)
  }
});
["erela_js_handler", "erela_js_node_log"].forEach(handler => {
  try{
    require(`./handlers/lavalink/${handler}`)(client);
  }catch (e){
    console.log(e)
  }
});
//login into the bot
client.login("OTYxMjA3NjY2NjgyNzc3NjQw.Yk1oZg.rGR9WQj3064JrVHJ0rb6zVGyC2w");

const Enmap = require("enmap")
client.settings = new Enmap({name: "settings", dataDir: "./database/settings"})




process.on("unhandledRejection", (reason, promise) => {
  console.log("Unhandled Rejection at: " + promise)
  console.log("Reason: " + reason)
})
process.on("uncaughtException", (err, origin) => {
  console.log("Caught exception: " + err)
  console.log("Origin: " + origin)
})
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(err);
  console.log("Origin: " + origin)
});
process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});
process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(type, promise, reason);
});
