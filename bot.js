const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
const express = require("express");
require("./util/eventLoader")(client);
const path = require("path");
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map();
const YouTube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const Opus = require('node-opus');
const googleTTS = require('google-tts-api');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});








// KOMUTLAR BURAYA //


client.on("guildMemberAdd", async member => {
let huso = await db.fetch(`ototag_${member.guild.id}`)
if(!huso) return
if (member.bot === true) return;

 var sonuc = await db.fetch(`ototag_${member.guild.id}`).replace("-uye-", ` ${member.user.username}`)
 member.setNickname(sonuc);

 })




client.on("guildMemberAdd", async member => {
  let girenKisi = client.users.get(member.id);
  let girisKanal = client.channels.get(db.fetch(`hgK_${member.guild.id}`));
  let Güvenli = `${member} adlı kullanıcının hesabı güvenli!`;
  let Şüpheli = `${member} adlı kullanıcının hesabı güvenli değil!`;

   var ce1 = ['**Umarım Çay Getirmişsindir.**', '**Sen Geldiğine Göre Parti Başlıyabilir.**', '**Geldiğine Çok Sevindik.**', '**Merhaba desene!**', '**Hepimiz Seni Bekliyorduk.**']

   var mesaj = ce1[Math.floor((Math.random() * ce1.length))];

  var ce2 = ['https://media.discordapp.net/attachments/730739771059732500/736574710501998663/4ea1e74d-1c99-490a-9c13-d46ec11bc4642FKeyPiercingBrahmancow-size_restricted.gif', 'https://media.discordapp.net/attachments/730739771059732500/736632707152478218/6f5bb25b-c11b-4003-8a39-69490341df182FPtema2.gif', 'https://media.discordapp.net/attachments/730739771059732500/736620677104402624/giphy.gif']

   var mesajresim = ce2[Math.floor((Math.random() * ce2.length))];

let kayıttolü = db.fetch(`teyityetkili_${member.guild.id}`)

  const ktarih = new Date().getTime() - girenKisi.createdAt.getTime();

  var kontrol;
  if (ktarih > 2629800000) kontrol = Güvenli;
  if (ktarih < 2629800001) kontrol = Şüpheli;
  let kanal = await db.fetch(`hgK_${member.guild.id}`);
  if (!kanal) return;

 client.channels.get(kanal).send(`<@&${kayıttolü}> Sunucumuza Yeni Üye Geldi`);

const giris = new Discord.RichEmbed()
    .setColor("GREEN")
    .setDescription(`


 <@&${kayıttolü}> **Sunucuya Yeni Bir Üye Geldi!**


<a:714606187261198450:745657121080737915>  ${member} ${mesaj}

<a:703599158497509386:745655950429651126>  Bu Kullanıcıyla Birlikte **${member.guild.memberCount}** Kişi Olduk!

<a:722342988130418758:745655956771176498>   Kullanıcı ID >  **\`${member.user.id}\`**

<a:742514248223162388:745656232211382273>  Güvenlik Durumu;
      ${kontrol}

`)
      .setImage(mesajresim)
.setThumbnail(member.user.avatarURL);
  client.channels.get(kanal).send(giris);
});

//len silme ayıb ayıb püü sana





client.on("message", async (alp) => {
if(alp.author.bot === true) return

 if(alp.content.length >= 10) {
  db.add(`msayarfazla_${alp.guild.id}_${alp.author.id}`, 1)
 } else {
     db.add(`msayaraz_${alp.guild.id}_${alp.author.id}`, 1)

 }
})




setInterval(async() => {
    client.guilds.forEach(async guild => {
    let mid = await db.fetch(`cfxmid${guild.id}`)
    let channel = await db.fetch(`cfxcn${guild.id}`)
    if(!mid) return;
    if(!channel) return;
    guild.channels.get(`${channel}`).fetchMessage(mid).then(async m => {
    let time = await db.fetch(`cfxcekilis${guild.id}`)
    if(!time) return;
    let sures = await db.fetch(`cfxsure${guild.id}`)
    let cont = await db.fetch(`cfxm${guild.id}`)
    let timing = Date.now() - time
    let aracheck = new Discord.RichEmbed()
    .setFooter(`© ${client.guilds.get(guild.id).name}`)
    .setAuthor('Çekiliş ödülü:' + ' [ ' +cont+ ' ]')
    .setColor("ff0000")
    .setDescription(`**Çekilişe kalan**:` + ` \`${moment.duration(sures - timing).format(`DD **[Gün,]** HH **[Saat,]** mm **[Dakika,]** ss **[Saniye]**`)}\` ` )
    m.edit(aracheck)
    await m.react('🎉');

    if(timing >= sures) {
      let users = await db.fetch(`cfxcdb.${guild.id}`)
      let list = users.filter(u => u);
      let joins = list[Math.floor(Math.random() * list.length)]
      if (joins == undefined) joins = `Çekilişe kimse katılmadı!`
      if(joins != `Çekilişe kimse katılmadı!` && joins != undefined) {
      let kazananlar = new Discord.RichEmbed()
      .addField('** **', '**Kazananlar:** \n'+ guild.members.get(joins))
      .setDescription(`**Mesaja Gitmek İçin; [Tıkla!](https://discordapp.com/channels/${guild.id}/${channel}/${mid})**`)
      .setAuthor('Çekiliş ödülü:' + ' [ ' +cont+ ' ]')
      .setFooter(`© ${client.guilds.get(guild.id).name}`)
      .setColor("ff0000")

      guild.channels.get(channel).send(kazananlar)
      }
      let endEmbed = new Discord.RichEmbed()
      .setFooter(`${client.guilds.get(guild.id).name}`)
      .setColor("ff0000")
      .setAuthor('Çekiliş ödülü:' + ' [ ' +cont+ ' ]')
      .setDescription('**Kazananlar**: \n'+ guild.members.get(joins))
      m.edit(endEmbed)
    db.delete(`cfxcekilis${guild.id}`)

    }
  })
  })
  }, 5000)

client.on('raw', async event => {
    if(event.t === 'MESSAGE_REACTION_ADD' || event.t === 'MESSAGE_REACTION_REMOVE'){
        client.guilds.forEach(async guild => {
            let channel_id = await db.fetch(`cfxcn${guild.id}`)
            let mid = await db.fetch(`cfxmid${guild.id}`)
            let channel = guild.channels.find(x => x.id === channel_id)
            if(!mid) return;
            if(!channel) return;
            let message = channel.fetchMessage(mid).then(async msg => {
            let user = msg.guild.members.get(event.d.user_id)
            if(user.id != client.user.id){
                var objmember = msg.guild.members.get(user.id);
                if(objmember.user.bot) return;
                if(event.t === 'MESSAGE_REACTION_ADD'){
                let cfxcdb = await db.fetch(`cfxcdb.${guild.id}`)
                if(cfxcdb == null) db.push(`cfxcdb.${guild.id}`, `${user.id}`)
                if(cfxcdb.includes(user.id)) return;
                db.push(`cfxcdb.${guild.id}`, `${user.id}`)
                }
            }
            })
        })
    }
})


client.on('guildMemberAdd', async member => {
  let ozelhosgeldin = await db.fetch(`ozelhosgeldin_${member.guild.id}`)
  if (!ozelhosgeldin) return;
  member.send(ozelhosgeldin ? ozelhosgeldin.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})

 client.on('guildMemberRemove', async member => {
  let ozelgorusuruz = await db.fetch(`ozelgorusuruz_${member.guild.id}`)
  if (!ozelgorusuruz) return;
  member.send(ozelgorusuruz ? ozelgorusuruz.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})







   //........MESAJ ISTATISTIK........//

client.on("message", async message => {
  if (message.author.bot === false) {
    await db.add(`puan_${message.guild.id}_${message.author.id}`, 1);

    await db.add(`puanc_${message.guild.id}_${message.channel.id}`, 1);

    await db.add(`puanuc_${message.author.id}_${message.channel.id}`, 1);
  }
});

//........SES ISTATISTIK........//

client.on("voiceStateUpdate", async (oldMember, newMember) => {
  if (!oldMember.user.bot) {
    let oldChannel = oldMember.voiceChannel;

    let newChannel = newMember.voiceChannel;

    if (oldChannel === undefined && newChannel !== undefined) {
      db.set(`girisses.${oldMember.user.id}.${oldMember.guild.id}`, Date.now());
    } else if (newChannel === undefined) {
      let ilksessüre = await db.fetch(
        `girisses.${oldMember.user.id}.${oldMember.guild.id}`
      );
      let time = Date.now() - ilksessüre;
      await db.add(
        "voicei_" + oldMember.guild.id + "_" + oldMember.user.id,
        time
      );

      await db.add(
        "voicec_" + oldMember.guild.id + "_" + oldMember.voiceChannelID,
        time
      );

      await db.add(
        "voiceuc_" + oldMember.user.id + "_" + oldMember.voiceChannelID,

        time
      );
    }
  }
});




client.on("guildCreate", async guild => {


   let alp = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle(`${guild.name} Adlı Sunucuya Eklendim`)
      .setDescription(`
      **Sunucu Adı:** ${guild.name}
      **Sunucu Kimliği/ID:** ${guild.id}
      **Sunucu Sahibi:** ${guild.owner.user.username}#${guild.owner.user.discriminator}
      **Sunucu Sahibi ID:** ${guild.owner.user.id}
      **Sunucudaki Toplam Kullanıcı Sayısı:** ${guild.members.size}
      **Sunucudaki Bot Sayısı:** ${guild.members.filter(m => m.user.bot).size}
      `)



client.channels.get("745660453837078608").send(alp)
  });





client.on("guildDelete", async guild => {


  let hüso = new Discord.RichEmbed()
  .setColor("RED")
.setTitle(`${guild.name} Adlı Sunucudan Atıldım`)
.setDescription(`
**Sunucu Adı:** ${guild.name}
**Sunucu Kimliği/ID:** ${guild.id}
**Sunucu Sahibi:** ${guild.owner.user.username}#${guild.owner.user.discriminator}
**Sunucu Sahibi ID:** ${guild.owner.user.id}
**Sunucudaki Toplam Kullanıcı Sayısı:** ${guild.members.size}
**Sunucudaki Bot Sayısı:** ${guild.members.filter(m => m.user.bot).size}
`)

client.channels.get("745660453837078608").send(hüso)


});




client.on("guildCreate", async guild => {
  let yaprk = guild.channels.random();

 yaprk.send('<a:740200140341510245:744262743724392518> | **Beni Eklediğiniz İçin Teşekkürler!** | <a:740200140341510245:744262743724392518> \n\n `=>` **!yardım** yazarak komutlarıma erişebilirsiniz!')

})

client.on('voiceStateUpdate', async(oldMember, newMember) => {
  if (!db.fetch(`geciciKanal_${newMember.guild.id}`))
  if (!db.fetch(`geciciKategori_${newMember.guild.id}`)) return;
  let Old = oldMember;
  let newUserChannel = newMember.voiceChannel
  let oldUserChannel = oldMember.voiceChannel
 if(newMember.user.bot) return;
    if(oldMember.user.bot) return;

  if (newMember.voiceChannelID == db.fetch(`geciciKanal_${newMember.guild.id}`)) {
    newMember.guild.createChannel("🌙・ " + newMember.user.username.replace(/[^a-zA-Z ]/g, ""), "voice").then(async(ü) => {
   require("request")({
    url: `https://discordapp.com/api/v7/channels/${ü.id}`,
    method: "PATCH",
    json: {
        user_limit: "50"
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})
      ü.setParent(db.fetch(`geciciKategori_${newMember.guild.id}`))
        newMember.setVoiceChannel(ü.id)
      db.set(`geciciKanalK_${newMember.id}`, ü.id)
    })

  }

   if (oldUserChannel) {
        Old.guild.channels.forEach(channels => {
  if (channels.id == db.fetch(`geciciKanal_${oldMember.guild.id}`)) return;
          if(channels.parentID == db.fetch(`geciciKategori_${oldMember.guild.id}`)) {
                        if(channels.id == db.fetch(`geciciKanalK_${oldMember.id}`)) {
                          setTimeout(() => {
                          if (!oldMember.voiceChannel.id == db.fetch(`geciciKanalK_${oldMember.id}`)) return;
                          if(oldMember.voiceChannel.members.size == 0) {

                              db.delete(`geciciKanalK_${oldMember.id}`)
                              return channels.delete()
                        }

                          }, 5000)

                    }
                }
            });
                   }
});

client.on("guildMemberAdd", async member => {
  let sayac = db.get(`sayac.${member.guild.id}`);
  if (!sayac) return;
  let kanal = client.channels.get(sayac.kanal);
  if (!kanal) return db.delete(`sayac.${member.guild.id}`);
  kanal.send(`<a:740263758265319494:745657149828497449>  ${member.user.tag} sunucuya katıldı! Sunucu şu an **${member.guild.memberCount}** kişi. **${sayac.sayi}** kişi olmamıza **${sayac.sayi - member.guild.memberCount}** kişi kaldı!`);

  if (member.guild.memberCount >= sayac.sayi) {
    kanal.send(`Sunucu, sayaç hedefine ulaştı!`);
    db.delete(`sayac.${member.guild.id}`);
  };
});

client.on("guildMemberRemove", async member => {
  let sayac = db.get(`sayac.${member.guild.id}`);
  if (!sayac) return;
  let kanal = client.channels.get(sayac.kanal);
  if (!kanal) return db.delete(`sayac.${member.guild.id}`);
  kanal.send(`<a:740263761109319782:745657154060550235>  ${member.user.tag} sunucudan ayrıldı! Sunucu şu an **${member.guild.memberCount}** kişi. **${sayac.sayi}** kişi olmamıza **${sayac.sayi - member.guild.memberCount}** kişi kaldı!`);
});


client.on("guildMemberAdd", async(member) => {
  let otorol = await db.fetch(`otorol_${member.guild.id}`)
  let otorolkanal = await db.fetch(`otorolkanal_${member.guild.id}`)
  if(!otorol) return
  await(member.addRole(member.guild.roles.get(otorol).id))
  if(otorolkanal && client.channels.has(otorolkanal)) {
    await client.channels.get(otorolkanal).send(`<a:728514882814738473:745657153880064061>    \`${member.user.tag}\`  **Sunucuya Katıldı!  \`${member.guild.roles.get(otorol).name}\`  rolü başarıyla verildi.** <:737642351375286355:745655988526383125>  **Sunucu şu anda**  \`${member.guild.members.size}\`  **kişi!**`)
  };
});




client.on("message", message => {
  if(message.content != "!nuke") return;
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("Kanalı sıfırladım :)");
  message.channel.clone({ position: message.channel.rawPosition });
  message.channel.delete();
})

client.on('guildMemberAdd', async member => {
  let tag = db.get(`alp.yasaklıtag.${member.guild.id}`)
  if(!tag || tag.size == 0) return;
  tag.some(x => {
  if(!member.user.username.includes(x)) return;
  member.ban(`Yasaklı tag'a sahip`)
  })
  })



  client.on("message", async message => {
    if(message.author.bot) return;
    var spl = message.content.split(" ");
    if(spl[0] === "!emoji-rol-ayarla") {
    var args = spl.slice(1);
    var msg, emoji, rol, ee = "";
    try {
      msg = await message.channel.fetchMessage(args[0])
      emoji = args[1]
      rol = message.guild.roles.get(args[2]) || message.mentions.roles.first();
      await msg.react(emoji)
      if(!rol) throw new Error("Düzgün bir rol yaz")
    } catch(e) {
      if(!e) return;
      e = (""+e).split("Error:")[1]
      if(e.includes("Cannot read property") || e.includes("Invalid Form Body")) {
        message.channel.send(`<a:727895115112251392:745656711083327589>  | Mesaj id hatalı!`)
      } else if(e.includes("Emoji")) {
        message.channel.send(`<a:727895115112251392:745656711083327589>  | Girdiğiniz emoji mesaja eklenemiyor!`)
      } else if(e.includes("ROLÜ")) {
        message.channel.send(`<a:727895115112251392:745656711083327589>  | Girdiğiniz rol geçersiz!`)
      }
      ee = e
    }
     if(ee) return;
     message.channel.send(`:white_check_mark: | Emoji rol, **${msg.content}** içerikli mesaja atandı!`)
     db.push(`tepkirol.${message.guild.id}`, {
       kanal: msg.channel.id,
       rol: rol.id,
       mesaj: msg.id,
       emoji: emoji
     })
    } else if(spl[0] === "!emoji-rol-log") {
      var args = spl.slice(1)
      var chan = message.guild.channels.get(args[0]) || message.mentions.channels.first()
      if(!chan) return message.channel.send(`:warning: | Kanal etiketle veya id gir`)
      db.set(`tepkirolkanal.${message.guild.id}`, chan.id)
      message.channel.send(":white_check_mark: | Tepkirol log kanalı "+ chan+ " olarak ayarlandı!")
    }
  })

  client.on("raw", async event => {
    if(event.t === "MESSAGE_REACTION_ADD") {
      var get = db.get(`tepkirol.${event.d.guild_id}`)
      if(!get) return;
      var rol = get.find(a => a.emoji === event.d.emoji.name && a.mesaj === event.d.message_id)
      if(!rol) return;
      rol = rol.rol
      var member = await client.guilds.get(event.d.guild_id).fetchMember(event.d.user_id)
      member.addRole(rol);
      var kanal = db.get(`tepkirolkanal.${event.d.guild_id}`)
      if(kanal) {
        var kanal = client.channels.get(kanal)
        kanal.send(member + " kullanıcısına, **" + kanal.guild.roles.get(rol).name + "** adlı rol verildi! <:onay:729390621193666680>")
      }
    } else if(event.t === "MESSAGE_REACTION_REMOVE") {
      var get = db.get(`tepkirol.${event.d.guild_id}`)
      if(!get) return;
      var rol = get.find(a => a.emoji === event.d.emoji.name && a.mesaj === event.d.message_id)
      if(!rol) return;
      rol = rol.rol
      var member = await client.guilds.get(event.d.guild_id).fetchMember(event.d.user_id)
      member.removeRole(rol);
      var kanal = db.get(`tepkirolkanal.${event.d.guild_id}`)
      if(kanal) {
        var kanal = client.channels.get(kanal)
        kanal.send(member + " kullanıcısından, **" + kanal.guild.roles.get(rol).name + "** adlı rol alındı! <:onay:729390621193666680>")
      }
    }
  })











  client.on("ready", async () => {

    client.appInfo = await client.fetchApplication();
    setInterval( async () => {
      client.appInfo = await client.fetchApplication();
    }, 60000);

   console.log(`${chalk.green(client.user.username)}${chalk.red(",")} ${chalk.blue(client.guilds.size)} ${chalk.yellow("Sunucu'ya")} ${chalk.red("ve")} ${chalk.blue(client.users.size.toLocaleString())} ${chalk.yellow("Kullanıcı'ya")} ${chalk.red("hizmet veriyor!")}`)
    client.user.setStatus("idle");
         let embed = new Discord.RichEmbed()
  .setTitle(`♛**${client.user.username} Bot Durum**♛`)
  .setDescription(` ➥ **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ``}** kullanıcıya hizmet veriyorum. \n ➥ **${client.guilds.size}** sunucuya hizmet veriyorum. \n ➥ **${client.channels.size}** adet kanala hizmet veriyorum. \n ➥ pingim **${client.ping}**. `)
  .setTimestamp()
  .setThumbnail(client.user.avatarURL)
  .setColor('40bcdb')
  .setFooter(`${client.user.username} `, client.user.avatarURL)
   client.channels.get("745660299830493311").send(embed);
  })





client.login(ayarlar.token);
