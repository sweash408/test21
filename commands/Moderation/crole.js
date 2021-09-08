const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES","ADMINISTRATOR")) return message.reply("No you can't do it !");
    let mention = (message.mentions.users.first());
    messageSplit = message.content.split(" ", 3);
    roleName = messageSplit[1];
    roleColor = messageSplit[2].toUpperCase();
    addRolePerson = message.member;
    if (mention != null) { addRolePerson = message.guild.member(mention); }
    message.guild.createRole({
        name: roleName,
        color: roleColor,
        mentionable: true,
    }).then(role => addRolePerson.addRole(role));
    message.channel.send("The Role " + roleName + " has been added in your server").then(d_msg => d_msg.delete(10000));
    message.delete(10000);

};

module.exports.help = {
  name: 'crole',
  description: 'Create the role using the command',
  usage: '<rolename> <color>',
  category: 'Moderation',
  accessableby: '',
  aliases: []
};