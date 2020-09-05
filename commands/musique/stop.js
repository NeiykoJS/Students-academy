module.exports = {
    name: "stop",
    category: "musique",
    description: "Arrêter la musique",
    run: async (client, message, args) => {

        const { voiceChannel } = message.member;
        if(!voiceChannel) return message.channel.send("❌ Erreur : Vous devez être dans un salon vocal pour utilisez cette commande !");

        const serverQueue = message.client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send(`❌ Erreur : Il n'y à aucune musique à arrêter !`);
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end("La commande stop a été utilisé !")
    }
}