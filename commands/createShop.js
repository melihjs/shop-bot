const { MessageButton } = require('discord-buttons');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "createShop",
     /* command run */
    async run(client, message, args) {
        var btn = new MessageButton()
        .setStyle('blurple')
        .setLabel('Create the shop!')
        .setID('shopTicket');
        var embed = new MessageEmbed()
        .setTitle(message.guild.name)
        .setDescription(`:star2: If you want the create shop, click button!`)
        .setColor('BLURPLE')
        .setTimestamp()
        .setThumbnail(client.user.displayAvatarURL({ dynamic: true }));
        return message.channel.send({ embed: embed, button: btn });
    }
}