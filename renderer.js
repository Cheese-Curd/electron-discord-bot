// Thanks for Angel for giving me like half the code lmao \\

// Variables \\
const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./bot-config.json');
const token = config.token;
var channel = null;
const input = document.querySelector('input');
const button = document.querySelector('#sendBtn');
const channelbtn = document.querySelector('#setChannelBtn');
const sendembed = document.querySelector('#sendEmbedBtn')
const themelink = document.querySelector('#theme-link');
const etst = document.querySelector('#ets');
const ecolor = document.querySelector('#ecolor')
const eclabel = document.querySelector('#eclabel')
const ectoggle = document.querySelector('#ectoggle')
const playings = document.querySelector('#playings')
const watchings = document.querySelector('#waitings')
const setstatus = document.querySelector('#setstatus')

// Themes \\

document.querySelector('#ltheme').addEventListener('click', () =>
{
 themelink.href = 'theme-light.css'; // light theme \\
});

document.querySelector('#dtheme').addEventListener('click', () =>
{
  themelink.href = 'theme-dark.css'; // dark theme \\
});

document.querySelector('#htheme').addEventListener('click', () =>
{
  themelink.href = 'theme-green.css'; // hacker theme \\
});

document.querySelector('#dotheme').addEventListener('click', () =>
{
  themelink.href = 'theme-dark-old.css'; // dark theme (old) \\
});

// Embed \\

ectoggle.addEventListener('change', () =>
{
  if (ectoggle.checked)
  {
    ecolor.style.display = '';
    eclabel.style.display = '';
  }
  else
  {
    ecolor.style.display = 'none';
    eclabel.style.display = 'none';
  }
});

// Angel also helped me this code, but I made the like idea and var's \\
sendembed.addEventListener('click', () =>
{
  if (channel != null)
  {
    const cnslembed = new Discord.MessageEmbed()
    .setTitle(input.value);
    if (etst.checked == true)
      cnslembed.setTimestamp();
    if (ectoggle.checked == true)
        cnslembed.setColor(ecolor.value);
    channel.send(cnslembed);
    input.value = '';
  }
});

// Set Status \\

setstatus.addEventListener('click', () =>
{
    if (playings.checked) {
      bot.user.setActivity(input.value, {
          type: 'PLAYING'
      })
      playings.checked = false
      input.value = ''
    } else if (watchings.checked) {
        bot.user.setActivity(input.value, {
            type: 'WATCHING'
        })
        watchings.checked = false
        input.value = ''
    }
    
});

// Send Message \\

button.addEventListener('click', () =>
{
  if (channel != null)
  {
    channel.send(input.value);
    input.value = '';
  }
});

// Set Channel \\
channelbtn.addEventListener('click', () =>
{
    bot.channels.fetch(input.value).then(ch => channel = ch).catch(e => alert(e));
    input.value = ''
});

// Basic Stuff \\

bot.on('ready', () => {
    bot.user.setActivity("Electron App", {
        type: 'WATCHING'
    })
})


bot.login(token);