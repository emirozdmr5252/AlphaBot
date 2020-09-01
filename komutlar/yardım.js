const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();
const preffix = require('../ayarlar.json');


exports.run = async(client, message, args) => {

  let user = message.mentions.users.first() || message.author

  let prefix = await require('quick.db').fetch(`preffix_${message.guild.id}`) || preffix.prefix;

   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`
<a:722342988130418758:744262370448244916> **Başlamadan Önce** | prefix/sıfırla İle Prefixi Değiştirip Sıfırlayabilirsiniz. ✨

<a:703599158497509386:744520332886671360>  **a!kayıt-yardım** | Kayıt Komutlarının Olduğu Yardım Sekmesidir. ✨

<a:BEYAZ_YILDIZ_:744262541609271387>  **a!kayıt-yardım2** | Kayıt Komutlarının Olduğu Yardım Sekmesidir. ✨

<a:736711480900059186:744262743745495101>  **a!sistem** | Sistem Komutlarının Olduğu Yardım Sekmesidir. ✨

<a:707714971907391558:744262723696852993>  **a!sistem2** | Sistem Komutlarının Olduğu Yardım Sekmesidir. ✨

<a:739552008196980836:744262749068066947>  **a!diğer** | Diğer Komutların Olduğu Yarım Sekmesidir. ✨
`)
   .addField(` **Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)

   message.channel.send(embed)





}
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: ["YARDIM","HELP","help"], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'yardım',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
