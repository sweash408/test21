const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    try {
        let emoji = message.attachments.array()[0] || args[0];
        
        if (emoji) {
          if (emoji.url) {
            if (args[0]) {
              message.guild.createEmoji(emoji.url, args[0])
              .then(emoji => message.channel.send('I\'ve created the ' + emoji.name + ' emoji!'))
              .catch(err => message.reply('I couldn\'t create the emoji!\n' + err));
            } else message.reply('You need to put the name for the emoji in!');
          } else {
            if (args[1]) {
              message.guild.createEmoji(emoji, args[1])
              .then(emoji => message.channel.send('I\'ve created the ' + emoji.name + ' emoji!'))
              .catch(err => message.reply('I couldn\'t create the emoji!\n' + err));
            } else message.reply('You need to put the name for the emoji in!');
          }
          
        } else message.reply('You need to give the image for the emoji!');
      } catch (err) {
        message.channel.send('There was an error!\n' + err).catch();
      }
};

module.exports.help = {
  name: 'cemoji',
  description: 'Create the emoji for server',
  usage: '<url, [attachment]> <name>',
  category: 'Moderation',
  accessableby: '',
  aliases: []
};