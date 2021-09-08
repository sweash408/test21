module.exports.run = async (bot, message, args) => {
  
  const members = message.guild.members.filter(member => member.user.presence.activity && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.activity.name));
  return message.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || "Nobody has an invite link as game name.");
};

  module.exports.help = {
    name: 'checkinvites',
    description: 'Returns a list of members with an invite as their game.',
    usage: '',
    category: 'General',
    accessableby: 'everyone',
    aliases: ["ci", "checkinvite"]
  };
