const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

\`\`\`Ban Komutları.\`\`\`

<:737642353308860458:744262377629024257> **!banlog** | Ban Atılınca Mesaj Gidecek Kanalı Ayarlarsınız. ✨

<:737642353308860458:744262377629024257> **!banrol** | Ban Atabilecek Rolü Ayarlarsınız. ✨

<:737642353308860458:744262377629024257> **!banlimit** | Ban Limidini Ayarlarsınız. ✨

<:737642353308860458:744262377629024257> **!banlimitsıfırla** | Ban Limidini Sıfırlarsınız . ✨

<:737642353308860458:744262377629024257> **!ban** | Kullanıcıya Ban Atarsınız. ✨

<:737642353308860458:744262377629024257> **!unban** | Ban Atılan Kişinin Banını Kaldırırsınız. ✨

\`\`\`Tag Komutları.\`\`\`

<:737642353791205386:744534023954497577>  **!tag ayarla** | Tagınızı Ayarlarsınız. ✨

<:737642353791205386:744534023954497577>  **!tag sıfırla** | Tagınızı Sıfırlarsınız. ✨

<:737642351375286355:744262384151166986>  **!ototag** | Ototag Ayarlarsınız Sunucuya Gelenlere Belirttiğiniz Tagı Verir. ✨

<:737642351375286355:744262384151166986>  **!ototag-kapat** | Ototag Sistemini Kapatır. ✨

\`\`\`Mute Komutları.\`\`\`

<:740609569713160356:744534018946760715>  **!mute-yetkili-rol** | Mute Yetkili Rolünü Ayarlarsınız. ✨

<:740609569713160356:744534018946760715>  **!mute-log** | Mute Logunu Ayarlarsınız. ✨

<:740609569713160356:744534018946760715>  **!mute** | Mute Atarsınız. ✨

\`\`\`Diğer Komutlar.\`\`\`

<a:738281101872594957:744534041960775750>  **!çekiliş** | Çekiliş Yaparsınız Detaylı Bilgi İçin Komutu Kullanınız. ✨

<a:738281101872594957:744534041960775750>  **!sesli-çekiliş** | Ses Kanalında Çekiliş Yaparsınız. ✨

<a:703599158497509386:744534019365929092>  **!snipe** | En Son Silinen Mesaja Bakarsınız. ✨

<a:707714971907391558:744262723696852993>  **!rank** | Mesaj ve Ses İstatistiğinize Bakarsınız. ✨

<a:707714971907391558:744262723696852993>  **!top** | Toplam Mesaj ve Ses İstatistiğine Bakarsınız. ✨

<a:694563054108803122:744262378710892594>  **!sayaç #kanal [sayı]/sıfırla** | Ayarladığınız Kanala Gelen Giden Üyeleri Atar. ✨

<a:qiqachu:744262731435343913> **!otorol** | Yazarak Çok Detaylı Bir Bilgi Alabilirsiniz. ✨

`)
   .addField(` **Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)
   message.channel.send(embed)





}
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: [], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'sistem',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
