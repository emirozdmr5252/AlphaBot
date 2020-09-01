const Discord = require('discord.js');
exports.run = async(client, message, args) => {

const alp = new Discord.RichEmbed()
   .addField(`Sunucun İçin Botmu Arıyorsun? İşte Ozaman **Mordecai** Sana Göre\n\n**Bot Davet Linki**        `, `[Davet Linkim](https://discord.com/oauth2/authorize?client_id=744288013969916065&scope=bot&permissions=805829694) `)
   .addField(`Yardımımamı İhtiyacın Var Ne Duruyorsun Destek Sunucumuza Gel\n\n**Destek Sunucumuz Linki**        `, `[Destek Sunucusu](https://discord.gg/CFa5kQ5) `)
   .setImage(`https://cdn.discordapp.com/attachments/735070039677468785/740496886384820284/giphy-6.gif`)
message.channel.send(alp);

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bot-davet'],
    permLevel: 0
}
exports.help = {
    name: 'davet',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}
