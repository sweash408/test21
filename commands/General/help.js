  const { RichEmbed } = require('discord.js');
  const { stripIndents } = require('common-tags');
  const { readdirSync } = require('fs');
  const { token, prefix, owners } = require('../../config.json');
  module.exports.run = async (bot, message, args) => {
    const embed = new RichEmbed()
      .setColor('#570000')
      .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
      .setThumbnail(bot.user.displayAvatarURL);
  
    if (!args[0]) {
      const categories = readdirSync('./commands/');
  
      embed.setDescription(`<a:hy:616455451776647168> These are the avaliable commands for the ${bot.user.tag}\nThe bot prefix is: **${prefix}**\nFor more info use ${prefix}[command name]`);
      embed.setFooter(`${bot.user.username} | Total Commands: ${bot.commands.size}`, bot.user.displayAvatarURL);
  
      categories.forEach(category => {
        const dir = bot.commands.filter(c => c.help.category === category);
        const capitalise = category.slice(0,1).toUpperCase() + category.slice(1);
        try {
          embed.addField(`⪢ ${capitalise}:`, dir.map(c => `\`${c.help.name}\``).join(' ⇔ '));
        } catch(e) {
          console.log(e);
        }
      });
  
      return message.channel.send(embed);
    } else {
      let command = bot.commands.get(bot.aliases.get(args[0].toLowerCase()) || args[0].toLowerCase());
      if(!command) return message.channel.send(embed.setTitle('Invalid Command.').setDescription(`Do \`${prefix}help\` for a list of the commands.`));
      command = command.help;
      embed.setDescription(stripIndents`The bot prefix is: \`${prefix}\`\n
      ⪼  Command: ${command.name.slice(0, 1).toUpperCase() + command.name.slice(1)}
      ⪼  Description: ${command.description || 'No Description'}
      ⪼  Usage: ${command.usage ? `\`${prefix}${command.name} ${command.usage}\`` : 'No Usage'}
      ⪼  Accessable by: ${command.accessableby || 'Members'}
      ⪼  Aliases: ${command.aliases ? command.aliases.join(', ') : 'None'}`);
      embed.setFooter(`Requested By: ${message.author.username} | Phoenix has ${bot.commands.size}`, message.author.displayAvatarURL)
  
      return message.channel.send(embed);
    }
  };
  
  module.exports.help = {
    name: `help`,
    description: 'Displays all commands that the bot has.',
    usage: 'h|hlp|commands',
    category: 'General',
    accessableby: 'Members',
    aliases: ['h', 'hlp', 'commands']
  };
