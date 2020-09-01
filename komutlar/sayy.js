const Discord = require('discord.js');
const db = require("quick.db")


String.prototype.replaceA = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
}
const huso = function(sayi) {
  let alp = sayi.toString()
    .replaceA('0', 'zero')
    .replaceA('1', 'one')
    .replaceA('2', 'two')
    .replaceA('3', 'three')
    .replaceA('4', 'four')
    .replaceA('5', 'five')
    .replaceA('6', 'six')
    .replaceA('7', 'seven')
    .replaceA('8', 'eight')
    .replaceA('9', 'nine')

  alp = alp
    .replaceA("zero", "<a:0_:745911017820651520> ")
    .replaceA("one", "<:1_:745910381095944202>")
    .replaceA("two", "<a:2_:745910912459866142>")
    .replaceA("three", "<a:3_:745910924082413569>")
    .replaceA("four", '<a:4_:745910930025742406>')
    .replaceA("five", '<a:5_:745910934157000724> ')
    .replaceA("six", '<a:6_:745910934618505288> ')
    .replaceA("seven", '<a:7_:745910935151050802> ')
    .replaceA("eight", '<a:8_:745910934710779955>')
    .replaceA("nine", '<a:9_:745910934798729246> ')

  return alp
}


exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
  let count = 0;
  let member = message.guild.members.size;
  let alpandhuso = await db.fetch(`tag_${message.guild.id}`)
  let tag = message.guild.members.filter(r=>r.user.username.includes(alpandhuso)).size
  let çevrimiçi = message.guild.members.filter(m => m.presence.status !== "offline").size
  for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;




     const husocuk = new Discord.RichEmbed()
  .setColor("BLACK")
 .setDescription(`<a:gifstars:736711480900059186> **Sunucuda** ${huso(member)} **kişi bulunmaktadır.**\n\n<a:online:740200140341510245> **Sunucuda** ${huso(çevrimiçi)} **aktif kişi bulunmaktadır.**\n\n<a:yldz:736590874150043658> **Ses kanallarında** ${huso(count)} **kişi bulunmaktadır.**\n\n<a:cekilis:738281101872594957> **Taglı üyede** ${huso(tag)} **kişi bulunmaktadır.** \n\n<a:heh:740200937729032213> **Sunucu Tag: ${alpandhuso}**  `)
 .setTimestamp()
        .setFooter(message.author.tag ,message.author.avatarURL);
  message.channel.sendEmbed(husocuk)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};
exports.help = {
  name: 'say',
  description: '',
  usage: ''
};
