const Discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES") || !message.guild.owner) return message.channel.send("You don't have permission to use this commands.")
    if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("I don't have permission to add roles!")

    let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!mutee) return message.channel.send("Please supply a user to be muted!");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "No reason given"

    let muterole = message.guild.roles.find(r => r.name === "muted")
    if(!muterole) {
        try{
            muterole = await message.guild.createRole({
                name:"muted",
                color:"#000000",
                permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
                })
            })
        } catch(e) {
            console.log(e.stack);
        }
    }

mutee.addRole(muterole.id).then(() => {
   message.delete()
   mutee.send(`Hello, you have been in ${message.guild.name} for: ${reason}`)
   message.channel.send(`${mutee.user.username} was successfully muted.`)
})

let embed = new Discord.RichEmbed()
.setColor("#DFCFBE")
.setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
.addField("Moderation:", "mute")
.addField("Mutee:", mutee.user.username)
.addField("Moderator:", message.author.username)
.addField("Reason:", reason)
.addField("Date", message.createdAt.toLocaleString())
.setTimestamp()
    .setFooter(bot.user.username.toUpperCase(), message.author.displayAvatarURL);

let sChannel = message.guild.channels.find(c => c.name === "logs")
sChannel.send(embed)
};

module.exports.help = {
    name: 'mute',
    description: 'mute the member',
    usage: '<user> <reason>',
    category: 'Moderation',
    accessableby: 'moderator',
    aliases: ['slient']
  };
