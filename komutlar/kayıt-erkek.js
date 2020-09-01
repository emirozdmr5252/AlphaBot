const Discord = require('discord.js');
const db = require('quick.db')

exports.run = (client,message,args) => {

let yetkili = db.get(`teyityetkili_${message.guild.id}`)
if(!yetkili) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle(' Uyarı!')
.setDescription('Teyit yetkili rolü ayarlanmamış! \n Örnek : !kayıt-yetkilisi @rol'))

if(!message.member.roles.has(yetkili)) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:727895115112251392:744262370519679099> Uyarı!')
.setDescription(' Bu komutu kullanmaya yetkin yetmiyor!'))

let erkek = db.get(`teyiterkek_${message.guild.id}`)
//ELLEME BOTU ok
if(!erkek) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:727895115112251392:744262370519679099> Uyarı!')
.setDescription(' Teyit erkek rolü ayarlanmamış! \n Örnek : !erkek-rol @rol'))

 let kayıtsız = db.get(`teyitkayıtsız_${message.guild.id}`)
if(!kayıtsız) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:727895115112251392:744262370519679099> Uyarı!')
.setDescription('Teyit kayıtsız rolü ayarlanmamış! \n Örnek : !kayıtsız-rol @rol'))

let kanal = db.get(`teyitkanal_${message.guild.id}`)
if(!kanal) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:727895115112251392:744262370519679099> Uyarı!')
.setDescription('Teyit kanalı ayarlanmamış!\n Örnek : !kayıt-kanal #kanal'))

if(message.channel.id != kanal) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:727895115112251392:744262370519679099> Uyarı!')
.setDescription(`  Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`))

let user = message.mentions.users.first()
let isim = args[1]
let yaş = args[2]

if(!user) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('Uyarı!')//dur A YAPMIŞIM AM PĞASLDPĞSALD
.setDescription(`Lütfen birisini etiketle!`))

if(!isim) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('Uyarı!')
.setDescription('Lütfen bir isim gir!'))

if(!yaş) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('Uyarı!')
.setDescription('<a:727895115112251392:744262370519679099>  Lütfen bir yaş gir!'))

  let tag = db.get(`tag_${message.guild.id}`)
if(!tag) return message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle(' Uyarı!')
.setDescription('Tagınızı ayarlanmamışsınız! \n Örnek : !tag ayarla tagınız'))

message.guild.members.get(user.id).setNickname(`${tag} | ${isim}  ${yaş}`)
message.guild.members.get(user.id).addRole(erkek)
message.guild.members.get(user.id).removeRole(kayıtsız)
db.add(`erkekpuan_${message.guild.id}_${message.author.id}`, 1)

let e = db.fetch(`erkekpuan_${message.guild.id}_${message.author.id}`)

message.channel.send(
new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('<a:728204291570925590:744262428023324904> İşte Kayıt Oldun!')
.setDescription(`${user} **Kullanıcısına** <@&${erkek}> **rolü verildi.**\n \`\`\`${tag} ${isim} ' ${yaş} Olarak Kayıt Edildi.\`\`\` \n ${message.author} **Erkek Kayıt Sayın:** ${e || 0}  `))

}
exports.conf = {
enabled: true,
guildOnly: false,
permLevel: 0,
aliases: ["ERKEK"]
}

exports.help = {
name: 'erkek'
}
