const Discord = require("discord.js");
const config = require('../../config.json');
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    ///tempmute @user 1s/m/h/d

    if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) return message.reply("No can do.");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("Couldn't find user.");
    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("can't mute them!");
    let reason = args.slice(2).join(" ");
    if(!reason) return message.reply("Please supply a reason.")
    console.log(reason)

    let muterole = message.guild.roles.find(`name`, "muted");
    //start of role create
    if(!muterole){
        try{
          muterole = await message.guild.createRole({
              name: "muted",
              color: "#000000",
              permissions:[]
          })
          message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                     SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    SEND_TTS_MESSAGES: false,
                    ATTACH_FILES: false,
                    SPEAK: false
              });
          });
        }catch(e){
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if(!mutetime) return message.reply("You didn't specify a time!");

    message.delete().catch(O_o=>{});

    try{
        await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
    }catch(e){
        message.channel.send(`A user has been muted....They will be muted for ${mutetime}`)
    }

    let muteembed = new Discord.RichEmbed()
    .setDescription(`Muted executed by ${message.author}`)
    .setColor("#bfa40b")
    .addField("Muted User", tomute)
    .addField("Muted in", message.channel)
    .addField("Time", message.createdAt.toLocaleString())
    .addField("Reason", reason)
    .addField("Length", mutetime);

    let incidentschannel = message.guild.channels.find(`name`, "logs");
    if(!incidentschannel) return message.reply("Please create a channel first!");
    incidentschannel.send(muteembed);

    await(tomute.addRole(muterole.id));
    
    setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));


    //end of module
};

module.exports.help = {
    name: 'tempmute',
    description: 'mute member temporary',
    usage: '<user> <length: 1s/m/h/d> <reason>',
    category: 'Moderation',
    accessableby: 'moderator',
    aliases: ['temute']
  };