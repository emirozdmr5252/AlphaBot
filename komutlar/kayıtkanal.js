const Discord = require('discord.js');
const db = require('quick.db');
const hüsocuk = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanabilmek için   `Yönetici` iznine sahip olmalısın!')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || hüsocuk.prefix;
  let kanal = message.mentions.channels.first()
  if(!kanal) return message.reply('Kayıt işleminin gerçekleştirileceği kanalı etiketlemelisin!')
  await db.set(`kayitkanali_${message.guild.id}`, kanal.id)
  message.reply(`Kayıt kanalı başarıyla ${kanal} olarak ayarlandı!`)
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayit-kanal-ayarla'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal-ayarla',
  description: 'Kayıt kanalı ayarlama ',
  usage: 'kayıt-kanal-ayarla #kanal',
};