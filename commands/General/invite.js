module.exports.run = async (bot, message, args) => {
    try {
      bot.generateInvite(['ADMINISTRATOR']).then(link => message.channel.send('Bot Invite: ' + link));
    } catch (err) {
      message.channel.send('There was an error!\n' + err).catch();
    }
  };

  module.exports.help = {
    name: 'invite',
    description: 'Send you the invitation link of the Bot',
    usage: '',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["bi","botinv"]
  };
  