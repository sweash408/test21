const config = require("../config.json");
const {bot} = require('../index');
    const Discord = require('discord.js');
bot.on("disconnect", async () => {
    console.log("Disconnected: " + event.reason + " (" + event.code + ")");
  });