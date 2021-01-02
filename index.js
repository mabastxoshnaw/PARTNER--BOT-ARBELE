const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'c!wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**خۆت لە ڤۆیس نیت بیمە کوێ من**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'wara') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(`https://discord.gg/KYPQUChagq`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("793256696625365033").send(
`> sent By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`ریکلام بۆ من بنێرە من دەی ئنێم`,"http://twitch.tv/PAYWANDcamper") 
});




client.login("Nzc3NjM4MzA4MDQ1MjU4NzY0.X7GWHA.vrUNQCMkTgdUPlE0lmCScQgj4CA");//تۆکین لێرە دانێ
