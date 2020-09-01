const Discord = require('discord.js');
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix;
  const giris = args[0]
  const rol = await db.fetch(`otorol_${message.guild.id}`);
  const kanal = await db.fetch(`otorolkanal_${message.guild.id}`);
  let abc = args.slice(1).join(' ');
  let otorol = message.mentions.roles.first() || message.guild.roles.get(abc) || message.guild.roles.find(rol => rol.name === abc);
  let otorolkanal = message.mentions.channels.first()
  
  if (!message.guild.roles.get(rol)) {
    await db.delete(`otorol_${message.guild.id}`)
    await db.delete(`otorolkanal_${message.guild.id}`);
  }
  
  if (!client.channels.get(kanal)) {
    await db.delete(`otorolkanal_${message.guild.id}`);
  }
  
  if(giris === "mesajdurdur" || giris === "mesajkapat" || giris === "mesaj-kapat" || giris === "mesajsıfırla") {
    if(!kanal) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`otorolkanal_${message.guild.id}`)
    message.channel.send(`Otorol \`mesaj\` özelliği başarıyla devredışı bırakıldı!`)
    return
  }
  
  if(giris === "durdur" || giris === "kapat" || giris === "sıfırla") {
    if(!rol) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`otorol_${message.guild.id}`)
    db.delete(`otorolkanal_${message.guild.id}`)
    message.channel.send(`Otorol özelliği başarıyla devredışı bırakıldı!`)
    return
  }
  
  if(rol) return message.channel.send(`Otorol zaten  \`${message.guild.roles.get(rol).name}\`  olarak, otorol mesaj kanalı ise ${client.channels.has(kanal) ? `<#`+kanal+`>` : "`devredışı`"} olarak ayarlı! \n\`${prefix}otorol kapat\`  yazarak şu an ayarlı olan otorolü devredışı bırakabilirsin.`)
  
  if(!otorol) return message.channel.send(`Merhabalar Dostum Bir Rol ve Kanal Etiketlemelisn! ve Botun Rol Vermesi İçin İstediğin Yetkiden Üste Olması Gerekir.\n Peki Ya Ne İşe Yarar?  **Sunucuya yeni katılan üyelere belirlediğiniz rolü otomatik olarak verir.** \n\`${prefix}otorol #kanal <rol>\`  yazarak otorol özelliğini aktif edebilirsin. \n\`${prefix}otorol kapat\`  yazarak otorol özelliğini devredışı bırakabilirsiniz. \n \`${prefix}otorol mesajkapat\` Yazarak Otorol Mesajını Devre Dışı Bırakbilirsiniz.\n Eğer Rolü Etiketlemiyorsa Herkese Bu Rolden Bahsetme Yetkisini Açmalısın. \n Rolü İdsini veya Adını Girerekte Ayarlayabilirsin Dostum.`)
  if(!otorolkanal) return message.channel.send(`Merhabalar Dostum Bir Rol ve Kanal Etiketlemelisn! ve Botun Rol Vermesi İçin İstediğin Yetkiden Üste Olması Gerekir.\n Peki Ya Ne İşe Yarar?  **Sunucuya yeni katılan üyelere belirlediğiniz rolü otomatik olarak verir.** \n\`${prefix}otorol #kanal <rol>\`  yazarak otorol özelliğini aktif edebilirsin. \n\`${prefix}otorol kapat\`  yazarak otorol özelliğini devredışı bırakabilirsiniz. \n \`${prefix}otorol mesajkapat\` Yazarak Otorol Mesajını Devre Dışı Bırakbilirsiniz.\n Eğer Rolü Etiketlemiyorsa Herkese Bu Rolden Bahsetme Yetkisini Açmalısın. \n Rolü İdsini veya Adını Girerekte Ayarlayabilirsin Dostum.`)
  db.set(`otorol_${message.guild.id}`, otorol.id)
  db.set(`otorolkanal_${message.guild.id}`, otorolkanal.id)
  
  message.channel.send(new Discord.RichEmbed().setTimestamp().setAuthor(message.guild.name, message.guild.iconURL).setFooter(client.user.username, client.user.avatarURL).setDescription(`Otorol başarıyla  ${otorol}  olarak ayarlandı! \nOtorol Mesaj kanalı başarıyla ${otorolkanal} olarak ayarlandı. \n**\`${prefix}otorol kapat\`** Yazarak Otorolü Kapatabilirsiniz.. \n**\`${prefix}otorol mesajkapat\`** Yazarak Otorol Mesajını Kapatırsınız..`))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['OTOROL'],
  permLevel: 0
};

exports.help = {
  name: 'otorol',
  description: 'Sunucuya yeni girenlere belirlediğiniz rolü otomatik olarak verir.',
  usage: 'otorol',
  kategori: 'yetkili'
};