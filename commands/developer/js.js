const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    let jsembed = new Discord.RichEmbed()
    .setColor("#662D0D")
    .setThumbnail('https://cdn.mos.cms.futurecdn.net/dSLsz4Aqa4zWZdn5hSFRBS-320-80.jpg')
    .setTitle("👇Useful Links To Learn Js And Node👇")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
    .addField("1️⃣CodeCademy Online Course", `[click here](https://www.codecademy.com/learn/javascript/)`, true)
   .addField("2️⃣Eloquent Javascript Free Ebook", `[click here](http://eloquentjavascript.net/)`, true)
    .addField("3️⃣You Don't Know JS (Free Ebook Series)",`[click here](https://github.com/getify/You-Dont-Know-JS)`, true)
    .addField("4️⃣MDN JavaScript Guide", `[click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)`,true)
    .addField("5️⃣Node School", `[click here](https://nodeschool.io/)`, true)
    .addField("6️⃣Node Codeschool",`[click here](https://www.codeschool.com/courses/real-time-web-with-node-js)`)
    .addField("7️⃣JavaScript Reference Docs",`[click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)`)
    .setTimestamp()
    .setFooter(`${message.author.username}`, message.author.displayAvatarURL);

    return message.channel.send(jsembed);
};

module.exports.help = {
    name: 'js',
    description: 'Send list of resources which help in learning about js/node.',
    usage: 'bjs command',
    category: 'developer',
    accessableby: 'Members',
    aliases: ['bjs', 'javascript']
  };
