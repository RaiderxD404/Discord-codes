client.on("message", message =>{
  if(message.content.startsWith("servericon")) {//definimos el comando
  let icono = message.guild.iconURL({size : 2048, dynamic: true})//hacemos un let icon para no tener que poner todo eso en setImage ahi decimos que donde se uso el comando va a mandar el icono del servidor sizeado en 2048 y si es gifs sale como gifs
  const embed = new MessageEmbed()//definimos el embed
  .setColor("RANDOM")//color random
 .setImage(`${icono}`)// y en el setImage ponemos el nombre del let
 message.channel.send(embed)//decimos que mande el embed
  }//cerramos
});
