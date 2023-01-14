const Discord = require(`discord.js`);

class ClientCommands extends Discord.Collection {};

class ClientEvents extends Discord.Collection {};

module.exports = {
    ClientCommands,
    ClientEvents
};