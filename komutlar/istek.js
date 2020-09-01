const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => { 
  
  
  
  
    let istek = args.slice(0).join(" ");

  const küfür2 = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "anan", "karı",];
        if (küfür2.some(word => istek.includes(word))) {
          message.channel.send('**İsteğinde küfür belirtemessin!**') 
  return;
        }
  
  
  
  
  
  
  if(!istek) return message.channel.send(' **Bir istek belirtmelisiniz.**')
  
  message.channel.send('**Başarıyla isteğiniz gönderildi** \n\n **İstek** = ``'+istek+'``')
  
  let gond = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Bir istek var!**')
  .setDescription('**Merhaba Yetkililerim Bu İsteği Onaylaya Bilirsiniz Veya Reddedebilirsiniz.\n\n ** **İsteği Gönderen** : '+message.author.username+'\n\n **İsteği** : ```'+istek+'```')
  
  
  client.users.get('716217809599856671').send(gond)
  client.channels.get('740257254460096524').send(gond)
  
  
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'istek',
  description: 'taslak', 
  usage: 'taslak'
};