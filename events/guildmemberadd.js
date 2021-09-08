const Discord = require("discord.js");
const {bot} = require('../index');
const config = require("../config.json");
/*const serverStats = {
  guildID: '594547872410763267',
  totalUsersID: '605366592766869535',
  memberCountID: '594547872846839841',
  botcountID: '605366795767119902'
};*/

bot.on("guildMemberAdd", async member => {

/*     if (member.guild.id !== serverStats.guildID) return;

  bot.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
  bot.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
  bot.channels.get(serverStats.botcountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);*/

    const sChannel = member.guild.channel.find('name', 'general')
    let sayArray = [
        `${member} just joined! Quick! Everyone, Look busy!`, 
        `Got some more chips? ${member} just joined the party!`, 
        `Welcome, ${member}, to the ${member.guild.name} discord server!`, 
        `Watch out! ${member} just joined!`, 
        `${member} just joined! Everyone give them a fine welcome.`,
        `Roses are red, violets are blue, ${member} joined this server with you.`,
        `${member}hopped into the server. Kangaroo!!`,
        `📥 **${member.tag}** has \`\`joined\`\` the server. (${member.id})`,
    ]
    let math = Math.floor(Math.random() * sayArray.length);
  
    let embed = new Discord.RichEmbed()
        .setAuthor("😊Welcome! 🎊")
        .setDescription(sayArray[math])
        .setColor("RANDOM")
        .setFooter(`User joined (${member.guild.memberCount})`, member.displayAvatarURL)
        .setTimestamp(new Date())
  
    sChannel.send(embed);

});