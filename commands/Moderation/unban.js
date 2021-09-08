const Discord = require("discord.js");
const config = require('../../config.json');


module.exports.run = async (bot, message, args) => {
    
    if(!message.member.hasPermission(["BAN_MEMBERS", "MANAGE_ROLES"])) return message.channel.send("You don't have permissions to ban a member")

    let bannedMember = await bot.fetchUser(args[0])
    if (!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given!"

    if(!message.guild.me.hasPermission(["BAN_MEMBERS", "MANAGE_ROLES"])) return message.channel.send("I don't have permissions to unban people")
     message.delete()
     try {
      message.guild.unban(bannedMember, {reason: reason})
      message.channel.send(`${bannedMember.tag} has been unbanned from the server!`)
     } catch(e) {
      console.log(e.message)
     }

    let embed = new Discord.RichEmbed()
.setColor("#07044b")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "unban")
.addField("Moderator on:", `${bannedMember.username} (${bannedMember.id})`)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date:", message.createdAt.toLocaleString())

let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)

};

module.exports.help = {
    name: 'unban',
    description: 'unban a user from server',
    usage: ' <user> <reson>',
    category: 'Moderation',
    accessableby: 'moderator',
    aliases: ["ub", "unbanish"]
  };