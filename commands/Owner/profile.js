const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if(message.author.id != "436740713867247626") return message.channel.send("You're not the bot owner!")
    if(!message.author.url) return message.channel.send("Please provide a pic for me to change ")
   image = message.attachments.first().url;
   bot.user.setAvatar (image)

};

module.exports.help = {
  name: 'profile',
  description: 'Change the profile of the bot',
  usage: '',
  category: 'Owner',
  accessableby: 'owner',
  aliases: []
};