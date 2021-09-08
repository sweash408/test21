const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args) => {

    message.channel.send("Pinging ...").then((m) => {
        let ping = m.createdTimestamp - message.createdTimestamp
        let choices = ["Is my ping okay", "I hope it isn't bad", "Here is my ping", "Is it okay? I can't look"]
        let response = choices[Math.floor(Math.random() * choices.length)]

        m.edit(` :satellite_orbital:  ${response}: **\`${message.author.username}\`**\n*Bot latency*: \`\`${ping}\`\`\n*API Lantency*:\`\`${Math.round(bot.ping)}\`\``)
    })

};

module.exports.help = {
    name: 'ping',
    description: 'Displays bot response time.',
    usage: 'api||response|| latency commands',
    category: 'General',
    accessableby: 'Members',
    aliases: ['api', 'latency', 'response']
  };