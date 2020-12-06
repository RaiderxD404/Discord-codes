client.on("message", message => {
   if(message.content === ("Aqui va el comando que activaria el comando xD")){
     const embed = new MessageEmbed()
     .setTitle("Aqui esta tu avatar!")
     .setImage(message.author.displayAvatarURL())
     .setColor("RANDOM")
     .setTimestamp()
     message.channel.send(embed);
   }
});
