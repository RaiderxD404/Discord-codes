const { Client, MessageEmbed } = require('discord.js'); //Recuerda que debes instalar el modulo "discord.js" usando el comando "npm install discord.js" o si estas en glitch, debes de ir a "package.json" y "add package" ahi buscas discord.js le das click y se instala

const client = new Client();

function presence(){
client.user.setPresence( {
       activity: {
           name: `Estado del bot`,
           type: "PLAYING" //Recuerda que puedes poner WATCHING que significaria viendo o STREAMING que significaria transmitiendo
       },
       status: "online"
    });
}    

client.on("ready", () => {
  console.log(`${client.user.tag} esta listo!`);
  presence();
});
