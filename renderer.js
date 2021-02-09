const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./bot-config.json')
const token = config.token
var channel = null;
const input = document.querySelector('input');
const button = document.querySelector('#sendBtn');
const channelbtn = document.querySelector('#setChannelBtn');


button.addEventListener('click', () =>
{
  if (channel != null)
  {
    channel.send(input.value);
    input.value = '';
  }
});

channelbtn.addEventListener('click', () =>
{
    bot.channels.fetch(input.value).then(ch => channel = ch).catch(e => alert(e));
    input.value = ''
});

bot.on('ready', () => {
    bot.user.setActivity('Electron App')
        type: 'WATCHING'
})


bot.login(token);