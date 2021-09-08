const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_CHANNELS","ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You don't have permission to use this commands.")
    try {
        if (!args[1]) return message.reply('You need to input the channel type!');
        if (!args[0]) return message.reply('You need to input the channel name!');
        
        message.channel.send('I\'ve created the channel!').then(() => {
          message.guild.createChannel(args[1], args[0], []).catch((err) => {
            message.channel.send('There was an error!')
          });
        });
      } catch (err) {
        message.channel.send('There was an error!\n' + err).catch();
      }

};

module.exports.help = {
  name: 'cchannel',
  description: 'create the channel with just command',
  usage: '<voice, text> <name>',
  category: 'Moderation',
  accessableby: '',
  aliases: []
};