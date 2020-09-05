const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    aliases: ["memes"],
    category: "fun",
    description: "Envoi des memes",
    run: async (client, message, args) => {

        if (message.deletable) message.delete();

        const subReddits = ["dankmeme","dankmemes", "meme"];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Source: Reddit`)
            .setURL(`https://reddit.com/r/${random}`)
            .setTimestamp();

        message.channel.send(embed);
    }
}