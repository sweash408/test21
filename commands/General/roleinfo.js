const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");
const moment = require('moment');
const { token, prefix, owners } = require('../../config.json');


module.exports.run = async (bot, message, args) => {
    let role = message.guild.roles.find(r => r.name === args.join(" "))
  if (!role) return message.reply(`sorry! I couldn't find that role please try again.\n Example: ${prefix}rinfo owner`)

     const emb = new RichEmbed()
          .setColor(`${role.hexColor}`)
          .setThumbnail(`https://dummyimage.com/250/${role.hexColor.slice(1)}/&text=%20`)
        .addField(`❯ Role Information📇 on **${role.name}**`, `⪧ ID: ${role.id}\n ⪧ Members: ${role.members.size}\n ⪧ Mentionable: ${role.mentionable ? 'Yes' : 'No'}`, true)
        .addField(`❯ Info`, `⪧ Position: ${role.position}\n ⪧ Colour: ${role.hexColor} | ${role.color}\n ⪧ Hoisted: ${role.hoist ? 'Yes' : 'No'}\n ⪧ Created On: ${moment.utc(role.createdAt).format("dddd, MMMM Do YYYY")}`, true)
    .setTimestamp()
    .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL )
        message.channel.send(emb)
    }
    module.exports.help = {
  name: 'roleinfo',
  description: `Print Out the Details of the role.`,
  usage: '<name of the role>',
  accessableby: 'everyone',
  category: 'General',
  aliases: ['rinfo' ]
};