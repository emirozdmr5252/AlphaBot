const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {




    let isteks = args.slice(0).join(" ");

  const küfür22 = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq", "anan", "karı","bok",];
        if (küfür22.some(word => isteks.includes(word))) {
          message.channel.send('**İsteğinde küfür belirtemessin!**')
  return;
        }






  if(!isteks) return message.channel.send(' **Bir hata belirtmelisiniz.**')

  message.channel.send('**Başarıyla isteğiniz gönderildi** \n\n **Hata** = ``'+isteks+'``')

  let gonde = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('**Bir hata var!**')
  .setDescription('**Merhaba Yetkililerim Bu Hatayı Onaylaya Bilirsiniz Veya Reddedebilirsiniz.\n\n ** **Hatayı Gönderen** : '+message.author.username+'\n\n **Hata** : ```'+isteks+'```')


  client.users.get('716217809599856671').send(gonde)
  client.channels.get('741953119394594909').send(gonde)




  };
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hatalı-kod',
  description: 'taslak',
  usage: 'taslak'
};
