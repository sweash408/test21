const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

 message.delete(2000);

var em = new Discord.RichEmbed()

.setColor('RANDOM')
      .setAuthor('__⪀ Total Bot Commands__ ', message.author.iconURL)
      .addField(`Commands`, `⨠ ${bot.user.tag} has ` + bot.commands.size + ' commands for now.')
      .setThumbnail(message.author.displayAvatarURL);
  try {
    message.channel.send(em);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};

module.exports.help = {
  name: 'commands',
  description: 'Shows the total amount of commands',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: ["cmds"]
};


