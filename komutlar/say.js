const Discord = require('discord.js');
const ayarlar = require("../ayarlar.json")
const db = require("quick.db")
exports.run = async (client, message, args) => {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(':x: Bu Komudu Kullanmak İçin ``Yönetici`` Yetkisine Sahip Olman Gerekmektedir.')

 
if(args[0] === "ayarla") {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(':x: Bu Komudu Kullanmak İçin ``Yönetici`` Yetkisine Sahip Olman Gerekmektedir.')
let alpandhuso = args.slice(1).join(' ');
if(!alpandhuso) return message.reply("Tagı Ne Yapmalıyım?.")
db.set(`tag_${message.guild.id}`, alpandhuso)
message.channel.send(`${alpandhuso} Olarak Ayarlandı.`)
} 
if(args[0] === "sıfırla") {
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(':x: Bu Komudu Kullanmak İçin ``Yönetici`` Yetkisine Sahip Olman Gerekmektedir.')
db.delete(`tag_${message.guild.id}`)  
message.channel.send("Tag Başarılı Bir Şekilde Sıfırlandı")
}

}




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'tag',
  usage: ' başvuru'
}