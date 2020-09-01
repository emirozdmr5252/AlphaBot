const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async (client, message, args) => {
  
   let huso = db.fetch(`ototag_${message.guild.id}`)
  
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(':x: Bu Komudu Kullanmak İçin ``Yönetici`` Yetkisine Sahip Olman Gerekmektedir.')

  
  if(!huso) return message.channel.send('Malesef.Ayarlamadığınız Bir Sistemi Kapatamazsınız.')
  
  message.channel.send('Başarıyla Tag Sistemi Devre Dışı Bırakıldı.')
 
}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oto-tag-kapat"],
  permLevel: 0
}

exports.help = {
  name: 'ototag-kapat',
  usage: ' başvuru'
}