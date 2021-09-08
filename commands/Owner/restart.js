const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');


module.exports.run = async (bot, message, args) => {

    if(message.author.id != owners) return message.channel.send("You're not the bot owner!")
  let confirmation = await message.channel.send({
    embed: {
      description: 'Are you sure you about it <a:sadani:616455877662212156> ?'
    }
  });

  const collector = confirmation.channel.createMessageCollector(m =>  (m.author.id) && (m.content.toLowerCase().startsWith('yes') || m.content.toLowerCase().startsWith('no')),
    {
      time: 30 * 1000,
      maxMatches: 1
    }
  );
/*message.channel.send('Are you sure you about it😓?')
.then(() => {
  message.channel.awaitMessages(m => m.content === (m.content.toLowerCase().startsWith('yes') || m.content.toLowerCase().startsWith('no')), {
    max: 1,
    time: 30000,
    errors: ['time'],
  })*/
  collector.on('collect', async answer => {
    if (answer.content.toLowerCase().startsWith('yes')) {
      await message.channel.send({
        embed: {
          description: 'Bot is restarted.... Please wait for a sec <a:loaddnd:616460336681451530> '
        }
      });
     {
        process.exit(0)
      }
    }
    else {
      await message.channel.send({
        embed: {
          description: 'Cool ! <a:bobcool:616265163468832768>.'
        }
      });
    }
  });
};
 /* .then((collected) => {
      message.channel.send(`The collected message was: ${collected.first().content}`);
    })
    .catch(() => {
      message.channel.send(img);
    });
});*/
 /*   try {
        await message.channel.send("Thank you boss! Now i can get some rest🤪.")
        process.exit()
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }*/
    
  


module.exports.help = {
    name: 'restart',
    description: 'restart Bot',
    usage: 'Warning',
    category: 'Owner',
    accessableby: 'Owners',
    aliases: ["rstart"]
  };