const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client,message,args) => {

if(!message.member.hasPermissions("ADMINISTRATOR")) return message.channel.send('Bu komutu sadece `YÖNETİCİ` yetkisine sahip olanlar kullanabilir.')

let log = message.mentions.channels.first()
if(!log) return message.channel.send('Dostum Lütfen Bir Kanal Etiketle.')

db.set(`log_${message.guild.id}`, log.id)
message.channel.send(`Log Başarıyla ${log} Olarak Ayarlandı.`)

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ["jaillog"]
}

exports.help = {
name: "jail-log"
}