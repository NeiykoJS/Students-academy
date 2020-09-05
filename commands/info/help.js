const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

module.exports = {
    name: "help",
    aliases: ["h"],
    category: "info",
    description: "Gives the description of all commands",
    usage: "[command | alias]",
    run: async (client, message, args) => {

        if (message.deletable) message.delete();
        if (args[0]) {
            return getCMD(client, message, args[0]);
        } else {
            return getAll(client, message);
        }
    }
}

function getAll(client, message) {
    const embed = new RichEmbed()
        .setColor("ORANGE")
        
    // Map de toutes les commandes
    const commands = (category) => {
        return client.commands
            .filter(cmd => cmd.category === category)
            .map(cmd => `- \`${cmd.name}\``)
            .join("\n");
    }

    // Map des catégories
    const info = client.categories
        .map(cat => stripIndents`**${cat[0].toUpperCase() + cat.slice(1)}** \n${commands(cat)}`)
        .reduce((string, category) => string + "\n" + category);

    return message.channel.send(embed.setDescription(info));
}

function getCMD(client, message, input) {
    const embed = new RichEmbed()

    // Get cmd avec le nom ou l'alias
    const cmd = client.commands.get(input.toLowerCase()) || client.commands.get(client.aliases.get(input.toLowerCase()));
    
    let info = `No command information found for **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info));
    }

    // Ajout de toutes les cmd sur l'embed
    if (cmd.name) info = `**Nom de la commande** : ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases** : ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if (cmd.description) info += `\n**Description** : ${cmd.description}`;

    return message.channel.send(embed.setColor("GREEN").setDescription(info));
}