module.exports = {
    name: "skip",
    aliases: ["fs"],
    category: "musique",
    description: "Passer la musique qui est en cours",
    run: async (client, message, args) => {

        const { voiceChannel } = message.member;
        if(!voiceChannel) return message.channel.send("❌ Erreur : Vous devez être dans un salon vocal pour utilisez cette commande !");
        const serverQueue = message.client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send(`❌ Erreur : Il n'y à aucune musique en cours !`);

        serverQueue.connection.dispatcher.end("La commande skip est utilisé !");
        
    }
}