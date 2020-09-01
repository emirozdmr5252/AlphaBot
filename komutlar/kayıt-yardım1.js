const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

<:737686442301718548:744262384327196832>  **!hoşgeldin-kanal** | Sunucunuza Biri Katıldığında Gönderilecek Mesajın Kanalını Ayarlarsınız. ✨

<:737686442301718548:744262384327196832>  **!erkek-rol** | Kayıt Yapılırken Verilecek Erkek Rolü. ✨

<:737686442301718548:744262384327196832>  **!kız-rol** | Kayıt Yapılırken Verilecek Kız Rolü. ✨

<:737686442301718548:744262384327196832>  **!kayıtsız-rol** | Kayıt Yapılırken Alınacak Kayıtsız Rolü. ✨

<:737686442301718548:744262384327196832>  **!kayıt-kanal** | Kayıt Kanalını Ayarlarsınız **NOT**: Komudu sadece ayarlanan kanalda kullanabilirsiniz. ✨

<:737686442301718548:744262384327196832>  **!kayıt-yetkilisi** | Kayıt Yapabilecek Rol. ✨

\`\`\`Kayıt Yapmak İçin Kullanılacaklar.\`\`\`

<:737686442301718548:744262384327196832>  **!erkek** | Kişiyi Erkek Olarak Belirleme. ✨

<:737686442301718548:744262384327196832>  **!kız** | Kişiyi Kız Olarak Belirleme. ✨

<:737686442301718548:744262384327196832>  **!admin-istatistik** | Birinin Kaç Kız Kaç Erkek Kayıt Ettiğine Bakarsınız ✨
`)
   .addField(` **Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)
   message.channel.send(embed)





}
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: ["KAYIT-YARDIM"], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'kayıt-yardım',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
