const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
};

module.exports.help = {
    name: 'say',
    description: 'Return the same message you have written',
    usage: '<message>',
    category: 'General',
    accessableby: 'everyone',
    aliases: []
  };
