const Discord = require('discord.js');
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {
  try {
    message.channel.send(new Discord.Attachment('https://cdn.discordapp.com/emojis/597688361628729364.png'));
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {
  name: 'rip',
  description: 'return a rip png',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: ["dead"]
};