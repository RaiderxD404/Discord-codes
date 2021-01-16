

if (command === "say") { //hacemos comando, necesitamos tener command y args definido
      if(!message.content.startsWith(prefix)) return; //lo de siempre para el prefix
      if (message.author.bot) return; //lo de siempre para que no responda a los bots

      if (!args.length) return message.channel.send(`Escribe el mensaje a enviar.`); //returnamos si no envia el argumento
 message.channel.send(args.join(" ")); //enviamos el argumento


    } //cerramos comando
    
    
    //NO hagas cyp
