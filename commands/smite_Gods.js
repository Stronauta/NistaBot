const { SlashCommandBuilder } = require('@discordjs/builders');

const gods = {
    mago: [
        'Agni', 'Anubis', 'Aphrodite', 'Hel', 'Hera', 
        'Ah Puch', 'Ao Kuang', 'Baba Yaga', 'Chang\'e', 
        'Chronos', 'Discordia', 'Eset', 'Freya', 
        'Hades', 'He Bo', 'Ix Chel', 'Janus', 
        'Kukulkan', 'Maman Brigitte', 'Merlin', 
        'Morgan Le Fay', 'Nox', 'Nu Wa', 'Olorun', 
        'Persephone', 'Poseidon', 'Ra', 'Raijin', 
        'Scylla', 'Sol', 'The Morrigan', 'Thoth', 
        'Tiamat', 'Vulcan', 'Yu Huang', 'Zeus', 
        'Zhong Kui'
    ],
    asesino: [
        'Arachne', 'Awilix', 'Bakasura', 'Bastet', 
        'Loki', 'Camazotz', 'Cliodhna', 'Da Ji', 
        'Fenrir', 'Mercury', 'Ne Zha', 'Nemesis', 
        'Pele', 'Ratatoskr', 'Ravana', 'Serqet', 
        'Set', 'Susano', 'Thanatos', 'Thor', 
        'Tsukuyomi'
    ],
    cazador: [
        'Ah Muzen Cab', 'Apollo', 'Artemis', 'Chernobog', 
        'Xbalanque', 'Cernunnos', 'Charybdis', 'Chiron', 
        'Cupid', 'Danzaburou', 'Hachiman', 'Ishtar', 
        'Jing Wei', 'Medusa', 'Neith', 'Rama', 
        'Skadi', 'Ullr'
    ],
    warrior: [
        'Achilles', 'Amaterasu', 'Chaac', 'Hercules', 
        'King Arthur', 'Cu Chulainn', 'Erlang Shen', 
        'Gilgamesh', 'Guan Yu', 'Mulan', 'Nike', 
        'Odin', 'Osiris', 'Shiva', 'Sun Wukong', 
        'Surtr', 'Vamana'
    ],
    guardian: [
        'Ares', 'Athena', 'Bacchus', 'Cabrakan', 
        'Geb', 'Artio', 'Atlas', 'Cthulhu', 
        'Fafnir', 'Ganesha', 'Jormungandr', 'Khepri', 
        'Kumbhakarna', 'Kuzenbo', 'Maui', 'Sobek', 
        'Sylvanus', 'Terra', 'Xing Tian', 'Yemoja', 
        'Ymir'
    ]
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
