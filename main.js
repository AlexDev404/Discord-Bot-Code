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

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'youtube'){
        client.commands.get('youtube').execute(message, args);
    }else if (command == 'rules'){
            client.commands.get('rules').execute(message, args, Discord);
        } else if (command == 'atlasfn'){
            client.commands.get('atlasfn').execute(message, args);
        } else if (command == 'blaze'){
            client.commands.get('atlasfn').execute(message, args);
        } else if (command == 'commands'){
            client.commands.get('commands').execute(message, args, Discord);
        } else if (command == 'copyright'){
            client.commands.get('copyright').execute(message, args);
        } else if (command == 'kay'){
            client.commands.get('kay').execute(message, args);
       
        }



});


client.login('');
