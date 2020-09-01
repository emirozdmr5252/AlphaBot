const Discord = require('discord.js')
const db = require('quick.db')
const ms = require("ms");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args, config) => {
  
const user = message.mentions.users.first()
if(!user) return message.channel.send(
new Discord.RichEmbed() 
.setColor('RANDOM')
.setTitle('Hata')
.setDescription(':x: Lütfen birisini etiketle!'))

let erkek = db.get(`erkekpuan_${message.guild.id}_${user.id}`)
let kız = db.get(`kızpuan_${message.guild.id}_${user.id}`)

const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setTitle(`${user.tag} adlı kişinin istatistikleri;`)
.addField(' Kaç erkek kaydetmiş', `${erkek || '0'}`)
.addField(' Kaç kız kaydetmiş',  `${kız || '0'}`)
message.channel.send(embed)
        
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['İstatistik'],
  permLevel: 0
};

exports.help = {
  name: 'admin-istatistik', 
  description: "",
  usage: ''
};