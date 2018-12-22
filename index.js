const Discord = require('discord.js');

var bot = new Discord.Client();

var prefix = ("z!")
var randnum = 0;

bot.on("ready", () => {
    bot.user.setPresence({ game: { name: 'ZouckBot'}})
    console.log("ZouckBot connecté avec succès!");

});

bot.login("NDg0MDQ2MzAxMjk4ODE5MDcy.Dv9_vQ.A047Dx0Qhz7o_5WERipobPi252s");

bot.on("message", message => {
    if(message.content === "Souck"){
        message.reply("Bot!");
    }
    if(message.content === "SouckBot je t'aime"){
        message.reply("Moi aussi! :heart:");
    }
    if(message.content === ".ping"){
        message.reply("Pong!");
    }

    if(message.content === prefix + "help"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#c9a400")
            .addField("Commandes de SouckBOT!", ".help: Permet d'afficher les commandes de SouckBOT")
            .addField("Interaction", "Souck: Le bot répond Bot afin de faire le mot SouckBot .ping: Le bot répond Pong afin de s'amuser avec lui ou tout simplement vérifié qu'il est présent")
            .addField("Equipe Staff", ".staff: Permet de voir l'équipe staff de ZoukBot!")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes de CityActuBOT!")
        console.log("La commande .help a été effectuée par un utilisateur du server!");

    }
        if(message.content === ".lien"){
            message.reply("Le lien de notre site est: "-"!");
            console.log("Un utilisateur a effectué la commande .lien !")
        }

        if(message.content === prefix + "infodiscord"){
            var embed = new Discord.RichEmbed()
            .setDescription("Information du Discord de SouckBot")
            .addField("Nom du Discord", message.guild.name)
            .addField("Discord CA crée le", message.guild.createdAt)
            .addField("Tu as rejoins le discord le", message.member.joinedAt)
            .addField("Utilisateurs sur le Discord", message.guild.memberCount)
            .setColor("#00858e")
        message.channel.sendEmbed(embed)
        console.log("Un utilisateur du Discord a effectué la commande .infodiscord!")
        }
         if(message.content === prefix + "bvn"){
        var help_embed = new Discord.RichEmbed()
            .setColor("#2100c9")
            .addField("Message de Bienvenue", "Pour les nouveaux utilisateurs!")
            .addField("Nous sommes actuellement", message.guild.memberCount)
        message.channel.sendEmbed(help_embed);
        console.log("La commande .bvn a été effectuée par un utilisateur du server!");

    }
    if(message.content === prefix + "staff"){
        var help_embed = new Discord.RichEmbed()
            .setTitle("Equipe staff de ZoukBot")
            .setColor("#33cc00")
            .addField("Créateur", "- Zouk")
            .addField("Développeurs", "- Zouk")
            .setFooter("SouckBot crée par Zouk, touts droits réservé.")
        message.channel.sendEmbed(help_embed);
        //message.channel.sendMessage("Voici les commandes de CityActuBOT!")
        console.log("La commande .staffs a été effectuée par un utilisateur du server!");

    }
});
