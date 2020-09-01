const Discord = require('discord.js');
const db = require('quick.db');
const hüsocuk = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || hüsocuk.prefix;
  let alp = args.join(' ');
  if(!args[0] || !(alp).includes('(uye)')) return message.reply(`Sunucuya üye katılınca, kayıt kanalına atılacak mesajı belirtmelisin! \n\`Örn:\` ${prefix}kayıt-hoşgeldin-mesajı (uye) hoş geldin! Kayıt olmak için ${prefix}kayıt isim yaş`)
  await db.set(`kayithosgeldinmesaji_${message.guild.id}`, alp)
  message.reply(`Sunucuya üye katılınca, kayıt kanalına atılacak mesaj başarıyla ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayit-hosgeldin-mesaji'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-hoşgeldin-mesajı',
  description: 'Kayıt hoş geldin mesajı ayarlama ',
  usage: 'kayıt-hoşgeldin-mesajı mesaj',
};