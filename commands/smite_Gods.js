const { SlashCommandBuilder } = require('@discordjs/builders');

const gods = {
    mago: ['Agni', 'Anubis', 'Aphrodite', 'Hel', 'Hera'],
    asesino: ['Arachne', 'Awilix', 'Bakasura', 'Bastet', 'Loki'],
    cazador: ['Ah Muzen Cab', 'Apollo', 'Artemis', 'Chernobog', 'Xbalanque'],
    warrior: ['Achilles', 'Amaterasu', 'Chaac', 'Hercules', 'King Arthur'],
    guardian: ['Ares', 'Athena', 'Bacchus', 'Cabrakan', 'Geb']
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('god_random') 
        .setDescription('Elige un dios aleatorio de Smite para jugar')
        .addStringOption(option => 
            option.setName('clase')
                .setDescription('Clase de dios')
                .setRequired(true)
                .addChoices(
                    { name: 'Mago', value: 'mago' },
                    { name: 'Asesino', value: 'asesino' },
                    { name: 'Cazador', value: 'cazador' },
                    { name: 'Warrior', value: 'warrior' },
                    { name: 'Guardian', value: 'guardian' },
                    { name: 'Cualquiera', value: 'cualquiera' }
                )
        ),

    async execute(interaction) {
        const clase = interaction.options.getString('clase');

        let selectedGods;

        if (clase === 'cualquiera') {
            selectedGods = Object.values(gods).flat();
        } else {
            selectedGods = gods[clase];
        }

        const randomGod = selectedGods[Math.floor(Math.random() * selectedGods.length)];

        await interaction.reply(`¡${interaction.user}, tu dios aleatorio es ${randomGod}!`);
    }
};
