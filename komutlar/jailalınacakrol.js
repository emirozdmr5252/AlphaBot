const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send('Bu komutu sadece `YÖNETİCİ` yetkisine sahip olanlar kullanabilir.')

let rol = message.mentions.roles.first()
if(!rol) return message.channel.send('Dostum Lütfen Bir Rol Etiketle.')

db.set(`alınacakrol_${message.guild.id}`, rol.id)
message.channel.send(`Alınacak Rol Başarıyla ${rol} Olarak Ayarlandı.`)

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ["jailalınacakrol"]
}

exports.help = {
name: "jail-alınacak-rol"
}