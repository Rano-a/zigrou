require('dotenv').config();
const {REST, Routes} = require('discord.js');

/**
 * @const commands
 * Array of available slash commands
 */
const commands = [
  {
    name: 'hello',
    description: 'Replies with Hello World!',
  },
];

const rest = new REST({version: '10'}).setToken(process.env.TOKEN);

/**
 * @function
 * Register slash commands via CLIENT_ID and GUILD_ID based on commands
 */
(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      // Define the route for slash commands
      Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
      {body: commands}
    );

    console.log('Slash commands were registered successfully');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();