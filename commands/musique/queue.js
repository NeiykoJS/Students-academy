module.exports = {
    name: "queue",
    category: "musique",
    description: "Montre la playlist",
    run: async (client, message, args) => {

        const serverQueue = message.client.queue.get(message.guild.id);
        if(!serverQueue) return message.channel.send(`❌ Erreur : Il n'y à aucune musique en cours !`);
        
        return message.channel.send(`
**Playlist:**
${serverQueue.songs.map(song => `${song.title}`).join("\n")}
**Musique actuelle: ** ${serverQueue.gongs[0].title}
        `);
    }
}