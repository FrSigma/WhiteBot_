const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function() {
    console.log("WhiteBot > Le bot à été lancé avec succès !");
    bot.channels.get('421057138673188865').send({embed: {
        color: 3066993,
        fields: [{
            name: 'WhiteBot',
            value: '**Statut** - Lancé avec succès !'
        }],
        timestamp: new Date(),
        footer: {
            icon_url: bot.user.avatarURL,
            text: 'Lancement'
        }}});
})

bot.login(process.env.TOKEN) // Token

bot.on('message', message => {
    if(message.content === 'Mousse !') {
        message.channel.send('LA MAOUSSE !')
    }
});

bot.on('message', message => {
    if(message.content === ':oauth2') {
        message.channel.send(`Pour m'ajouter sur l'un de tes serveurs, exécute ce lien: https://discordapp.com/oauth2/authorize?client_id=420603927105503233&scope=bot&permissions=2146958591`)
    }
});

bot.on('message', message => {
    if(message.content === ':help') {
       message.channel.send({embed: {
            color: 3066993,
            fields: [{
                name: '**Version**',
                value: 'v1.1'
            },
            {
                name: 'Changelogs',
                value: '[1] Ajout de la liste du staff **du serveur des Moussaillons** - https://discord.gg/XGjPy9y #Pub Gratuite x)\n[2] Ajout de l\'oauth2' 
            },
            {
                name: 'Liste des Commandes',
                value: '**:help** - Affiche l\'aide'
            },
            {
                name: 'Expérimental (Instable)',
                value: '**:oauth2** - Pour m\'inviter sur ton serveur Discord\n**:markdown** - Affiche quelques codes en Markdown'
            }],
            timestamp: new Date(),
            title: 'WhiteBot',
            footer: {
                icon_url: bot.user.avatarURL,
                text: 'WhitePlasma_'
            }
       }}); 
    }
});

bot.on('message', message => { 
    if(message.content === ':markdown') {
        message.channel.send(`**WhiteBot** - MarkdownTest [Cet affichage sera disponible très bientôt !]
*Italique*
**Gras**
***Italique + Gras***
_Texte_
__Texte__
___Texte___
~~Texte~~`)
    }
});

bot.on('message', message => { 
    if(message.content === ':whiteplasma_') {
        message.channel.send('WhitePlasma_: **Créateur de ce Bot**. Dieu de la Sainte-Mousse. Captaine et Développeur principal du serveur des Moussaillons. Parce-que le Japon.')
    }
});

bot.on('message', message => { 
    if(message.content === ':luffinks') {
        message.channel.send('Luffinks: Dieu de la Sainte-Mousse. Captaine du serveur des Moussaillons. Aucun dieux ne peux être comparé à lui, C\'EST LA PUISSANCE ! Parce-que le Japon.')
    }
});

bot.on('message', message => {
    if(message.content === ':mortel_raptor') {
       message.channel.send('Mortel_Raptor: Modérateur du serveur des Moussaillons, à ses heures perdus: GROS CASSE-COUILLE SA MÈRE !')
    }
});

bot.on('message', message => {
    if(message.content === ':lapatatedufutur') {
       message.channel.send('LaPatateDuFutur: Il viens du passé ? Non ! Alors il vient du futur ? Mais chuuut, ne lui dis rien ça ne fera qu\'empirer les choses !')
    }
});

bot.on('message', message => {
    if(message.content === ':celico_67') {
       message.channel.send('Celico_67: Modératrice du serveur des Moussaillons qui vient du 67, une grande fan de Minecraft qui aime les rebéllions.')
    }
});

//bot.on('message', message => {
//    if(message.content === ':help') {
//       message.channel.send({embed: {
//            color: 3066993,
//            fields: [{
//                name: 'Description du Staff **du serveur des Moussaillons** - https://discord.gg/XGjPy9y',
//                value: '**:whiteplasma_** / **:luffinks** - Description des Captaines\n**:mortel_raptor** - Modérateur\n**:lapatatedufutur** - Modérateur\n**:celico_67** - Modératrice'
//            }}); 
//        }
//    });

