const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'addch',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
       
       const channelnameQuery = args.join("");
       if(!channelnameQuery) return message.reply('Please specify a channel name');
       message.guild.channels.create(channelnameQuery)
       
    }
}