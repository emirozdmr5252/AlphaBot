const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async (client, message, args) => {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send('Bu Komudu Kullanmak İçin ``Yönetici`` Yetkisine Sahip Olman Gerekmektedir.')

  let alpcık = args.slice(0).join(' ');
  if (!alpcık) return message.channel.send('Ototag Kullanımı Örnek `!oto-tag 💫|-uye-` ')
  
message.channel.send('Oto tag sistemi ayarlanmıştır.kapatmak için !ototag-kapat') 
  
  db.set(`ototag_${message.guild.id}`, alpcık)

}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ototag"],
  permLevel: 0
}

exports.help = {
  name: 'oto-tag',
  usage: ' başvuru'
}