const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

 \`\`\`Jail Komutları.\`\`\`

<a:727895115112251392:744262370519679099>  **!jail-yetkili-rol** | Jail Yetkili Rolünü Ayarlarsınız. ✨

<a:727895115112251392:744262370519679099>  **!jail-cezalı-rol** | Jail Rolünü Ayarlarsınız. ✨

<a:727895115112251392:744262370519679099>  **!jail-alınacak-rol** | Jail Alınacak Rolü Ayarlarsınız. ✨

<a:727895115112251392:744262370519679099>  **!jail-log** | Jail Logunu Ayarlarsınız. ✨

<a:727895115112251392:744262370519679099>  **!jail at/çıkar** | Kullanıcıyı Jaile Atıp Çıkartırsınız. ✨

\`\`\`Yasaklı Tag Komutları.\`\`\`

<a:739552008196980836:744262749068066947>  **!yasaklı-tag** | Yasaklı Tag Eklemenize Yardımcı Olur. ✨

<a:739552008196980836:744262749068066947>  **!yasaklı-tag sil** | Yasaklı Tag Silmenize Yardımcı Olur. ✨

<a:739552008196980836:744262749068066947>  **!yasaklı-tag liste** | Yasaklı Tag Listesini Verir. ✨

\`\`\`Emoji Rol Komutları.\`\`\`

<a:xx:744262511620128768><a:image0:744262606767915109><a:ssq:744262511540437112>  **!emoji-rol-ayarla** | Emojiye Tıklayınca Rol Verme Sistemini Ayarlarsınız. ✨

<a:xx:744262511620128768><a:image0:744262606767915109><a:ssq:744262511540437112>  **!emoji-rol-log** | Emojiye Tıklayınca Loga Mesaj Gönderir (isteğe bağlı). ✨

<a:xx:744262511620128768><a:image0:744262606767915109><a:ssq:744262511540437112>  **NOT** | !emoji-rol-ayarla Kodunu Kullanırken Mesaj İd Kullandığınız Kanala Yapınız. Sunucunuzda Olan Bir Emojiyi Ekleyemessiniz Discordun Kendi Emojilerini Kullanabilirsiniz. ✨

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
name: 'sistem2',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
