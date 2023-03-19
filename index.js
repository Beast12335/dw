const lib = require('lib')({token: process.env['ltoken']});
//const Discord = require("discord.js");
//const client = new Discord.Client();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
  ],
});
const config = require("./config.json");

client.on("ready", ()=>console.log("READY"));
//load the transcript module
const transcript = require("./transcript")
transcript(client, "!transcript", 500)  
//transcript(client, "CMD", "MAXIMUM msgs") //minimum = 100 

client.login(process.env['TOKEN']);
//Coded by Tomato#6966
