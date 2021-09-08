const discord = require("discord.js");
const {prefix} = require('../../config.json');

module.exports.run = async (bot, message, args) => {
    if (message.author.id != "436740713867247626") return message.channel.send("You're the bot owner and don't use this command!")
    if(!args[0]) return;
    if(args[0] === 'game') return message.reply('Please tell me a game to play!');
    if(args[0] === 'default') {
      args = `${prefix}help || I want to play!`
      message.reply(`I am now watching \`${args}\`.`);
     bot.user.setPresence({ game: { name: args, type: 1 } });
    }else{
     args = args.join(" ");
     message.reply(`I am now playing \`${args}\`.`);
     bot.user.setPresence({ game: { name: args, type: 0 } });
    }

};

module.exports.help = {
  name: 'setgame',
  description: 'Warning donot use this command!Sets the bot\'s playing status.',
  usage: '<playing status>',
  category: 'Owner',
  accessableby: 'owner',
  aliases: ['sgame']
};