const Discord = require("discord.js");
const db = require("quick.db")
const bot = new Discord.Client();
const alp = require("../ayarlar.json");

module.exports.run = async (client, message, args) => {
const ms = require('ms')
let p = alp.prefix
if(!message.member.hasPermission("BAN_MEMBERS")) return;
    if(!args[0]) return message.channel.send(new Discord.RichEmbed()
    .setDescription('**Örnek kullanım:** `' + p + 'çekiliş #kanaletiket <süre("20 saniye")> <ödül("vip")>`\n**Diğer Komutlar:**\n`' + p + 'çekiliş iptal`\n`!çekiliş tekrar-çek`')
    .setFooter(`© ${message.guild.name}`)
    .setColor(message.guild.member(message.author).highestRole.hexColor))
    let check = await db.fetch(`cfxmid${message.guild.id}`)
    let check2 = await db.fetch(`cfxcekilis${message.guild.id}`)
    if(args[0] == 'tekrar-çek') {
    if(!check2) {
    let mid = await db.fetch(`cfxmid${message.guild.id}`)
    let channel = await db.fetch(`cfxcn${message.guild.id}`)
    if(!mid) return;
    if(!channel) return;
    await message.guild.channels.get(`${channel}`).fetchMessage(mid).then(async m => {
      let users = await db.fetch(`cfxcdb.${message.guild.id}`)
      let list = users.filter(u => u);
      let joins = list[Math.floor(Math.random() * list.length)]
      let cont = await db.fetch(`cfxm${message.guild.id}`)  
      let kazananlar = new Discord.RichEmbed()
      .setDescription(`**Mesaja Gitmek İçin; [Tıkla!](https://discordapp.com/channels/${message.guild.id}/${channel}/${mid})**`)
      .setFooter(`© ${message.guild.name}`)
      .setAuthor('Çekiliş ödülü:' + ' [ ' +cont+ ' ]')
      .setColor("ff0000")
      .addField('** **', '**Yeni kazananlar**: \n'+ message.guild.members.get(joins))
      message.guild.channels.get(channel).send(kazananlar)
      })
    }
      return;
    }
    if(args[0] == 'iptal') {
    if(check) {
    db.delete(`cfxcekilis${message.guild.id}`)
    db.delete(`cfxsure${message.guild.id}`)
    db.delete(`cfxcn${message.guild.id}`)
    db.delete(`cfxm${message.guild.id}`)
    db.delete(`cfxcdb.${message.guild.id}`)
    db.delete(`cfxmid${message.guild.id}`)
    return message.channel.send('Bir önceki çekiliş iptal edildi!')
      }
    }
  let ch = message.mentions.channels.first()
  let title = args.slice(3).join(" ")
  let duration = args[1]
  let sure = args[2]
  let typ;
  let filter = m => m.author.id === message.author.id;
  if (sure == 'saniye') typ = 'seconds'
  if (sure == 'dakika') typ = 'minutes'
  if (sure == 'saat') typ = 'hours'
  if (sure == 'gün') typ = 'days' 
    if(args[0] != ch) return message.reply('Çekilişin yapılacağı kanalı etiketlemelisin.');
    if(isNaN(duration)) return message.reply('Çekilişin süresini belirtmelisin.')
    if(!sure) return message.reply('Çekilişin süresini belirtmelisin.')
    if(!title) return message.reply('Çekilişin ödülünü belirlemelisin.');
    if(check2) return message.channel.send(`Zaten bir çekiliş başlatmışsın!`)
    db.delete(`cfxsure${message.guild.id}`)
    db.delete(`cfxcn${message.guild.id}`)
    db.delete(`cfxm${message.guild.id}`)
    db.delete(`cfxcdb.${message.guild.id}`)
    db.delete(`cfxmid${message.guild.id}`)

  let cfx_embed = new Discord.RichEmbed()
  .setFooter(`© ${message.guild.name}`) 
  .setColor("ff0000")
  .setAuthor('Çekiliş ödülü:' + ' [ ' +title+ ' ]')
  .setDescription(`**Çekilişi Başlatan;** <@${message.author.id}> **Çekilişe kalan: **\`${duration} ${sure}\``)
    ch.send(cfx_embed).then(t => {
    db.set(`cfxcekilis${message.guild.id}`, Date.now())
    db.set(`cfxsure${message.guild.id}`, ms(`${duration} ${typ}`))
    db.set(`cfxmid${message.guild.id}`, t.id)
    db.set(`cfxcn${message.guild.id}`, ch.id)
    db.set(`cfxm${message.guild.id}`, title)
    })
    };
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: "çekiliş"
};
   