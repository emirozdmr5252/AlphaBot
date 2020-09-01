const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const Discord = require('discord.js');
module.exports = async message => {
let alp = db.fetch(`alp.botbakim`)
  let client = message.client;
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(' ')[0].slice(prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.elevation(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    client.channels.get("741953153536098315").send(
      new Discord.RichEmbed()
        .setTitle("BIR KOMUT KULLANILDI")
        .setColor("GREEN")
        .setThumbnail(client.user.avatarURL)
        .setFooter(client.user.username)
        .addField("Kullanılan Komut", "`" + cmd.help.name + "`")
        .addField("Kullanan Kişi", "`" + message.author.tag + "`")
    );
  if(message.author.id !== ayarlar.sahip && alp) return message.channel.send(`Bot şuan bakımdadır, lütfen sahibim açana kadar beklemede kalınız.`)
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
};
