const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

<a:742514248223162388:744536754257920051>  **!kayıt-hoşgeldin-mesajı** | Sunucunuza Biri Katıldığında Gönderilecek Mesajın Kanalını Ayarlarsınız. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-kanal-ayarla** | Kayıt Yapılacak Kanal. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-alınacak-rol** | Kayıt Yapılırken Alınacak Kayıtsız Rolü. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-verilecek-rol** | Kayıt Yapılırken Verilecek Rol. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-isim-ayarla** | Kayıt Yapılırken Olması Gereken Değişkenler. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-log-ayarla** | Kayıt Yapılınca Mesaj Gidecek Yer. ✨

<a:742514248223162388:744536754257920051>  **!kayıt-sistemi-kapat** | Kayıt Ayarlarlarını Sıfırlayın. ✨

\`\`\`Kayıt Olmak İçin Kullanılacaklar.\`\`\`

<a:742514248223162388:744536754257920051>  **!kayıt** | Alınacak Rolleri Kullanıcıdan Alıp Verilecek Rolü Verir İsmini Değiştirir. ✨

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
name: 'kayıt-yardım2',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
