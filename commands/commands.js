module.exports = {
    name: 'commands',
    description: "this is the commands command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#66CCFF')
        .setTitle('Commands')
        .setURL('http://vortnex.html-5.me')
        .setDescription('Commands List')
        .addFields(
            {name: '-rules', value: 'Gives you the server rules'},
            {name: '-youtube', value: 'Gives you our youtube channel (#AD)'},
            {name: '-atlasfn', value: 'Fun Surprise'},
            {name: '-ping', value: 'Tests if bot is working (DEV USE ONLY)'},
            {name: '-copyright', value: 'Views Copyright Document'},
            {name: '-kay', value: 'Tells kay to go to memes'}
            )
            .setFooter('We will be adding more commands in the feature <3 - The MythFN Team')
        message.channel.send(newEmbed);

       

    }
}