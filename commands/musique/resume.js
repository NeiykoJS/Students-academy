module.exports = {
    name: "resume",
    aliases: ["res"],
    category: "musique",
    description: "Remettre la musique",
    run: async (client, message, args) => {

        const serverQueue = message.client.queue.get(message.guild.id);
        if(serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send("Restoration de la musique !");
        }
        return message.channel.send("Il n'y a aucune musique en cours de lecture !")
    }
}