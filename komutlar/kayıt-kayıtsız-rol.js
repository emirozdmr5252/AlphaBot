const Discord = require('discord.js')
const db = require('quick.db')
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args, config) => {
  
if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(
new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:no:737642353342414862> Uyarı!')
.setDescription(' Bu komutu kullanmak için ``YÖNETİCİ`` yetkisine sahip olmalısın.'))

const rol = message.mentions.roles.first()
if(!rol) return message.channel.send(
new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:no:737642353342414862> Uyarı!')
.setDescription('Lütfen bir rol etiketle!'))

db.set(`teyitkayıtsız_${message.guild.id}`, rol.id)
message.channel.send(new Discord.RichEmbed() 
.setColor('BLACK')
.setTitle('<:yes:737642353724096533> Başarılı')
.setDescription(`Kayıtsız rolünü ${rol} olarak ayarladım.`))
        
  
      
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['KAYITSIZ-ROL'],
  permLevel: 0
};

exports.help = {
  name: 'kayıtsız-rol', 
  description: "",
  usage: ''
};