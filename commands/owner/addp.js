const premiumSchema = require("../../handlers/Freemium")
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'add-',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
         if(message.author.id !== '573386403879059466') return;

         const user = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
    if (!member) return message.reply("Please specify a valid member!")
 
      premiumSchema.findOne(
          {
              User:member.id,
          },
          async (err,data) => {
              if (data)
              return message.reply(
                  "This user has already gained premium features"
              );
              new premiumSchema({
                  User: member.id,
              }).save();
              return message.reply(`Added ${user} To db`)
          }
      )
        },
}