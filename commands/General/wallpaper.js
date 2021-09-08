const {RichEmbed}= require("discord.js");
const config = require('../../config.json');
const superagent = require('superagent');

module.exports.run = async (bot, message, args) => {
  message.delete(20000)
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/wallpaper");
    
    const embed = new RichEmbed()
    .setColor("#ff9900")
    .setImage(body.url) 
    .setFooter(`© Sweash`);
    message.channel.send({embed})
};

module.exports.help = {
  name: 'wallpaper',
  description: '',
  usage: '',
  category: 'General',
  accessableby: 'everyone',
  aliases: []
};