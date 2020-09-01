const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send('Bu komutu sadece `YÖNETİCİ` yetkisine sahip olanlar kullanabilir.')

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Dostum Lütfen Bir Rol Etiketle.')

db.set(`yetkilirol_${message.guild.id}`, rol.id)
message.channel.send(`Başarıyla Yetkili Rolü ${rol} Olarak Ayarlandı.`)

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ["jailyetkilirol"]
}

exports.help = {
name: "jail-yetkili-rol"
}