const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');
var owner = "Sweash#2767"

module.exports.run = async (bot, message, args) => {

    message.delete(1000);

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#e41414")
        .setThumbnail(bicon)
        .setTitle("🤖**Bot Information**🤖")
        .addField('Information', `⪀ Bot Name: ***${bot.user.username}***\n⪀ 📝Made By: **${owner}**\n⪀ Prefix: ${prefix}\n⪀ Created On: ${bot.user.createdAt.toLocaleString()}`, true)
        .addField('Status', `⪀ Status🛑: ${bot.user.presence.status}\n⪀ 👪 Total Users: ${bot.users.size}\n⪀ 💬 Total Servers: ${bot.guilds.size}\n⪀ Total Commands: ${bot.commands.size}`, true)
        .setAuthor(`${message.guild.name}`, bicon)
        .addField("To invite me:", `[click here](https://discordapp.com/api/oauth2/authorize?client_id=602098745315950613&permissions=8&scope=bot)`)
        .setTimestamp()
        .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL);

    return message.channel.send(botembed);
};
module.exports.help = {
    name: 'botinfo',
    description: 'Gives you the info on bot',
    usage: '',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["binfo"]
  };