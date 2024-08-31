const { Client, Events } = require("discord.js");

let tsukuCount = 0;

const client = new Client({
    intents: 53608447
});

client.on(Events.ClientReady, async () => {
    console.log(`Conectado como ${client.user.username}`);
});

client.on(Events.MessageCreate, async (message) => {
    if (message.author.bot) return; 
    if (!message.content.startsWith("!")) return; 

    const args = message.content.slice(1).split(' ')[0].toLowerCase(); 

    const roleNameId = "833519995740094471"; 
    const role = message.guild.roles.cache.get(roleNameId);


    if (args === "flip") {
        const outcome = Math.random() < 0.5 ? 'cara' : 'cruz';
        message.reply(`¡Ha salido ${outcome}!`);
    }

    if (args === "hola") {
        message.reply("¡Hola!");
    }
    
    if (args === "tsuku") {
        message.reply("¡Tsukuyomi es puto!");
    }

    if (args === "s") {
        if (role) {
            message.reply(`¡Vamos a jugar! ${role}`);
        } else {
            message.reply(`No se encontró ningún rol llamado ${roleNameId}.`);
        }
    }

    if (args === "s?") {
        const poll = message.content.split(' ').slice(1).join(' ');

        if (role) {
            message.reply(`**¿Jugamos?** ${role}`);

        } else {
            message.reply(`No se encontró ningún rol llamado ${roleName}.`);
        }
    }

    if (args === "chiste") {
        const chistes = [
            "¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.",
            "¿Cómo se dice pañuelo en japonés? Saka-moko.",
            "¿Qué hace una abeja en el gimnasio? ¡Zum-ba!",
            "¿Qué le dice una iguana a su hermana gemela? Somos iguanitas.",
            "¿Por qué las focas miran siempre hacia arriba? ¡Porque ahí están los focos!"
        ];

        const chisteAleatorio = chistes[Math.floor(Math.random() * chistes.length)];
        message.reply(chisteAleatorio);
    }

    if (args === "gei") {
        const user = message.mentions.users.first() || message.author;
        message.reply("¡Eres un gei! " + user.displayAvatarURL({ dynamic: true }));
    }

    
    if (args === "logout") {
        message.reply("Apagando el bot...");
        client.destroy(); 
    }
});

client.on(Events.GuildMemberAdd, async (member) => {
    const welcomeId = "639689591951196191";
    const channel = await client.channels.fetch(welcomeId);

    channel.send(`¡Bienvenido al servidor, ${member}!`);
})


client.login("MTI3OTQ4MjQ2MzUwNDMwNjI0OQ.G5XQ8P.lARz2NdLZCYxaY1acihpPlujDafUv01fWpxwIU");
