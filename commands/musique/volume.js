module.exports = {
    name: "volume",
    aliases: ["vol"],
    category: "musique",
    description: "Modifier le volume",
    run: async (client, message, args) => {

        const { voiceChannel } = message.member;
        if(!voiceChannel) return message.channel.send("❌ Erreur : Vous devez être dans un salon vocal pour utilisez cette commande !");
        const serverQueue = message.client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send(`❌ Erreur : Il n'y à aucune musique en cours !`);

        if(!args[0]) return message.channel.send(`Le volume actuelle est de: **${serverQueue.volume}**`);
        serverQueue.volume = args[0];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 5);
        return message.channel.send(`J'ai mis le volume à: **${args[0]}**`);
    }
}