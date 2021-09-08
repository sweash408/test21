const discord = require("discord.js");
const token = require("./token.json").token;
const bot = new discord.Client({
  disableEveryone: true
});

/*const express = require('express');
const keepalive = require('express-glitch-keepalive');

const app = express();

app.use(keepalive);

app.get('/', (req, res) => {
res.json('This bot should be online! Uptimerobot will keep it alive');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);*/
/*const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 console.log(Date.now() + " Just got pinged!");
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);*/
const lib = require("./lib/functions");

bot.commands = new discord.Collection();
bot.aliases = new discord.Collection();
bot.afk = new Map();

lib.setup(bot);

module.exports.bot = bot;

bot.login(token);