const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');
const { inspect } = require("util");


module.exports.run = async (bot, message, args) => {
 if(message.author.id =='436740713867247626') {
     let toEval = args.join(" ");
     let evaluted = inspect(eval(toEval, { depth: 0 } ))
   try {
     if(toEval) {
         let hrStart = process.hrtime()
         let hrDiff;
         hrDiff = process.hrtime(hrStart)
         return message.channel.send(`*Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s` : ''}${hrDiff[1] / 1000000}ms.*\`\`\`javascript\n${evaluted}\n\`\`\``)
     } else {
        message.channel.send("Error while evaluating: `cann't evaluated air`")
     }
   } catch(e) {
      message.channel.send(`Error while evaluating: \`${e.message}\``)
   }
 }else {
     return message.reply("you don't have permission to use this command and you are not the  owner to use it.").then(m => m.delete(30000))
 }
};

module.exports.help = {
  name: 'eval',
  description: "Warning Don't use it",
  usage: 'Dont use this commands',
  category: 'Owner',
  accessableby: 'Owners',
  aliases: ["e", "ev"]
};
