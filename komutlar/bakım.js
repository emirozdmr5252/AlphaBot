const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
if (!message.author.id == "716217809599856671") return message.reply('Dostum Bu Komudu Kullanamazsın.')
let alp = db.fetch(`alp.botbakim`)
if(alp) {
message.channel.send(`Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`alp.botbakim`)
};

if(!alp) {
message.channel.send(`Botu başarıyla bakıma aldınız, bakımdan çıkarmak için aynı mesaj yazınız.`)
db.set(`alp.botbakim`, 'aktif')
}};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [`bakim`],
permLevel: 4
};

exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};