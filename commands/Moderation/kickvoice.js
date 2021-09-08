const discord = require("discord.js");
const config = require('../../config.json');

module.exports.run = async (bot, message, args) => {
// Make sure the bot user has permissions to move members in the guild:
if (!message.guild.me.hasPermission(['MANAGE_CHANNELS', 'MOVE_MEMBERS'])) return message.reply('Make Sure you have `Move Members` permission  .');

// Get the mentioned user/bot and check if they're in a voice channel:
const member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!member) return message.reply('You need to @mention/id of user/bot to kick from the voice channel.');
if (!member.voiceChannel) return message.reply('That user/bot isn\'t in a voice channel.');

// Now we set the member's voice channel to null, in other words disconnecting them from the voice channel.
member.setVoiceChannel(null);

// Finally, pass some user response to show it all worked out:
message.react('👌');
/* or just "message.reply", etc.. up to you! */
};

module.exports.help = {
  name: 'kickvoice',
  description: 'Kicking users or bots from a voice channel',
  usage: '<@mentio/id of the user or bot>',
  category: 'Moderation',
  accessableby: '',
  aliases: ['kvoice']
};