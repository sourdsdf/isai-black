const config = require(`../../botconfig/config.json`);
const ee = require(`../../botconfig/embed.json`);
const emoji = require(`../../botconfig/emojis.json`);
const {
  MessageEmbed
} = require(`discord.js`)
module.exports = {
  name: `say`,
  category: `🚫 Admin`,
  aliases: [`say`, `sayit`],
  cooldown: 4,
  usage: `say <Text>`,
  description: `Resends the message`,
  memberpermissions: [`MANAGE_GUILD`],
  run: async (client, message, args, cmduser, text, prefix) => {
    
      if (!config.ownerIDS.includes(message.author.id))
      return message.channel.send(new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(client.user.username, ee.footericon)
        .setTitle(`${emoji.msg.ERROR}  Error | You are not allowed to run this command! Only the Owner is allowed to run this Cmd`)
      );
      
      try {
      if (!text)
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`${emoji.msg.ERROR} ERROR | please add a Text!`)
          .setDescription(` Usage: \`${prefix}say <TEXT>\`\n\nExample: \`${prefix}say Hello World! Check out: https://milrato.eu\``)
        );
      message.channel.send(text);
    } catch (e) {
      console.log(String(e.stack).bgRed)
      return message.channel.send(new MessageEmbed()
        .setColor(ee.wrongcolor)
        .setFooter(ee.footertext, ee.footericon)
        .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
        .setDescription(`\`\`\`${e.message}\`\`\``)
      );
    }
  }
};
