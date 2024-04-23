import 'dotenv/config';
import {Client} from 'discord.js';

const client = new Client({
  intents: ['Guilds', 'GuildMessages', 'GuildMembers', 'MessageContent'],
});

client.on('ready', (connection) => {
  console.log(`${connection.user.username} is online.`);
});

client.login(process.env.TOKEN);