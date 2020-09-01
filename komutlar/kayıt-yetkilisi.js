const Discord = require('discord.js')
const db = require('quick.db')
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args, config) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:730662171247378443:744262508512018482> Uyarı!')
.setDescription('Bu komutu kullanmak için ``YÖNETİCİ`` yetkisine sahip olmalısın.'))

const rol = message.mentions.roles.first()
if(!rol) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:730662171247378443:744262508512018482> Uyarı!')
.setDescription('Lütfen bir rol etiketle!'))

db.set(`teyityetkili_${message.guild.id}`, rol.id)
message.channel.send(new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:728204291570925590:744262428023324904> Başarılı')
.setDescription(`Yetkili rolünü ${rol} olarak ayarladım.`))


    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtyetkilisi'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-yetkilisi',
  description: "",
  usage: ''
};
