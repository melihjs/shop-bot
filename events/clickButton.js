const { MessageEmbed } = require('discord.js');
const { MessageButton } = require('discord-buttons');

module.exports = {
    name: "clickButton",
     /* event run */
    async run(client, button) {
        button.reply.defer();
        await button.clicker.fetch();
        if (button.id == "shopTicket") {
            var userID = button.clicker.user.id;
            var ticketName = `shop-${userID}`;
            try {
                button.message.guild.channels.create(ticketName, {
                    type: 'text',
                    parent: '871450697994993784',
                    permissionOverwrites: [
                        {
                        id: button.message.guild.id,
                        deny: ['VIEW_CHANNEL']
                        },
                        {
                        id: button.clicker.user.id,
                        allow: ['VIEW_CHANNEL', 'SEND_MESSAGES']
                        }
                    ]
                }).then(async (channel) => {
                    var button1 = new MessageButton()
                    .setStyle('blurple')
                    .setLabel('Close the shop!')
                    .setID('shopClose');
                    var embed1 = new MessageEmbed()
                    .setTitle(button.message.guild.name)
                    .setDescription(`:star2: If you want the close shop, click button!`)
                    .setColor('BLURPLE')
                    .setTimestamp()
                    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }));
                    return channel.send({ embed: embed1, button: button1 });
                });
            } catch (error) {
                throw new Error(error);
            } 
        } else if (button.id == "shopClose") {
            var userID = button.clicker.user.id;
            var ticketName = `shop-${userID}`;
            var channel = button.message.guild.channels.cache.find(ch => ch.name == ticketName);
            channel.delete();
        }
    }
}