/*
	El modulo que usaremos se llama discord-anti-spam link a npm https://www.npmjs.com/package/discord-anti-spam
*/

const AntiSpam = require('discord-anti-spam')
const antiSpam = new AntiSpam({
	warnThreshold: 3, //Cantidad de mensajes enviados seguidos que generarán una advertencia.

	kickThreshold: 20, //Cantidad de mensajes enviados seguidos que provocarán un kick.

	banThreshold: 30, //Cantidad de mensajes enviados seguidos que provocarán un ban.

	maxInterval: 2000, //Cantidad de tiempo milisegundos en el que los mensajes se consideran spam.

	maxDuplicatesInterval: 60000, //Cantidad de tiempo milisegundos en el que los mensajes duplicados se consideran spam.

	warnMessage: '{@user}, deja de hacer flood', //Mensaje que se enviará en el chat al advertir a un usuario.

	kickMessage: '**{user_tag}** ha sido expulsado por hacer flood', //Mensaje que se enviará en el chat al expulsar a un usuario.

	banMessage: '**{user_tag}** ha sido baneado por hacer flood', //Mensaje que se enviará en el chat al banear a un usuario.

	errorMessages: false, //Si los mensajes de error, cuando el bot no tiene suficientes permisos, deben enviarse o no
	
	maxDuplicatesWarning: 5, //Cantidad de mensajes duplicados que activan una advertencia.

	maxDuplicatesKick: 10, //Cantidad de mensajes duplicados que provocan un kick.

	maxDuplicatesBan: 15, //Cantidad de mensajes duplicados que provocan una prohibición.
	
	deleteMessagesAfterBanForPastDays: 1, //Cantidad de días en los que se eliminarán los mensajes antiguos. (1-7)
	
	exemptPermissions: ['ADMINISTRATOR', 'BAN_MEMBERS', 'KICK_MEMBERS'], //Omitir usuarios con al menos uno de estos permisos

	ignoreBots: true, //Si se ignoran los mensajes del bot

	verbose: true //Registros extendidos del módulo (recomendado)

})

//Pueden encontrar más propiedades en https://discord-anti-spam.js.org/global.html#format

/*
	Este modulo es muy fácil de usar, solo configurenlo a su gusto como vieron arriba y despues en el evento mensaje hacen lo siguiente.
*/

client.on('message', (message) => { //Su evento mensaje
	antiSpam.message(message) //Y esto seria todo
})
