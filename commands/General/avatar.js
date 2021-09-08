const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

     message.delete(2000);
    
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0])) || message.author;
    if (!user) return message.channel.send("Couldn't find user.");

    const member = message.guild.member(user);
    let aembed = new Discord.RichEmbed()
    
        .setColor("#7c2a0d")
        .setAuthor(`${member.user.username}`, member.user.displayAvatarURL )
        .setImage(member.user.avatarURL)
        .setURL(user.URL)
        .setTimestamp()
        .setFooter(`© Sweash#2767`, bot.user.displayAvatarURL);
        

    return message.channel.send(aembed)
};
  module.exports.help = {
    name: 'avatar',
    description: 'Shows you the avatar of user',
    usage: '<@user| id of the user>',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["uicon"]
  };
  