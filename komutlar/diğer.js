const Discord = require('discord.js');
const db = require("quick.db")
const client = new Discord.Client();

exports.run = async(client, message, args) => {


  let user = message.mentions.users.first() || message.author




   const embed = new Discord.RichEmbed()
   .setColor("BLACK")
 .setDescription(`

<a:xx:744262511620128768><a:image0:744262606767915109><a:ssq:744262511540437112> **!emoji-bilgi** | Emojinin Bilgilerini Atar. ✨

<a:730662171247378443:744262508512018482>  **!sil** | İstediğiniz Kadar Mesaj Silersiniz. ✨

<a:730662171247378443:744262508512018482>  **!nuke** | Bir Kanalı Sıfırlarsınız. ✨

<a:742514248223162388:744536754257920051>  **!av/!avatar** | Kullanıcıların Avatarına Erişirsiniz. ✨

<a:742514248223162388:744536754257920051>  **!say** | Bot Sunucunuzun Krokisini Çıkartır. ✨
`)
   .addField(` **Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)
   message.channel.send(embed)





}
exports.conf = {
enabled: true, //Komutun Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
guildOnly: false, //Komutun Sunucu Dışında Aktif Olup Olmamasını Ayarlarsınız! true: Aktif | false: Kapalı
aliases: ["DİĞER"], //Ekstra Komut Anahtarları Gire Bilirsiniz! ["Anahtar-ismi"] Gibi
permLevel: 0 //Kullanım Seviyelerini Ayarlarsınız 0 Herkes Kullana Bilir Demektir!
};

exports.help = {
name: 'diğer',
description: 'Komutun Açıklaması',
usage: 'Komutun Kullanım Şekli'
}
