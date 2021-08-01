module.exports = {
    name: "message", 
     /* event run */
    async run (client, message) {
        var prefix = ""; // set a prefix
        if (message.author.bot) return;
        if (message.content.indexOf(prefix) !== 0) return;
        var args = message.content.slice(prefix.length).trim().split(/ +/g);
        var _command = args.shift();
        var cmd = client.__command.get(_command);
        if (!cmd) return;
        cmd.run(client, message, args);
    }
}