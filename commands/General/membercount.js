const Discord = require('discord.js');
const { prefix } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .setColor('RANDOM')
        .setThumbnail(message.guild.iconURL)
        .addField('Members', `**${message.guild.memberCount}**`, true)
        .addBlankField(true)
        .addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
        .addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
        .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
        .setFooter(`Owner: ${message.guild.owner.user.tag}`)
    message.channel.send(embed);
};
module.exports.help = {
  name: 'membercount',
  description: 'Print the all  the member of the server and member status',
  usage: '',
  accessableby: 'everyone',
  category: 'General',
  aliases: ['mcount']
};
