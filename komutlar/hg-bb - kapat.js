const Discord = require('discord.js');
const db = require('quick.db');
const hüsocuk= require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || hüsocuk.prefix;
  try {
    await db.delete(`hgK_${message.guild.id}`);
    await message.reply('Başarılı bir şekilde sıfırlandı')
  } catch(err) { console.log(err) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayit-sistemi-kapat'],
  permLevel: 0
};

exports.help = {
  name: 'hoşgeldin-kapat',
  description: 'Kayıt sistemi ayarlarını sıfırlar ve devre dışı bırakır',
  usage: 'kayıt-sistemi-kapat',
};
