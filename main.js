const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);


    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('MythFN Bot 1.0.0 is now Online!');
    client.user.setActivity('MythFN is the best fortnite private server');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === ''){
        client.commands.get('').execute(message, args);
    } else if (command == ''){
        client.commands.get('').execute(message, args);
    }else if (command == ''){
            client.commands.get('').execute(message, args, Discord);
        } else if (command == ''){
            client.commands.get('').execute(message, args);
        } else if (command == ''){
            client.commands.get('').execute(message, args);
        } else if (command == ''){
            client.commands.get('').execute(message, args, Discord);
        } else if (command == 'copyright'){
            client.commands.get('copyright').execute(message, args);
        } else if (command == ''){
            client.commands.get('').execute(message, args);
       
        }



});


client.login('');
