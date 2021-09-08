const Discord = require('discord.js');
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {
  try {
    let hex = Math.random().toString(16).slice(2, 8).toUpperCase().slice(-6);
    
    let embed = new Discord.RichEmbed()
    .setColor(hex)
    .setDescription('Random HEX Code: #' + hex)
    .setTitle('#' + hex);
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('Their was an error!\n' + err).catch();
  }
};

module.exports.help = {
  name: 'rcolor',
  description: 'Returns a random HEX color and code!',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: ["color","clr"]
};
