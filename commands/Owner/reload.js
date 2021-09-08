module.exports.run = async (bot, message, args) => {
if(message.author.id != "436740713867247626") return message.channel.send("You're not the bot owner Blockhead Don't use this f**king command!")

if(!args[0]) return message.channel.send("Please provide a command to reload!")

let commandName = args[0].toLowerCase()

try{
    delete require.cache[require.resolve(`./${commandName}`)] // usage ?reload <name>
    bot.commands.delete(commandName)
    const pull = require(`./${commandName}`)
    bot.commands.set(commandName, pull)
} catch(e) {
  return message.channel.send(`Could not reload: \`${args[0]}\``)
}
  
message.channel.send(`The commands\`${args[0]} \`has been reloaded!`)
}

module.exports.help = {
  name: 'reload',
  description: 'Reload\'s a command',
  usage: 'reload',
  category: 'Owner',
  accessableby: 'Owners',
  aliases: ["r"]
};