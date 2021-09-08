const Discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) return message.reply("Sorry blockhead, you can't do that.");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("Couldn't find that user, try again Idiot");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");
 
    if(!rMember.roles.has(gRole.id)) return message.reply("Idiot, They don't have that role.");
    await(rMember.removeRole(gRole.id));
 
    try{
       await rMember.send(`RIP, you have been demoted `)
    }catch(e){
      message.channel.send(`RIP to <@${rMember.id}>, have been removed from ${grole} `)};
 };

 module.exports.help = {
   name: 'removerole',
   description: 'take the role from the user ',
   usage: ' <user> <role>',
   category: 'Moderation',
   accessableby: 'moderator',
   aliases: ['rerole']
 };
