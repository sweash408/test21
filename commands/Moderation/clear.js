const Discord = require("discord.js");
const { config } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("oof! you don't have permission.");
    if(!args[0]) return message.channel.send("oof! sorry");
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Clearing ${args[0]} messages.`). then(msg => msg.delete(5000));
    });
};

module.exports.help = {
    name: 'clear',
    description: 'Clear the given number of messages',
    usage: '<no of message>',
    category: 'Moderation',
    accessableby: 'moderators',
    aliases: ['purge','delete']
  };
