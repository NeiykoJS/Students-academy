module.exports = {
    name: "pause",
    category: "musique",
    description: "Mettre en pause la musique",
    run: async (client, message, args) => {
        
        const serverQueue = message.client.queue.get(message.guild.id);
        if(serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return message.channel.send("La musique est désormais en Pause !");
        }
        return message.channel.send("Il n'y a aucune musique en cours de lecture !")
    }
}