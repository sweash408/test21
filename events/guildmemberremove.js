const {bot} = require('../index');
const { prefix } = require('../config.json');

/*const serverStats = {
  guildID: '594547872410763267',
  totalUsersID: '605366592766869535',
  memberCountID: '594547872846839841',
  botcountID: '605366795767119902'
};*/

bot.on('guildMemberRemove', member => {
 /* if (member.guild.id !== serverStats.guildID) return;
  
  bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botcountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);*/
});