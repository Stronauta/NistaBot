const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('apagar_bot') 
        .setDescription('Apaga el bot. Solo Stro puede usar este comando.'),

    async execute(interaction) {
        const allowedUserId = '493797377744961557'; 
        if (interaction.user.id === allowedUserId) {
            await interaction.reply('Apagando el bot... 🛑');
            process.exit(); 
        } else {
            await interaction.reply('No tienes permiso para usar este comando puto.');
        }
    }
};
