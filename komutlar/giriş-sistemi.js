const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  
if(!message.member.hasPermission("ADMINISTRATOR")) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(':x: **Hoşgeldin kanalını ayarlamak için ``Yönetici`` İznine sahip olmalısın!')
return message.channel.send(embed)
}
let kinal = db.fetch(`hgK_${message.guild.id}`)
if(db.has(`hgK_${message.guild.id}`)) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**HG kanalı <#${kinal}> kanalına ayarlı! Kapatmak için** \`${ayarlar.prefix}giriş-kanal kapat\``)
return message.channel.send(embed)
}
  
let kanal = message.mentions.channels.first();
  
if(!kanal) {
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`:x: **Hoşgeldin kanalın etiketlemedin! \`Doğru kullanım: ${ayarlar.prefix}giriş-kanal #kanal\`**`)
return message.channel.send(embed)
}
db.set(`hgK_${message.guild.id}`, kanal.id);

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(`**Hoşgeldin kanalını ${kanal} olarak ayarlandı!**`)   
message.channel.send(embed)                                                                                                                                      
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: ['hoşgeldinkanal','hg-kanal'],
permLevel: 0
};

exports.help = {
name: 'hoşgeldin-kanal',
description: 'Hoşgeldin kanalını ayarlamaya yarar.',
usage: 'hgkanal #kanal'
};