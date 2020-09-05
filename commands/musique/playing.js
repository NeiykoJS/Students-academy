module.exports = {
    name: "playing",
    category: "musique",
    description: "Remettre la musique",
    run: async (client, message, args) => {

        const serverQueue = message.client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send(`❌ Erreur : Il n'y à aucune musique en cours !`);

        return message.channel.send(`🎵 En ce moment: **${serverQueue.songs[0].title}`);
    }
}