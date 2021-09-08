const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    let jsembed = new Discord.RichEmbed()
    .setColor("#122040")
    .setThumbnail('https://discord.js.org/static/logo-square.png')
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .setTitle("👇***Guides for D.JS***👇")
    .addField("1️⃣The official guide:", `[click here](https://discordjs.guide/)`, true)
   .addField("2️⃣An idiot's guide:", `[click here](https://anidiots.guide/)`, true)
   .addField('**Basic JS and NodeJS**', "🔻some usefull guides🔻")
    .addField("1️⃣You Don't Know JS (Free Ebook Series)",`[click here](https://github.com/getify/You-Dont-Know-JS)`, true)
    .addField("2️⃣CodeCademy online course: ", `[click here](https://www.codecademy.com/learn/javascript)`,true)
    .addField("3️⃣Node School", `[click here](https://nodeschool.io/)`, true)
    .addField("**Promises/async**",'🔻some usefull links🔻')
    .addField("1️⃣- Evie's written guide:",`[click here](https://evie.gitbook.io/js/promises)`)
    .addField("2️⃣- MDN (promise)",`[click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promises)`)
    .addField("3️⃣- Discord.js (async/await):",`[click here](https://discordjs.guide/additional-info/async-await.html)`)
    .setTimestamp()
    .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL);

    return message.channel.send(jsembed);
};

module.exports.help = {
    name: 'djs',
    description: 'Send list of resources which help in learning about discord.js and node.',
    usage: 'list',
    category: 'developer',
    accessableby: 'everyone',
    aliases: []
  };

