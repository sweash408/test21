const { RichEmbed } = require("discord.js");
 module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("ADMINISTRATOR") || !message.guild.owner) return message.channel.send("You dont have permission to use this command.");

    const cmd = args.join(' ').split(' | ')
    if (cmd < 1) return message.channel.send("**You did not provide any text to embed!** Example Usage: \`This is my title | This is my description.\`Remember, you must add the \"|\" mark in between otherwise it will be undefine.").then(m => m.delete(20000))
    let emb = new RichEmbed()
        .setColor("RANDOM")
        .setTitle(cmd[0])
        .setDescription(cmd[1])

    message.channel.send(emb)

    message.delete();
    }
    module.exports.help = {
        name: "embed",
        aliases: [],
        usage: `<title> | <message>`,
        category: "General",
        accessableby: 'everyone',
        description: "Return you the embed message"
    };