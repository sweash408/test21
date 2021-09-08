const Discord = require("discord.js");
const sources = ['akairo', 'akairo-master', 'commando'];
const fetch = require('node-superfetch');

module.exports.run = async (bot, message, args) => {
    let query = args.join(' ');
    if(!query) return message.channel.send('Please specify something to search');
    if(query.includes('--')) query = query.split('--')[0];
    let type = args.join(' ').split('--')[1] || 'stable';
    if(!sources.includes(type)) type = `https://raw.githubusercontent.com/discordjs/discord.js/docs/${type}.json`;
    fetch.get(`https://djsdocs.sorta.moe/v2/embed?src=${type}&q=${query}`)
        .then((res) => {
            if(!res.body) return message.channel.send('Could not fetch any search results');
            return message.channel.send({ embed: res.body });
        }).catch(() => message.channel.send('Could not fetch any search results. Invalid source'));
};
module.exports.help  = {
  name: 'docs',
  aliases: ['djs'],
  description: 'Searches the Discord.js docs for your search term.',
  category: "developer",
  accessableby: 'everyone',
  usage: `discordjsdocs <search query> --[optional source, eg: commando, master, stable, 11.4.2 (defaults to stable)]`
};