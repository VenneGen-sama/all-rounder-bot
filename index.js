const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
const { token } = require("./config.json");
const discord = require("discord.js"); 
const client = new discord.Client({
  disableEveryone: true 
});

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.login(token);