const {bot} = require('../index');
const { prefix } = require('../config.json');
    const Discord = require('discord.js');
    
bot.on('guildCreate', (guild) => {


    let channel = bot.channels.get(guild.channels.filter(c => c.permissionsFor(bot.user).has("SEND_MESSAGES") && c.type === "text").map(r => r.id)[0]) 

    channel.send(`Thanks you for the inviting me in your server! Really appreciate it!\n\n To view a list of my commands please do the following \`${prefix}help or @pheonix\`!  `)
    console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`)
});