if(command === "nuke") { //hacemos el comando necesitamos args y command definido 
    if(!message.content.startsWith(prefix)) return; //para que no responda a otros prefix
if (message.author.bot) return; //lo de hacer que no responda a bots

if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('No tienes permiso de hacer eso.') //hacemos un if para saber si el miembro que ejecuto el comando tiene el permiso de hacer esto o no

 if (!message.guild.me.hasPermission("MANAGE_CHANNELS")) { //hacemos un if para saber si tenemos el permiso para hacer esto
      return message.channel.send("No tengo permiso para hacer eso."); //retornamos
    }
let link = "https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif" //leteamos el gif para usarlo mas comoda mente despues

const nuke = new MessageAttachment(link, "nuke.gif") //hacemos el embed

var posicion = message.channel.position //vemos la posicion del canal para saber en donde tenemos que duplicar el canal

message.channel.clone().then((canal) => { //clonamos el canal en donde se ejecuto el evento message


  message.channel.delete() //eliminamos el canal en donde se ejecuto el evento message

  canal.setPosition(posicion)

  canal.send(nuke) //bah esto es simple ni lo explicare xD
})
} //cerramos
