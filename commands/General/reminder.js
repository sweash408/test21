const {RichEmbed} = require("discord.js");
const ms = require('ms');

module.exports.run = async (bot, message, args) => {
  message.delete(5000)
  try {
    if (!ms(args[0])) return message.reply('You have to input a valid time⌚!');
    if (!args[1]) return message.reply('😓You have to input the text to remind you for!');
    
    setTimeout(async () => {
      let embed = new RichEmbed({
        title: 'Reminder',
        description: args.slice(1).join(' ')
      })
      .setTimestamp()
      .setColor("#1D23FE")
      .setFooter(`Requested By ${message.author.username}`,`${bot.user.displayAvatarURL}`)
      
      message.author.send(embed);
    }, ms(args[0]));
    
    message.channel.send('Reminder set✔ Make sure your **DM** isn\'t lock🔐 & I will remind you in your DMS✔!!\nReminding you in⏳ ' + ms(ms(args[0]), {long: true}) + ``);
  } catch (err) {
    message.channel.send('There was an error!\n' + err).catch();
  }
};


module.exports.help = {
  name: 'reminder',
  description: 'Remind you in the Dm. Set the reminder and you will not forget anything',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: []
};