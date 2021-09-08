const Discord = require("discord.js");
const { prefix } = require('../../config.json');
const moment = require('moment');

var made = 'Sweash#2767'

module.exports.run = async (bot, message, args) => {
  message.delete(10000);
  const emoji = bot.emojis.find(val => val.name === args.join(' '));

      const embed = new Discord.RichEmbed()
      .setColor("#014083")
      .setThumbnail(emoji.url)
      .addField(`__❯ Info on ${emoji.name}__`, `**⨠ID**: ${emoji.id}\n **⨠Created At**: ${moment.utc(emoji.createdAt).format('MM/DD/YYYY h:mm A')}\n **⨠Animated**: ${emoji.animated ? 'Yes' : 'No'}\n **⨠Identifier**:\`${emoji.identifier}>\`\n **⨠Url**: ${emoji.url}`)
      .addField("Identify", `\`${emoji.identifier}\``)    
.setTimestamp()
      .setFooter(`© Made By: ${made} | Info on ${emoji.name}`)
      message.channel.send(embed);
    };

module.exports.help = {
  name: 'emojiinfo',
  description: 'Print Out the info on emoji',
  usage: '',
  accessableby: 'everyone',
  category: 'General',
  aliases: []
};