const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    message.react("🆔");
 let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author;
  if (!user) return message.channel.send(`Couldn't find user Please try again Or Type ${prefix}help userinfo.`);

    const member = message.guild.member(user);
    let memberembed = new Discord.RichEmbed()
    
        .setColor("#7c2a0d")
        .setAuthor(`${member.user.username}#${member.user.discriminator}`, member.user.displayAvatarURL )
        .setThumbnail(member.user.avatarURL)
        .addField(`General:`, `⪼⭐Server Name⭐: ${message.guild.name}\n ⪼ Nickname: ${ message.guild.member(user).nickname ? message.guild.member(user).nickname : "none"}\n ⪼ User ID: ${user.id}\n ⪼ 🎮Playing: ${user.presence.game === null ? "No Game" : user.presence.game.name}`, true)
        .addField(`Info:`, `⪼ Total Members: ${message.guild.memberCount}\n⪼ ℹ️ Status: ${member.user.presence.status}\n⪼ 🗓️Created at: ${member.user.createdAt.toLocaleString()}\n⪼ Roles: ${message.guild.member(user).roles.map(s => s).join(" • ")}`, true)
        .setTimestamp()
        .setFooter("© Sweash", bot.user.displayAvatarURL);
        
return message.channel.send(memberembed)
};

module.exports.help = {
    name: 'userinfo',
    description: 'Gives you the info on user/member',
    usage: ' <mention|| provide id of user/member>',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["uinfo","user"]
  };
