const Discord = require("discord.js");
const { token, prefix, owners } = require('../../config.json');

module.exports.run = async (bot, message, args, data) => {

var img = (`.　　　　　　　　　　 ✦ 　　　　   　
　　　˚　　　　　　　　　　　　　　*　　　　　　 
 　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 
　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

.　　　　　　　　　　　　　.　　　ﾟ　  　　　.　　　　　　　　　　　　　.

　　　　　　,　　　　　　　.　　　　　　    　　　　
　　　　　　　　　　　　　　　　　　  :sunny: 
　　　　　　　　　　　　　　　　　　    　      　　　　　        　　　　*　　　　　　　　　.
　　　　　　　　　　.　　　　                      　　　　　　　　.
　　　　　　　　　　　　　　　　       　   　　　　
　　　　　　　　　　　　　　　　       　   　　　　　　　　　　　　　　　　       　    ✦ 
　   　　　,　　　　　　　　　*　　      :rocket: 　　　　 　　,　　　 ‍ ‍ ‍ ‍ 　 　　　　　　　　　　　　.　　　　　 　　
　　　.　　　　　　　　　　　　　 　           　　　　　　　　　　　　　　　　　　　˚　　　
　   　　　　,　　　　　　　　　　　       　    　　　　　　　　　　　　　　　　.　　　
 　　    　　　　　 　　　　　.　　　　　　　　　　　　　.　　　　　　　　　　　　　　　*
　　   　　　　　 ✦ 　　　　　　　         　        　　　　
　　 　　　　　　　 　　　　　.　　　　　　　　　　　　　　　　　　.　　　　　    　　. 
　 　　　　　.　　　　:full_moon: 　　　　　   　　　　　.　　　　　　　　　　　.　　　　　　　　　　   　

　˚　　　　　　　　　　　　　　　　　　　　　ﾟ　　　　　.　　　　　　　　　　　　　　　. 
　　 　  :earth_africa: 
‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ‍ ,　 　　　　　　　　　　　　　　*　　　　　　　　　　　　　　　　　　　   　
　　　　
　　　　　　　　　　　　　˚　　　　　　　　　　　　　　　　 ✦ 　　　　　　　,
.　　　　　　　　　　 ✦ 　　　　   　
　　　˚　　　　　　　　　　　　　　*　　　　　　 
 　　　　　　　　　　　　　　　.　　　　　　　　　　　　　　. 
　　 　　　　　　　 ✦ 　　　　　　　　　　 　 ‍ ‍ ‍ ‍ 　　　　 　　　　　　　　　　　　,　　   　

.　　　　　　　　　　　　　.　　　ﾟ　  　　　.`)


message.channel.send(img)
    };

  module.exports.help = {
    name: 'space',
    description: 'Shows you the space just joking it is for fun',
    usage: '',
    category: 'General',
    accessableby: 'everyone',
    aliases: []
  };