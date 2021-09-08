const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args, data) => {
   const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
   message.channel.send(emojiList);
    };

module.exports.help = {
    name: 'a',
    description: '',
    usage: '',
    category: 'Test',
    accessableby: 'Members',
    aliases: []
  };