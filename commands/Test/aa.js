const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var img = new Discord.RichEmbed()
.setImage('https://cdn.discordapp.com/attachments/609206206019665929/616570597454905345/image.jpg')
.setColor("#c54e0a")

var wel = new Discord.RichEmbed()
.setColor("#f96714")
.addField("**Welcome to Bubble <a:wave:612270923289985024>**", "Please verify in order to gain access to the server 🔓 Dont forget to check out the self assigned roles!")


 var jsembed = new Discord.RichEmbed()
.setColor("#a71006")
.setImage('https://previews.123rf.com/images/houbacze/houbacze1805/houbacze180500146/102546034-banner-rules.jpg')

var rules1 = new Discord.RichEmbed()
        .addField("Rules Set (1/2):", "---------------------------------------------------------------------------------------\n" +
                                  "__**1.**__ No spamming or flooding the chat with messages,  mass mentions, mass emoji, symbols or pictures etc. \n" +
                                  "__**2.**__ Do not type in all Caps, Bold, Italic or other formats unless you're a  Admin. \n" +
                                  "__**3.**__ adult (18+), explicit images etc, go to the NSFW channel \n" +
                                  "__**4.**__ No racist or degrading content, No foreign languages only English is accept .\n" +
                                  "__**5.**__ No excessively cursing and dm advertising(please report to staff if you find one). \n" +
                                  "__**6.**__ No advertising other sites/discord servers without permission. \n" +
                                  "__**7.**__ No posting external links other than direct links to youtube\n", true)

        .setColor("0xFF0000")

var rules2 = new Discord.RichEmbed()
     .addField("Rules Set (2/2):", "__**8.**__ No using peoples usernames and/or posing as them. \n" +
                                  "__**9.**__ No begging or repeatedly asking for permissions in the chat. \n" +
                                  "__**10.**__ No offensive names or names which contain swear words. \n" +
                                  "__**11.**__ Do not argue with staff there decisions are final. \n" +
                                  "__**12.**__ Do not repeatedly message Moderators or Admins without permission \n" +
                                  "__**13.**__ Do not message people without permission, Moderators or Admins with \"Stupid\" questions \n" +
                                  "__**14.**__ Disobeying the rules above will result in a kick,mute and ban.\n" +
                                  "---------------------------------------------------------------------------------------\n" +
                                  "**If you agree all and in order to gain access to the server** 🔓\n", true)
    .setColor("#0c0868")

message.channel.send(img)
message.channel.send(wel)
message.channel.send(jsembed)
message.channel.send(rules1)
message.channel.send(rules2);

};


module.exports.help = {
    name: 'aa',
    description: '',
    usage: '',
    category: 'Test',
    accessableby: 'Members',
    aliases: []
  };
