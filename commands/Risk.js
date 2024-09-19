const { SlashCommandBuilder } = require('@discordjs/builders');

const roleNameId = "1285306396383903817";

module.exports = {
    data: new SlashCommandBuilder()
        .setName('risk_of_rain')
        .setDescription('Invoca a los nista a jugar Risk of Rain 2'),

    async execute(interaction) {
        const role = interaction.guild.roles.cache.get(roleNameId);
        if (role) {
            await interaction.reply({
                content: `¡Vamos a jugar! <@&${role.id}>`,
                allowedMentions: { roles: [role.id] } 
            });
        } else {
            await interaction.reply(`No se encontró ningún rol con el ID ${roleNameId}.`);
        }
    }
};
