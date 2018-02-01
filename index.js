const Discord = require('discord.js');
var bot = new Discord.Client();

const PREFIX = "t!";

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "welcome").send(member.toString() + ", **Welcome to Tempest Community!**\n*Make sure to read server rules and information.\n*Follow us on Twitter!\n<https://twitter.com/TeamTempest1944>*");
    var role = member.guild.roles.find('name' , 'Community User');
    member addRole(role)
    })


bot.on("ready", function() {
    bot.user.setGame('Made by Minty!')
    console.log("Im Ready!");
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;
        var args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0].toLowerCase()) {
            case "owner":
                message.channel.send("**Quake** - https://goo.gl/F45Uxn");
                break;
            case "help":
                message.channel.send("***Here are the commands!***\n\n**t!owner**\n**t!twitter**");
                break;
            case "twitter":
                message.channel.send("**Our Twitter!** <https://twitter.com/TeamTempest1944>");
                break;
        }
    }  
)




bot.login(process.env.BOT_TOKEN);
