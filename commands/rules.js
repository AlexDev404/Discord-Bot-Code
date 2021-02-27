module.exports = {
    name: 'rules',
    description: "this is the rules command",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#66CCFF')
        .setTitle('Rules')
        .setURL('http://vortnex.html-5.me')
        .setDescription('This is the embed for the server rules')
        .addFields(
            {name: 'Rule 1', value: 'No swearing of any kind (e.g., Fuck)'},
            {name: 'Rule 2', value: 'NO DOXXING. If we see you doxxing you are permanently banned from here.'},
            {name: 'Rule 3', value: 'No skidding. We have already said this enough if you skid it will get you banned.'},
            {name: 'Rule 4', value: 'No raiding/nuking. We will ban you no matter what'},
            {name: 'Rule 5', value: 'No NSFW content. We never want pictures of inappropriate things that a kid could see'},
            {name: 'Rule 6', value: 'We are NOT a developer hiring service. If you do then you will get warned and even risk a ban'},
            )
            .setFooter('If you do **NOT** Follow these rules, You may risk a mute, Kick, or even BAN from this server ;(')
        message.channel.send(newEmbed);

       

    }
}