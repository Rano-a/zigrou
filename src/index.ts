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
});

/**
 * Log the client via TOKEN
 */
client.login(process.env.TOKEN);