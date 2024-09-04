const { Client, Events } = require("discord.js");
const Discord = require("discord.js");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");
const { REST } = require('@discordjs/rest'); 
const { Routes } = require('discord.js'); 
const { EmbedBuilder } = require('discord.js');

const client = new Client({
    intents: 53608447
});

//Cargar comandos

client.commands = new Discord.Collection();

fs.readdirSync("./commands").forEach((file) => {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
});


//Registrar Comandos

const rest = new REST({ version: '10' }).setToken(config.CLIENT_TOKEN); 
(async () => {
    try {
        console.log("Registrando comandos...");
        await rest.put(
            Routes.applicationGuildCommands(config.client_ID, config.guild_ID), 
            {
                body: client.commands.map((command) => command.data.toJSON())
            }
        );
        console.log("Comandos registrados correctamente.");
    } catch (error) {
        console.error(error);
        console.log("Error al registrar comandos.");
    }
})();



client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}`);
});


client.on("interactionCreate", async (interaction) => {
    if(interaction.isChatInputCommand()){
        const command = client.commands.get(interaction.commandName);

        command.execute(interaction).catch(console.error);

    }else{

    }
    
});


client.on('guildMemberAdd', async (member) => {
    const welcomeChannelId = config.WELCOME_CHANNEL_ID;
    const channel = member.guild.channels.cache.get(welcomeChannelId);

    if (channel) {
        const embed = new EmbedBuilder()
            .setTitle('¡Bienvenido!')
            .setDescription(`Hola ${member.user} ¡Disfruta tu estancia!`)
            .setColor(0x00AE86)
            .setThumbnail(member.user.avatarURL());
            

        channel.send({ embeds: [embed] });
    }
});

client.login(config.CLIENT_TOKEN);
