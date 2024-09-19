const {SlashCommandBuilder} = require('@discordjs/builders');
const {ItemsT3} = require('../utils/items.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('build_random') 
    .setDescription('Crea una build aleatoria')
    .addStringOption(option => 
        option.setName('damage')
            .setDescription('Tipo de daño')
            .setRequired(true)
            .addChoices(
                { name: 'Físico', value: 'fisico' },
                { name: 'Magico', value: 'magico' }
            )
    ),

      async execute(interaction) {
      
        let damageType = interaction.options.getString('damage');
        const itemsMixtos = ItemsT3.Mixtos; 
        let AvailableItems;
        const finalBuild = [5];
        
        if(damageType === 'fisico'){
          const ItemsFisicos = ItemsT3.Fisicos;
          AvailableItems = itemsMixtos.concat(ItemsFisicos);
        }

        if(damageType === 'magico'){
          const ItemsMagicos = ItemsT3.Magicos;
          AvailableItems = itemsMixtos.concat(ItemsMagicos);
        }
        
        for(let i=0;i<6;i++){
          let randomNumber = Math.floor(Math.random() * AvailableItems.length);
          finalBuild [i] = AvailableItems[randomNumber].icon;
          console.log(AvailableItems[randomNumber].name);
          AvailableItems.splice(randomNumber,1);
        }
        
        await interaction.reply(
          {files: 
            [finalBuild[0],
            finalBuild[1],
            finalBuild[2],
            finalBuild[3],
            finalBuild[4],
            finalBuild[5]]}
        );

      }
}