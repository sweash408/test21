const Discord = require('discord.js');
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {
  try {
    let output = '';
    Object.keys(require('../../package').dependencies).forEach((pack) => output += pack + '\n');
    
    let embed = new Discord.RichEmbed()
    .setColor('#363942')
    .setThumbnail(bot.user.avatarURL)
    .setDescription(output)
    
    message.channel.send(embed);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {
  name: 'dependencylist',
  description: 'Print the list of all dependencylist.',
  usage: 'pl|dl command',
  category: 'developer',
  accessableby: 'Members',
  aliases: ['pl','dl']
};
