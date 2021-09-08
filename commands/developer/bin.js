const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bembed = new Discord.RichEmbed()
    .setColor("#122040")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .setTitle("👇***Online Bins for sharing your code/error: ***👇")
    .addField("1️⃣Sourceb:", `[click here](https://sourceb.in/)`, true)
   .addField("2️⃣hasteb:", `[click here](https://hasteb.in/)`, true)
    .addField("3️⃣hatebin:",`[click here](https://hatebin.com/)`, true)
    .addField("4️⃣ghostbin:",`[click here](https://ghostbin.com)`, true)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);

    return message.channel.send(bembed);
};

module.exports.help = {
    name: "bin",
    aliases: [],
    usage: ``,
    category: "developer",
    description: "Send you the bins to share your codes"
}