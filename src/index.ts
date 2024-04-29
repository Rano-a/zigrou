import 'dotenv/config';
import {Client} from 'discord.js';

/**
 * @constant
 * Creation of our client (zigrou) with privileges (intents)
 */
const client = new Client({
  intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

/**
 * @method ready
 * @callback connection
 * Displays when the client is online
 */
client.on('ready', (connection) => {
  console.log(`${connection.user.username} is online.`);
});

/**
 * @method interactionCreate
 * @callback interaction
 * Each interaction based on each slash commands
 */
client.on('interactionCreate', (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }

  if (interaction.commandName === 'hello') {
    interaction.reply('Hello world!');
  }
  
  if (interaction.commandName === 'sum') {
    const num1 = interaction.options.get('first-number')!.value as number;
    const num2 = interaction.options.get('second-number')!.value as number;
    
    if (num1 && num2 != undefined) {
      interaction.reply(`The sum of the two numbers is: ${num1 + num2}`);      
    }
  }
});

/**
 * Log the client via TOKEN
 */
client.login(process.env.TOKEN);