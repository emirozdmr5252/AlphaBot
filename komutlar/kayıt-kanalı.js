const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args, config) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(
new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:no:737642353342414862> Uyarı!')
.setDescription(' Bu komutu kullanmak için ``YÖNETİCİ`` yetkisine sahip olmalısın.'))

const kanal = message.mentions.channels.first()
if(!kanal) return message.channel.send(new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:no:737642353342414862> Uyarı!')
.setDescription('Lütfen bir kanal etiketle!'))

db.set(`teyitkanal_${message.guild.id}`, kanal.id)
message.channel.send(new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:yes:737642353724096533> Başarılı')
.setDescription(`Teyit kanalını ${kanal} olarak ayarladım.`))
        
  
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['KAYIT-KANALI'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal', 
  description: "",
  usage: ''
};
