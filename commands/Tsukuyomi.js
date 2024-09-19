const { SlashCommandBuilder } = require('@discordjs/builders'); 
const { PermissionsBitField } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('tsukuyomi')
        .setDescription('Insultas al buen Tsukuyomi'),

        async execute(interaction) {
            await interaction.reply('¡Tsukuyomi es!');
        }
};
