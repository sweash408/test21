const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');
const ms = require('ms');


module.exports.run = async (bot, message, args) => {

    if(message.author.id != owners) return message.channel.send("You're not the bot owner!")
    if (!bot.lockit) bot.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that🤨!");
    if (!time) return message.reply('You must set a duration for the lockdown in either⌚hours, minutes or seconds');
  
    if (validUnlocks.includes(time)) {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: null
      }).then(() => {
        message.channel.send('Lockdown lifted.');
        clearTimeout(bot.lockit[message.channel.id]);
        delete bot.lockit[message.channel.id];
      }).catch(error => {
        console.log(error);
      });
    } else {
      message.channel.overwritePermissions(message.guild.id, {
        SEND_MESSAGES: false
      }).then(() => {
        message.channel.send(`WoW, **${message.author.username}** just locked🔐 the channel down for ${ms(ms(time), { long:true })}`).then(() => {
  
          bot.lockit[message.channel.id] = setTimeout(() => {
            message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: null
            }).then(message.channel.send('Lockdown lifted.🔓 Yay, enjoy talking while you still can🤪')).catch(console.error);
            delete bot.lockit[message.channel.id];
          }, ms(time));
  
        }).catch(error => {
          console.log(error);
        });
      });
    }
  };


module.exports.help = {
    name: 'timelock',
    description: '',
    usage: 'W',
    category: 'Owner',
    accessableby: 'Owners',
    aliases: ["tl"]
  };