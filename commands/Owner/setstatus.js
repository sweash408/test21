const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "436740713867247626") return message.channel.send("You're the bot owner and don't use this command!")
    if(!args[0]) return message.reply('Tell me a status to change it i need your help.');
    if(args[0] === 'status') return message.reply('Come on . The statuses are Online, Idle, DND, and Offline.');
    args.join(" ");
    message.reply(`I am now \`${args}\`.`);
    bot.user.setPresence({ status: `${args}` });

};

module.exports.help = {
  name: 'setstatus',
  description: '',
  usage: '',
  category: 'Owner',
  accessableby: 'owner',
  aliases: ['status']
};