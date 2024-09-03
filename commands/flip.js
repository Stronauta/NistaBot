const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('flip') 
        .setDescription('Cara o Cruz'),

    async execute(interaction) {
        const response = Math.random() < 0.5 ? 'cara' : 'cruz';
        await interaction.reply(`¡Ha salido ${response}!`);
    }
};
