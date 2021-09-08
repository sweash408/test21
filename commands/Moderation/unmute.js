const Discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have permission to use this commands.")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to be unmuted!");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    let muterole = message.guild.roles.find(r => r.name === "muted")
    if(!muterole) return message.channel.send("There is no mute role to remove!")

    mutee.removeRole(muterole.id).then(() => {
        message.delete()
        mutee.send(`Hello, you have been unmuted in ${message.guild.name} for: ${reason}`).catch(err => console.log(err))
        message.channel.send(`${mutee.user.username} was unmuted!`)

    })
let embed = new Discord.RichEmbed()
.setColor("##55B4B0")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "unmute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date", message.createdAt.toLocaleString())
.setTimestamp()
    .setFooter(bot.user.username, message.author.displayAvatarURL);

    let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)
};

module.exports.help = {
    name: 'unmute',
    description: 'unmute user/member in server',
    usage: ' <user> <reason>',
    category: 'Moderation',
    accessableby: 'admin',
    aliases: ['um']
  };