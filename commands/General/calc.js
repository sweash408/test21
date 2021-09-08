const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');
const math = require("mathjs");

module.exports.run = async (bot, message, args, tools) => {

    message.react("⏳");
     
    if(!args[0]) return message.channel.send("Please input a calculation to calculate.")

    let resp;
    try {
        resp = math.evaluate(args.join(" "));
    }catch(e) {
        return message.channel.send("Sorry, please input avalid calculation. Eg: 98*54-60")
    }

    const embed = new Discord.RichEmbed()
    .setColor("#3f031b")
    .setTitle("Result")
    .addField("Input", `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField("Output", `\`\`\`js\n${resp}\`\`\``)
    .setTimestamp()
    .setFooter(`Requested By: ${message.author.username}`, message.author.displayAvatarURL);

    message.channel.send(embed);
};

module.exports.help = {
    name: 'calc',
    description: 'Calculate the given value',
    usage: '<number> <input> <number>',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["math", "calculate"]
  };