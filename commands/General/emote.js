const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {
var fake = `Check the command and try again`
    message.delete();

    if (args.join(' ') == "") return message.channel.send(fake)
    const search = bot.emojis.find(val => val.name === args.join(' '));
    message.channel.send(`${search}`);
  };
module.exports.help = {
  name: 'emote',
  description: `Let you use the animated emoji without nitro\n Example: ${prefix}emo yay| Shoud return the custom emoji in the server named yay.`,
  usage: '<emoji name or id>',
  accessableby: 'everyone',
  category: 'General',
  aliases: ['emo' ]
};