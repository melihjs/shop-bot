const { Client, Collection } = require('discord.js');
const disbut = require('discord-buttons');
const fs = require('fs');
const client = new Client();
client.__command = new Collection();
client.__event = new Collection();
disbut(client);

fs.readdir('./commands/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var command = require(`./commands/${file}`);
        client.__command.set(command.name, command);
    });
});

fs.readdir('./events/', async (err, files) => {
    if (err) throw new Error(err);
    files.forEach(async (file) => {
        var event = require(`./events/${file}`);
        client.__event.set(event.name, event);
    });
});

client.on('ready', async () => client.__event.get('ready').run(client));
client.on('message', async (message) => client.__event.get('message').run(client, message));
client.on('clickButton', async (button) => client.__event.get('clickButton').run(client, button));

client.login(''); // write a token