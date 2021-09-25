const {
  MessageEmbed
} = require(`discord.js`);
const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
module.exports = {
    name: "restart",
    aliases: "restartbot",
    category: "owner",
    run: async (client, message, args) => {
       if (!config.ownerIDS.includes(message.author.id))
      return message.channel.send(new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(client.user.username, ee.footericon)
        .setTitle(`${emoji.msg.ERROR}  Error | You are not allowed to run this command! Only the Owner is allowed to run this Cmd`)
      );
     await message.channel.send(`Restarting Isai Mazhai... Wait Few sec`)
        process.exit();
    }
}