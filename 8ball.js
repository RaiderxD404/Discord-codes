//Primero lo primero, necesitan tener definido args y command, no enseñare a hacerlo porque es demasiado facil.

if(command === "8ball"){ // el comando xD
  if(!message.content.startsWith(prefix)) return; //aqui hacemos que el bot no responda con otros prefixes (Es algo raro la verdad)
  var respuesta = ["Si", "No", "Tal vez", "Obvio", "Yo digo que si", "Yo digo que no", "Probablemente"] (las respuestas)
  var random = respuesta[Math.floor(Math.random() * respuesta.length)] //hacemos un math random y definimos random para usarlo luego
  if (!args.length) return message.channel.send(`Escribe tu pregunta.`);  //hacemos un return por si no pone un argumento
const embed = new MessageEmbed() //hacemos el embed (Si tienen definido discord como "Discord" o "discord" tienen que poner Discord.MessageEmbed o discord.MessageEmbed


.addField("A su pregunta", `${args.join(" ")}`) //agregamos un field al embed
.addField("Mi respuesta", `${random}`) //agregamos otro field
.setColor("RANDOM") //seleccionamos el color (Pongan el que quiera, yo puse que sea random)
message.channel.send(embed) //enviamos el embed
} //cerramos
