const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
    name: "reol",
    aliases: "restartbot",
    category: "owner",
    run: async (client, message, args) => {
      
    message.channel.send('creating a role')
        message.guild.roles.create({
            data: {
                name: 'Testing Role',
                color: 'GREY'
            },
            reason: 'Stackoverflow.com - created for user14470589'
        })
        .then((res => {
            message.channel.send(`debug result:\n${res}`)
        })).catch((err => {
            message.channel.send(`error:\n${err}`)
        }))
    
    }
      }