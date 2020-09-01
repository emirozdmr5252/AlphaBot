const Discord = require('discord.js');
const moment = require('moment');
const os = require('os');
const config = require('../ayarlar.json')
let cpuStat = require("cpu-stat");
const { stripIndents } = require('common-tags');
require('moment-duration-format');

exports.run = async (bot, message, args) => {

  const db = require('quick.db');




  var osType = await os.type();

        if (osType === 'Darwin') osType = 'macOS'
        else if (osType === 'Windows') osType = 'Windows'
        else osType = os.type();

    //--------------------------//

    var osBit = await os.arch();

    if (osBit === 'x64') osBit = '64 Bit'
    else if (osBit === 'x82') osBit = '32 Bit'
    else osBit = os.arch();

    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(bot.uptime).format('D [gün], H [saat], m [dakika], s [saniye]');

      setTimeout(() => {
        const s = new Discord.RichEmbed()
        .setColor(0XC51E39).setFooter(bot.user.username, bot.user.avatarURL)
        .setTitle(`Bot İstatistikleri`)
        .addField('Gecikme Süreleri', "Mesaj Gecikmesi: {ping1} milisaniye \nBot Gecikmesi: {ping2} milisaniye".replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", bot.ping), true)
        .addField('Çalışma Süresi', `${duration}`, true)
        .addField('Genel Veriler', stripIndents`
        **Kullanıcı Sayısı:**  ${bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}
        **Sunucu Sayısı:** ${bot.guilds.size.toLocaleString()}
        **Kanal Sayısı:** ${bot.channels.size.toLocaleString()}
        **Komut Sayısı: ** ${bot.commands.size}
        `, true)
        .addField('Bot Bilgileri', stripIndents`
        **Bot Kullanıcı Adı: **${bot.user.tag}
        **Bot Sahibi:** <@630476128804536397> <@735168789188182150>
        **ÖN-EK:** \`${config.prefix}\`
        `, true)
        .addField('Kullanılan Bellek', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024).toLocaleString()} MB`, true)
        .addField('İşletim Sistemi', `${osType} ${osBit}`, true)

        .addField('İşlemci', `\`\`\`xl\n${os.cpus().map(i => `${i.model}`)[0]}\n\`\`\``)
        message.channel.send(s)
        message.channel.stopTyping()

        }, 3000)

    });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ti', 'i'],
    permLevel: 0,
  };

  exports.help = {
    name: 'istatistik',
    description: 'Botun İstatistiklerini Gösterir',
    usage: 'istatistik',

  };
