const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanmak için yeterli izne sahip değilsin.`)

  let rol = message.mentions.roles.first()
  
  if (!rol) return message.reply(`Rolü etiketlemedin!`)

  db.set(`banrol_${message.guild.id}`, rol.id)

  message.channel.send(`Ban rolü ${rol} olarak ayarlandı!`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ban-rol"],
  permLevel: 0
};

exports.help = {
  name: 'banrol',
  description: 'taslak',
  usage: 'banrol'
};