const {
  version,
  RichEmbed
} = require("discord.js");
const {prefix} = require('../../config.json');
const moment = require("moment");
require("moment-duration-format");
const os = require('os');
var versions = '1.2.1';

module.exports.run = async (bot, message, args) => {
  message.delete();

  const duration = moment.duration(bot.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
  const sysDuration = moment.duration(os.uptime()*1000).format("D[d] H[h] m[m] s[s]");
  let sembed = new RichEmbed()
      .setColor("#320B69")
      .setAuthor(`${bot.user.username}#${bot.user.discriminator}`, bot.user.displayAvatarURL)
      .setThumbnail(`${bot.user.displayAvatarURL}`)
      .setDescription(`**${bot.user.username}**STATISTICS`)
      .addField("❯ Library", `• [Discord.js](https://discord.js.org/):v${version}\n • [Node](https://nodejs.org/en/): ${process.version}`, true)
      .addField("❯ General Stats", `• Users: ${bot.users.size.toLocaleString()}\n • Servers: ${bot.guilds.size.toLocaleString()}\n • Channels: ${bot.channels.size.toLocaleString()}`, true)
      .addField(`❯ Info`, `• Version: ${versions}\n • Prefix: ${prefix}`, true)      
      .addField(`❯ UpTime`, `• Process: ${duration}\n • System: ${sysDuration}`, true)
      .addField(`❯ Using `, `• on${os.platform()} ${os.arch()}`, true)
      .addField(`❯ Memory Usage`, `• ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}/ • ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)

      .setTimestamp()
      .setFooter(`${bot.user.username}. Developed by: ©Sweash#2767`, bot.user.displayAvatarURL);

  return message.channel.send(sembed);

}

module.exports.help = {
  name: 'stats',
  description: 'Gives some useful bot statistics',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: []
};