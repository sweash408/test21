const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

message.delete(20000);
   const presences = message.guild.presences.map(st => st.status)
    var onlineMembers = 0;
    for (let i in presences) {
        if (presences[i] !== 'offline') {
            onlineMembers++
        }
    }

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
        .setColor("#081058")
        .setThumbnail(sicon)
        .setAuthor(`${message.guild.name}`, message.guild.iconURL)
        .addField('⪀ General Info:', ` • ID: ${message.guild.id}\n • Region: ${message.guild.region}\n • Server Name:${message.guild.name}\n • Name Acronym: ${message.guild.nameAcronym}`, true)
        .addField('⪀ Level And Owner:', `• MFA Level: ${message.guild.mfaLevel}\n • Verification Level: ${message.guild.verificationLevel}\n • Owner ID: ${message.guild.ownerID}\n • Owner: ${message.guild.owner}`, true)
        .addField('⪀ Stats:', `• Total Members: ${message.guild.memberCount}(Online: ${onlineMembers})\n • Role Count: ${message.guild.roles.size}\n • Emojis: ${message.guild.emojis.size}`, true)
        .addField(`⪀ Time:`, `• Created On: ${message.guild.createdAt.toLocaleString()}\n • Joined At: ${message.member.joinedAt.toLocaleString()}`, true)
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL);

    return message.channel.send(serverembed);
};


module.exports.help = {
    name: 'serverinfo',
    description: 'Gives you the info on server',
    usage: '',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["si"]
  };
