if (command === "meme") { //necesitamos tener definido command, no necesitamos args (Creo) pero igualmente usenlo xd
      if(!message.content.startsWith(prefix)) return; //hacemos que el bot no responda a otros prefixes
      if (message.author.bot) return; //hacemos que el bot no responda a bots xD
      const red = require('reddit-fetch') //requerimos el modulo reddit-fetch | npm i reddit-fetch

      red({ 
        subreddit: 'SpanishMeme', //de aqui sacaremos los memes, puedes poner mas grupos o otros con mejores memes xD
        sort: 'hot', //aqui hacemos que solo envie lo hot (No hot de lo que piensas, hot de la categoria de reddit xD)
        allowNSFW: false, //aqui hacemos que no salgan memes NSFW 
        allowModPost: false, //nada de post de mods
        allowCrossPost: false, //esto no se q es :XD:
        allowVideo: false //nada de videos
      }).then(post => { 
        const embed = new MessageEmbed() //hacemos el embed (si tienen definido discord como Discord o discord al principio de discord MessageEmbed ponen Discord/discord.
          .setColor("BLUE") //ponemos color en mi caso azul
          .setTitle(post.title) //hacemos que el titulo sea el titulo del post
          .setImage(post.url) //aqui hacemos que la imagen sea la imagen del post
        if (!post.url) {
          return message.channel.send("No encontre memes :c") //hacemos un return si no encuentra memes
        } else {
          message.channel.send(embed) //enviamos el embed
        }
      }).catch(() => message.channel.send("Hubo un error")) //aqui hacemos un .catch y mandamos el mensaje hubo un error 
    } //cerramos
    
    //Por favor, no hagan CYP, trate de explicarlo lo mejor que pude xD
