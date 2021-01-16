 if (command === "roleinfo") { //comando necesitan tener definido args y commmand
       if(!message.content.startsWith(prefix)) return; //lo del prefix
      if (message.author.bot) return; //hacemos que el bot no responda a otros bots
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); //hacemos la constante role


      if (!role) return message.channel.send("Menciona un rol.") //si no mencionan el rol retornamos esto

      const rol = new MessageEmbed() //creamos el embed
        .setDescription("Informacion sobre el rol mencionado.") //selecioamos la descripcion
        .addField("Nombre:", `- ${role.name}`) //nombre del rol
        .addField("ID:", `- ${role.id}`) //id del rol
        .addField("Miembros con el Rol:", `- ${role.members.size}`) //cantidad de miembros que tienen el rol
        .addField("Posición:", `- ${role.rawPosition}`) //posicion del rol
        .addField("HexColor:", `- ${role.hexColor}`) //hexcolor del rol
        .addField("¿Mencionable?:", `- ${role.mentionable}`) //Si es mencionable retornara true si no retornara false
        .addField("¿Separado?:", `- ${role.hoist}`) //igual que lo de arriba solo que si es separado
        .addField("¿Gestionado por el sistema?:", `- ${role.managed}`) //igual que lo de arriba solo que si es gestionado por el sistema (Ejemplo roles de bots, rol de booster etc)
        
        } //cerramos
        
        //No hagan CYP :D
