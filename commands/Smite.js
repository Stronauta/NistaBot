const { SlashCommandBuilder } = require('@discordjs/builders');

const roleNameId = "833519995740094471";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('smite')
        .setDescription('Invoca a los nista a jugar Smite'),

    async execute(interaction) {
        const role = interaction.guild.roles.cache.get(roleNameId);
        if (role) {
            await interaction.reply({
                content: `¡Vamos a jugar! <@&${role.id}>`,
                allowedMentions: { roles: [role.id] } // Aquí se asegura que solo se permita mencionar el rol específico
            });
        } else {
            await interaction.reply(`No se encontró ningún rol con el ID ${roleNameId}.`);
        }
    }
};
