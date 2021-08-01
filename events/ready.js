module.exports = {
    name: "ready",
     /* event run */
    async run(client) {
        console.log('Shop bot is ready!');
        client.user.setPresence({
            activity: {
                name: "Discord.js buttons with shop bot!",
                type: "COMPETING"
            },
            status: "idle"
        })
    }
}