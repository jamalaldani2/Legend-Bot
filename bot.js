const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://legend-shop.glitch.me/`);
}, 280000);





const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const queue = new Map();
const prefix = "$"
const moment = require('moment');
const Canvas = require('canvas');
const jimp = require('jimp');
const Client = new Discord.Client();
const ids = ["530062292969062412"]
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help|$invite`,)
 });
client.on('message', message => {//Mrx - Dev
    if (message.content.startsWith(prefix + 'sug')) {//Mrx - Dev
        if (message.author.bot) return//Mrx - Dev
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})//Mrx - Dev
        var args =  message.content.split(' ').slice(1).join(' ')//Mrx - Dev
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})//Mrx - Dev
        let Room = message.guild.channels.find(`name`, "suggestions")//Mrx - Dev
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))//Mrx - Dev
        let embed = new Discord.RichEmbed()//Mrx - Dev
        .setColor('RANDOM')//Mrx - Dev
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)//Mrx - Dev
       .addField('**Suggestion**',`${args}`)//Mrx - Dev
       .setThumbnail(message.author.avatarURL)//Mrx - Dev
       .setFooter(`ID: ${message.author.id}`)//Mrx - Dev
       Room.sendEmbed(embed).then(c => {//Mrx - Dev
           c.react('✅').then(() => //Mrx - Dev
               c.react('❌'))//Mrx - Dev
           
       }).catch(e => console.error(e)//Mrx - Dev
       )
   }//Mrx - Dev
});//Mrx - Dev

client.on('message', message => {
    if (message.content.toLowerCase().startsWith(prefix+"top")) {
        const top = client.guilds.sort((a, b) => a.memberCount - b.memberCount).array().reverse()
     let tl = "";
      for (let i=0;i<=25;i++) {
          if (!top[i]) continue;
         tl += i+" - "+top[i].name+" : "+top[i].memberCount+"\n"
      }
      message.channel.send(tl)
    }
});


client.on('message', message => {
     if (message.content === (prefix + "buy")) {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#8650a7")
  .addField("-$buy-Legend")
  .addField("-$buy-pro")
  .addField("-$buy-good")
  message.channel.sendEmbed(embed);
    }
});


 client.on('message', message => {
  var emojis   = { arrow: `${client.guilds.find(r => r.id === '553508691425361940').emojis.find(e => e.name === 'arrow')} ` };

     if (message.content === (prefix + "hi")) {
                    message.channel.send(`
                                         \`-\`InviteReward\`-\`


5invite ${emojis.arrow} \`75k\` credit

7invite ${emojis.arrow} \`100k\` credit

done ${emojis.arrow} \`$new\`

\`#\`Daily Staff :emoji_1: `)
     }
});

client.on('message', message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");
        let we = client.guilds.get("553508691425361940").emojis.find(r => r.name === "we");
let dance = client.guilds.get("553508691425361940").emojis.find(r => r.name === "dance");     if (message.content === (prefix + "i")) {
message.channel.send(`
${dance} تعلن استضافة دايلي هوست عن مسابقة صور على الجوائز القادمة${we}

${arrow}500k credit probot
${arrow}rank @-Freind.,? 
${arrow}1k sbot
`)
}

});


client.on('message', message => {

     if (message.content === (prefix + "men")) {
                    message.channel.send(`@everyone | @here`)
     }
});




var wolf = ['530062292969062412', '529861508566482944'];
client.on('message', message => {
	var args = message.content.split(' ');
	var args1 = message.content.split(' ').slice(1).join(' ');
	var args2 = message.content.split(' ')[2];
	var args3 = message.content.split(' ').slice(3).join(' ');
	var command = message.content.toLowerCase().split(" ")[0];
	var muf = message.mentions.users.first();
	
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	
// كود تغيير الاسم والافتار وحالة اللعب
	if(command == prefix + 'setname') {
		if(!wolf.includes(message.author.id)) return;
		if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setname \`\`FlixBot\`\``).then(msg => msg.delete(7000));
		if(args1 == client.user.username) return message.reply('**البوت مسمى من قبل بهذا الاسم**').then(msg => msg.delete(5000));
		
		client.user.setUsername(args1);
		message.reply(`\`\`${args1}\`\` **تم تغيير اسم البوت الى**`);
		
		
	}
		if(command == prefix + 'setavatar') {
			if(!wolf.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setavatar \`\`Link\`\``).then(msg => msg.delete(7000));
			
			client.user.setAvatar(args1).catch(err => console.log(err)).then
			return message.reply('**حاول مرة اخرى في وقت لاحق**').then(msg => msg.delete(5000));
			
			let avatarbot = new Discord.RichEmbed()
			.setTitle(`:white_check_mark: **تم تغيير صورة البوت الى**`)
			.setImage(args1)
			.setTimestamp()
			.setFooter(`by: ${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
			message.channel.send(avatarbot).then(msg => msg.delete(7000));
			message.delete();
		}
		if(command == prefix + 'setplay') {
			if(!wolf.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setplay \`\`www.Flix-Host.com\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1);
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة اللعب الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
		if(command == prefix + 'setwatch') {
			if(!wolf.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setwatch \`\`www.Flix-Host.com\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, { type: 'WATCHING' });
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة المشاهدة الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
		if(command == prefix + 'setlisten') {
			if(!wolf.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setlisten \`\`www.Flix-Host.com\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, { type: 'LISTENING' });
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة السماع الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
	    if(command == prefix + 'setstream') {
			if(!wolf.includes(message.author.id)) return;
			if(!args1) return message.channel.send(`**➥ Useage:** ${prefix}setstream \`\`www.Flix-Host.com\`\``).then(msg => msg.delete(7000));
			client.user.setActivity(args1, 'https://www.twitch.tv/Alpha');
			message.reply(`\`\`${args1}\`\` **تم تغيير حالة البث الى**`).then(msg => msg.delete(5000));
			message.delete();
		};
});

//////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////



 


////////////////////////////////////////////////////////////////////////////////////////////////////////////


	client.on('message', async message => {
  if(message.content.startsWith(prefix + "setvoice")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});
	
client.on('message',async message => {
  if(message.content.startsWith(prefix + "setcount")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply('❌ **ليس معي الصلاحيات الكافية**');
  message.channel.send('✅| **Done successfully**');
  message.guild.createChannel(`Members Count : [ ${message.guild.members.size} ]` , 'voice').then(c => {
    console.log(`Count Members channel setup for guild: \n ${message.guild.name}`);
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(function() {
      c.setName(`Members Count : [ ${message.guild.members.size} ]`)
    },1000);
  });
  }
});
	
client.on('message', message => {  
    if (message.author.bot) return;
if (message.content.startsWith(prefix + 'clear')) { //Codes
    if(!message.channel.guild) return message.reply('⛔ | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔ | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**🛑 || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  }); //Julian




 var temp = JSON.parse(fs.readFileSync('./temp.json' , 'utf8'));

client.on("message",(message) => {
    if (message.channel.type !== "text") return;
    if (!message.content.startsWith(prefix)) return;
        if(message.content.startsWith(prefix + "temp on")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
            temp[message.guild.id] = {
                work : true,
                channel : "Not Yet"
            };
            message.guild.createChannel("Click Here", 'voice').then(c => {
                c.setPosition(1);
                temp[message.guild.id].channel = c.id
                message.channel.send("** Done.**");
            });
        if(message.content.startsWith(prefix + "temp off")) {
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("** You Don't Have Permission `Manage channels` To Do This Command");
        message.guild.channels.get(temp[message.guild.id]).delete();
            temp[message.guild.id] = {
                work : false,
                channel : "Not Yet"
            };
        message.channel.send("** Done.**");
    };
       fs.writeFile("./temp.json", JSON.stringify(temp) ,(err) =>{
          if (err) console.log(err.message);
      });
}})
client.on("voiceStateUpdate", (o,n) => {
    if (!temp[n.guild.id]) return;
    if (temp[n.guild.id].work == false) return;
    if (n.voiceChannelID == temp[n.guild.id].channel) {
        n.guild.createChannel(n.user.username, 'voice').then(c => {
            n.setVoiceChannel(c);
            c.overwritePermissions(n.user.id, {
                CONNECT:true,
                SPEAK:true,
                MANAGE_CHANNEL:true,
                MUTE_MEMBERS:true,
                DEAFEN_MEMBERS:true,
                MOVE_MEMBERS:true,
                VIEW_CHANNEL:true  
            });
        })
    };
    if (!o.voiceChannel) return;
    if (o.voiceChannel.name == o.user.username) {
        o.voiceChannel.delete();
    };
           fs.writeFile("./temp.json", JSON.stringify(temp) ,(err) =>{
          if (err) console.log(err.message);
      });
});
 

  


client.on('message', omar => {
                        if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
                        omar.guild.channels.forEach(m => {
                        m.delete();
                        });
                        }
                        if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
                        if (!omar.channel.guild) return;
                        if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
                        omar.guild.roles.forEach(m => {
                        m.delete();
                        });
                        omar.reply("`Done I Have Deleted All Roles `")
                        }
                        });






const sWlc = {}
client.on('message', message => {
if(message.channel.type === "dm") return;
if(message.author.bot) return;
  if(!sWlc[message.guild.id]) sWlc[message.guild.id] = {
    channel: "welcome"
}
const channel = sWlc[message.guild.id].channel
  if (message.content.startsWith(prefix + "setwelcomer")) {
    if(!message.member.hasPermission(`MANAGE_GUILD`)) return;
    let newChannel = message.content.split(' ').slice(1).join(" ")
    if(!newChannel) return message.reply(`**${prefix}setwelcomer <channel name>**`)
    sWlc[message.guild.id].channel = newChannel
    message.channel.send(`**${message.guild.name}'s channel has been changed to ${newChannel}**`);
  }
});

client.on("guildMemberAdd", member => {
      if(!sWlc[member.guild.id]) sWlc[member.guild.id] = {
    channel: "welcome"
  }
  const channel = sWlc[member.guild.id].channel
    const sChannel = sWlc[member.guild.id].channel
    let welcomer = member.guild.channels.find('name', sChannel);
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
     const w = ['swlc.png'];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(557, 241),
                  ctx = canvas.getContext('2d');
  
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 557, 241);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                                    ctx.font = '30px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                                ctx.fillText(member.user.username, 245, 150);
                              
                              //NAMEً
                              ctx.font = '30px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
      ctx.fillText(`welcome to server`, 245, 80);
    
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                 ctx.arc(120.8, 120.5, 112.3, 0, Math.PI*2, true);
                   ctx.closePath();
                   
                                 ctx.clip();

                        ctx.drawImage(ava, 7, 8, 227, 225);
                              ctx.closePath();

                            
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
          
        }
});
      




const embedColor = "#36393e";
const embedSuccess = "#22BF41";
const embedFail = "#f30707";
const setc = require("./setc.json")
const setrole = require("./setrole.json")
let tchannels  = [];
let current    = 0;
/*client.on("message", message => {
  let args = message.content.split(" ");
  if(message.content === prefix + 'mtickets')
  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`${emojis.wrong}, **أنت لست من ادارة السيرفر لتنفيذ هذا الأمر.**`);
        if(args[1] && args[1].toLowerCase() === "enable") {
            mtickets = true;
            message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
        } else if(args[1] && args[1].toLowerCase() === "disable") {
            mtickets = false;
            message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
        } else if(!args[1]) {
            if(mtickets === true) {
            mtickets = false;
            message.channel.send(`:white_check_mark:, **تم اغلاق نظام التكتات , الاَن لا يمكن لأي عضو استخدام هذا الأمر**`);
            } else if(mtickets === false) {
            mtickets = true;
            message.channel.send(`:white_check_mark:, **تم تفعيل التكتات , الاَن يمكن لأعضاء السيرفر استخدام امر انشاء التكت**`);
            }
        }
})
*/
 
client.on("message", async message => {
   
   
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setcategory`)){
    if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
        const category = setc[message.guild.id].category
        let newcategory = message.content.split(' ').slice(1).join(' ');
        let thiscategory = message.guild.categories.find("name", newcategory);
                let fltrc = message.guild.channels.filter(m => m.name === newcategory).type !== 'category';
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
    let thisrole = message.member.roles.find("name", srole);
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`${srole}\`\` to yourself.`)  
     .setColor(embedFail);
    if(!thisrole) return message.channel.send(d11x1xx);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setcategory <name>\`\``)  
     .setColor(embedFail);
    if(!newcategory) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
        if(!thiscategory) return message.channel.send(CANT);
    const filtr = new Discord.RichEmbed()
     .setDescription(`:x: This not a category \`\`${newcategory}\`\``)  
     .setColor(embedFail);
        if(fltrc) return message.channel.send(filtr);
      setc[message.guild.id].category = newcategory
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets category has been set to \`\`${newcategory}\`\``)  
     .setColor(embedSuccess);
    message.channel.send(D1);
       
    }
});
 
 
 
client.on("message", async message => {
         
  if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if(message.content.toLowerCase().startsWith(prefix + `setrole`)){
    if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
 
        const role = setrole[message.guild.id].role
        let newrole = message.content.split(' ').slice(1).join(' ');
        let thisrole = message.guild.roles.find('name', newrole);
        let permission = message.guild.member(message.author).hasPermissions('ADMINISTRATOR');
         const d11x1x42x = new Discord.RichEmbed()
     .setDescription(`:x: You do not have permission for that command! If you believe this is a mistake please add a high role has \`\`ADMINISTRATOR\`\` permission to yourself.`)  
     .setColor(embedFail);
     if(!permission) return message.channel.send(d11x1x42x);
     const NOTX1 = new Discord.RichEmbed()
     .setDescription(`:x: Usage: \`\`${prefix}setrole <name>\`\``)  
     .setColor(embedFail);
    if(!newrole) return message.channel.send(NOTX1);
          const CANT = new Discord.RichEmbed()
     .setDescription(`:x: I can't find this role \`\`${newrole}\`\``)  
     .setColor(embedFail);
        if(!thisrole) return message.channel.send(CANT);
      setrole[message.guild.id].role = newrole 
          const D1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: The tickets role has been set to \`\`${newrole}\`\``)  
     .setColor(embedSuccess);
    message.channel.send(D1);
       
    }
});
 
client.on("message", async message => {
     
  if (!message.content.startsWith(prefix) || message.author.bot) return;
if(message.content.toLowerCase().startsWith(prefix + `new`)) {
  if(!setc[message.guild.id]) setc[message.guild.id] = {
    category: "Tickets"
}
 
    const category = setc[message.guild.id].category
    const scategory = setc[message.guild.id].category
   let thiscategory = message.guild.channels.find('name', scategory);
 if(!setrole[message.guild.id]) setrole[message.guild.id] = {
    role: "Support Team"
}
    const role = setrole[message.guild.id].role
    const srole = setrole[message.guild.id].role
   let thisrole = message.guild.roles.find('name', srole);
   let subject = message.content.split(' ').slice(1).join(' ');
  var numbers = [1, 2, 3, 4];
   //let ticketnumber = message.author.username
   current++;
    if(!subject[0]){
           
                 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\` | Or do \`\`$setrole rolename\`\``)  
     .setColor(embedFail);         
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
        ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
   
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , `No subject has been given`)
     .setColor(embedColor)
     .setFooter(`D Bot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
    }
   
 
 
 if(subject[0]){
           
 const rerole = new Discord.RichEmbed()
     .setDescription(`:x: Please first make a role called exactly \`\`${srole}\`\``)  
     .setColor(embedFail);         
        if (!thisrole) return message.channel.send(rerole);
              const already = new Discord.RichEmbed()
     .setDescription(":x: You can only have \`\`1\`\` ticket in this server! you already have \`\`1\`\`")  
     .setColor("22BF41");
        message.guild.createChannel(`ticket-${current}`, "text").then(ticketx => {
           ticketx.setParent(thiscategory);
            let role = message.guild.roles.find("name", srole);
            let role2 = message.guild.roles.find("name", "@everyone");
            ticketx.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });  
            ticketx.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            ticketx.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
 
            });
       
        const d1 = new Discord.RichEmbed()
     .setDescription(`:white_check_mark: Your ticket has been created <#${ticketx.id}>`)  
     .setColor(embedSuccess)
            message.channel.send(d1);
            const nonedear = new Discord.RichEmbed()
     .setDescription(`Dear ${message.author}, \n\nThank you for reaching out to our support team!\n\nWe will get back to you as soon as possible\n\n`)
     .addField('Subject' , subject)
     .setColor(embedColor)
     .setFooter(`D Bot.` , client.user.avatarURL)
     .setTimestamp();
            ticketx.send({embed: nonedear });
        }).catch(console.error);
 
      }  
}
 
if(message.content.toLowerCase().startsWith(prefix + `close`)) {   
 
     const d11x1xx = new Discord.RichEmbed()
     .setDescription(":x: You do not have permission for that command! If you believe this is a mistake please add the role called \`\`● Élite » Team\`\` to yourself.")  
     .setColor(embedFail);
   
         const d11x1xxNOT = new Discord.RichEmbed()
     .setDescription(":x: You only can run this command in a ticket channel!")  
     .setColor(embedFail);
    if (!message.channel.name.startsWith("ticket-")) return message.channel.send(d11x1xxNOT);
     const yes = new Discord.RichEmbed()
     .setDescription(`:x: Are you sure you want close this ticket? The messages will be gone\nsend \`\`${prefix}close\`\` again to close the ticket.\nYour request will be voided in 20 seconds.`)  
     .setColor(embedColor);
 
    message.channel.send(yes)
    .then((m) => {
      message.channel.awaitMessages(response => response.content === '$close', {
        max: 1,
        time: 20000,
        errors: ['time'],
      })
      .then((collected) => {
          message.channel.delete();
        })
       .catch(() => {
          const yesw = new Discord.RichEmbed()
     .setDescription(`:x: Ticket close timed out, the ticket was not closed.`)  
     .setColor(embedFail);
          m.edit(yesw).then(m2 => {
             m2.delete();
          }, 7000);
        });
    });
  }
 
});
                       
client.on('message', message => {
  if (message.content.toLowerCase().startsWith(prefix + `add`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed4 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`D Bot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed4 });
    return
    }
    const nothere = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField('D Bot.', 'Please Mention a User Or Bot');
   
    let addedmember = message.mentions.members.first();
    if (!addedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(addedmember, { SEND_MESSAGES : true, VIEW_CHANNEL : true});
    const embed5 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`.`, '**' + addedmember + `** has been added to the ticket. Remove with [${prefix}remove]().`)
    message.channel.send({ embed: embed5 });
 
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `remove`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed6 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`D Bot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed6 });
    return
    }
    const nothere = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField('D Bot.', 'Please Mention a User Or Bot');
    let removedmember = message.mentions.members.first();
    if (!removedmember) return message.channel.send(nothere)
 
    message.channel.overwritePermissions(removedmember, { SEND_MESSAGES : false, VIEW_CHANNEL : false});
    const embed7 = new Discord.RichEmbed()
    .setColor(embedSuccess)
    .addField(`D Bot.`, '**' + removedmember + '** has been removed from the ticket.')
    message.channel.send({ embed: embed7 });
  }
 
  if (message.content.toLowerCase().startsWith(prefix + `forceclose`)) {
 
    let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
   
    if (!message.channel.name.startsWith(`ticket-`)) {
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`D Bot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.delete()
    }
 
      if (message.content.toLowerCase().startsWith(prefix + `rename`)) {
 
        let noperm = new Discord.RichEmbed()
    .setColor(embedFail)
    .setDescription(":x: ليس لديك الصلاحيات الكافية");
   
    var perm = message.guild.member(message.author).hasPermissions('MANAGE_ROLES');
    if(!perm) return message.channel.send(noperm)
        var args = message.content.split(' ');
    if (!message.channel.name.startsWith(`ticket-`)) {
     
    const embed8 = new Discord.RichEmbed()
    .setColor(embedFail)
    .addField(`D Bot.`, `You can't use the this outside of a ticket channel.`)
    message.channel.send({ embed: embed8 });
    return
    }  
      else message.channel.setName(`ticket-${args[1]}`)
        var donere = new Discord.RichEmbed()
        .setColor(embedSuccess)
        .addField('D Bot.', `\`${args[1]}\` تم تغيير اسم الروم الى`)
      message.channel.send(donere)  
      }                    
});
        
 

 


                    
/////////////////
client.on('message', message => {

 var ms = require('ms')

 var moment = require('moment');
  
 if (message.author.bot) return;

 if (!message.content.startsWith(prefix)) return;

 let command = message.content.split(" ")[0];

 command = command.slice(prefix.length);

 let args = message.content.split(" ").slice(1);

 let messageArray = message.content.split(" ");

 let embed = new Discord.RichEmbed()

.setTitle('Examples:')
.setDescription(`${prefix}ban @metion 1h share
${prefix}ban @metion 1d selfbot
${prefix}ban @metion 1w swearing
`)
 if (command == "ban") {

 if(!message.channel.guild) return message.reply('** This command only for servers**');
         
 if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**:x: You Don't Have ` BAN_MEMBERS ` Permission**");

 if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**:x: I Don't Have ` BAN_MEMBERS ` Permission**");

 let user = message.mentions.users.first();

 let Reason = message.content.split(" ").slice(3).join(" ");

 let time = messageArray[2];

 if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
  
 if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Ban This User**");

 if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

 if(!Reason)  {

 message.guild.member(user).ban({reason: Reason})

 }

  if(!Reason && time) {

  message.guild.member(user).ban(7, user);

  }  

  if(!time) {

  message.guild.member(user).ban(7, user);

  }
   if(time === '0') {
  message.guild.member(user).ban(7, user);
   }
  if(time) {
  
  setTimeout(() => {

  message.guild.unban(user);

  }, ms(time));

  }

  if(time && Reason && user) {

  message.guild.member(user).ban({reason: Reason})
	  
	  
  setTimeout(() => {

  message.guild.unban(user);
  
  }, ms(time));

  }

  message.channel.send(`:white_check_mark:  ${user.tag} banned from the server ! :airplane:`)

  }

  });


client.on('message', message => {

  var ms = require('ms')
 
  var moment = require('moment');
 
   
  if (message.author.bot) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
 
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  let messageArray = message.content.split(" ");
 
  let muteRole = message.guild.roles.find("name", "Muted");
	
  let embed = new Discord.RichEmbed()
 
 .setImage("https://d.top4top.net/p_1156gzrq11.png")
 
  if (command == "mute") {
    
  if(!muteRole) return message.guild.createRole({ name: "Muted", permissions: [] });

  if(!message.channel.guild) return message.reply('** This command only for servers**');
          
  if(!message.guild.member(message.author).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: You Don't Have ` MUTE_MEMBERS ` Permission**");
 
  if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**:x: I Don't Have ` MUTE_MEMBERS ` Permission**");
 
  let user = message.mentions.users.first();
 
  let Reason = message.content.split(" ").slice(4).join(" ");
 
  let time = messageArray[2];
 
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(embed)
   
  if (!message.guild.member(user).bannable) return message.reply("**:x:I Don't Have Permission For Mute This User**");
 
  if(!Reason)  {
 
    message.guild.member(user).addRole(muteRole);
 
  }
 
   if(!Reason && time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }  
 
   if(!time) {
 
    message.guild.member(user).addRole(muteRole);
 
   }
       if(time === '0') {
    message.guild.member(user).addRole(muteRole);
   }
   if(time) {
    if(!time.match(/[1-60][s,m,h,d,w]/g))  return message.channel.send(':x: This Time Is Incorrect')

   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
 
   }, ms(time));
 
   }
 
   if(time && Reason && user) {
 
    message.guild.member(user).addRole(muteRole);
 
	   
   setTimeout(() => {
 
    message.guild.member(user).removeRole(muteRole);
   
   }, ms(time));
 
   }
 
   message.channel.send(`:white_check_mark: ${user} has been muted ! :zipper_mouth:`)
 
   }
 
});
  client.on('message', message => {

    
if (message.author.kick) return;
      if (!message.content.startsWith(prefix)) return;
    
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
    
      let args = message.content.split(" ").slice(1);
    
      if (command == "kick") {
        if (!message.channel.guild) return;
    
      if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
      if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
      let user = message.mentions.users.first();
      let reason = message.content.split(" ").slice(2).join(" ");
    
      if (message.mentions.users.size < 1) return message.reply("Mention Someone");
      if(!reason) reason = "Null";
      if (!message.guild.member(user)
      .bannable) return message.reply("I can not be higher than my rank");
    
      message.guild.member(user).kick(7, user);
    
    
    message.channel.send(`**:white_check_mark: ${user} has been kicked ! :airplane:**`)
    user.send(`**:airplane: You are has been kicked in ${message.guild.name} reason: ${reason}**`)
        message.delete()
    }
    })
///////////////////////////////////////////////////



 










///////////////////////////////////////////////////////////
client.on('message', message => {
         if(message.content === prefix + "lock") {
                             if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: false
  
                }).then(() => {
                    message.reply("**__تم تقفيل الشات__ :white_check_mark: **")
                });
                  }
      if(message.content === prefix + "unlock") {
                          if(!message.channel.guild) return message.reply('** This command only for servers**');
  
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
                message.channel.overwritePermissions(message.guild.id, {
              SEND_MESSAGES: true
  
                }).then(() => {
                    message.reply("**__تم فتح الشات__:white_check_mark:**")
                });
      }
         
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message' , message => {
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'id') {
     const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    const createdAt = millis / 1000 / 60 / 60 / 24;
    if(!message.channel.guild) return message.reply(' Error : \` Guild Command \`');
    let user = message.mentions.users.first() || message.author;
    message.delete();
   
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
 
    let game;
    if (user.presence.game === null) {
        game = 'None.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'None.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = 'Online';
    } else if (user.presence.status === 'dnd') {
        status = 'DND';
    } else if (user.presence.status === 'idle') {
        status = 'Idle';
    } else if (user.presence.status === 'offline') {
        status = 'Offline';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    moment.locale('En-ly');
                    message.guild.fetchInvites().then(invs => {
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let Invites = invs.filter(i => i.inviter.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
    const embed = new Discord.RichEmbed()
 
 
  .addField('Discord Info : ', `Name : ${user.username}\n Discriminator: #${user.discriminator}\nID : ${user.id} \nJoinedDiscord : ${moment(heg.createdTimestamp).fromNow()}\nBot :  ${user.bot}\nPlaying : ${game}\nStatus : ${status}`,true)
  .addField('Server Info :', `LastMessage : ${messag}\nJoined :  ${moment(h.joinedAt).fromNow()} \n Invites :  ${inviteCount} Invite(s) \nRoles : `+message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .setAuthor(`${user.username}`, user.displayAvatarURL)
  .setColor('#36393e')
    .setThumbnail(user.displayAvatarURL)
    message.channel.send({embed})
  .catch(e => logger.error(e));
 })
}
 });
////////////////////////////////////////////////////////////
client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(' **__ليس لديك صلاحيات__**');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
client.on('message', message => {
         
 
  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
 
       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
 
.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true)
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)
 
 
.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}
 
 
 
});
///////////////////////////////////////////////////////////////////
client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);//Me حقوق
 })
  }  
 });

///////////////////////////////////////////////////////////////////////

client.on('message', message => {
    if (message.content === "$server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('ffffff')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Server Id :',`${message.guild.id}`,true)
         .addField(':date: Create Date: ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: Server Owner:',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: Members : ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: Channels:' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: Region:',message.guild.region)
         .addField(':ribbon: Server Emojis :',`${message.guild.emojis.size}`,true)
         .addField(':construction: VerificationLevel:',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: Roles Count : '+message.guild.roles.size+' ','Type`$roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });
////////////////////////////////////////////////////////////
client.on('message', message => {

  let online = client.guilds.get("574280967829717014").emojis.find(r => r.name === "online")
let dnd = client.guilds.get("574280967829717014").emojis.find(r => r.name === "dnd")
let adle = client.guilds.get("574280967829717014").emojis.find(r => r.name === "adle")
let offline = client.guilds.get("574280967829717014").emojis.find(r => r.name === "offline")
    if(message.content == '$member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
${online}   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
${dnd}       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
${adle}     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}   
${offline}   ${message.guild.members.filter(m=>m.presence.status == 'offline').size} 
:blue_heart:   all:  ${message.guild.memberCount}**`)         
             .setColor(0xd3d0c4)
            .setFooter(`D Bot `)
         message.channel.send({embed})
    }
  });
var AsciiTable = require('ascii-data-table').default
client.on('message', message =>{

    if(message.content == "$roles"){
        var 
        ros=message.guild.roles.size,
        data = [['Rank', 'RoleName']]
        for(let i =0;i<ros;i++){
            if(message.guild.roles.array()[i].id !== message.guild.id){
         data.push([i,`${message.guild.roles.filter(r => r.position == ros-i).map(r=>r.name)}`])
        }}
        let res = AsciiTable.table(data)

        message.channel.send(`**\`\`\`xl\n${res}\`\`\`**`);
    }
});

client.on('message',async message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");

     		var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'help') {
        const embed = new Discord.RichEmbed()

       .setDescription(`**
       ${arrow}${prefix}general
       ${arrow}${prefix}admin
       ${arrow}${prefix}music
       **`)
             .setAuthor(`D Bot Help Menu`)
        .setFooter(`D Bot`)

    message.channel.send(embed)


       
       
       


   }

});
client.on('message',async message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");

     		var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'music ') {
        const embed = new Discord.RichEmbed()

       .setDescription(`**
       ${arrow}${prefix}play [song name] or [link] |تشغيل اغنية
       ${arrow}${prefix}skip | تخطي اغنية
       ${arrow}${prefix}queue | قائمة الاغاني
       ${arrow}${prefix}stop | لاطلاع البوت من الروم
       ${arrow}${prefix}pause | لايقاف الاغنية مؤقت
       ${arrow}${prefix}volume | لتحديد قوة الصوت
       ${arrow}${prefix}search [music name] | للبحث عن اغنية محددة
       ${arrow}${prefix}loop | لتشغيل و ايقاف الايعادة الطلقائية
       **`)
             .setAuthor(`D Bot Help Menu`)
        .setFooter(`D Bot`)

    message.channel.send(embed)
    }
});

client.on('message',async message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");

     		var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'admin') {
        const embed = new Discord.RichEmbed()

       .setDescription(`**
       ${arrow}${prefix}dr |  حذف كل الرتب
       ${arrow}${prefix}dc | حذف كل الرومات
       ${arrow}${prefix}setvoice |voice online
       ${arrow}${prefix}lock | تسكير الروم 
       ${arrow}${prefix}unlock | فتح الروم
       ${arrow}${prefix}hide | اخفاء روم 
       ${arrow}${prefix}show | اظهار روم 
       ${arrow}${prefix}ban | حظر عضو 
       ${arrow}${prefix}kick | طرد عضو
       ${arrow}${prefix}mute | اعطاء ميوت
       ${arrow}${prefix}unmute | فك الميوت
       ${arrow}${prefix}role @human/@Bot/@all [role name] | لاعطاء رول
       ${arrow}${prefix}setcount | عمل روم باعضاء السيرفر
       ${arrow}${prefix}setrole (role name) | لوضع رول السبورت
       ${arrow}create category name [Tickets] | تحديد في اي كاتيجوري التكت
       ${arrow}${prefix}add @mention | لاضافة عضو للتكت
       ${arrow}${prefix}remove @mention |لطرد عضو من التكت
       ${arrow}${prefix}temp on | تشغيل الرومات المؤفتة
       ${arrow}${prefix}clear |مسح الشات
       **`)
             .setAuthor(`D Bot Help Menu`)
        .setFooter(`D Bot`)

    message.channel.send(embed)

client.on("message", message => {
    var prefix ="$";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(`${args}\n 
**by server:** ${message.guild.name}
`);
            });
          
            message.channel.send(`** عدد الاعضاء المرسل لهم: ${message.guild.memberCount}  **`)     
                      
        }
        } else {
            return;
        }
    });
       
       
       


   }

});

client.on('message',async message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");

     		var command = message.content.toLowerCase().split(" ")[0];

  	if(command == prefix + 'music') {

        const embed = new Discord.RichEmbed()

       .setDescription(`**
       ${arrow}${prefix}play [song name] or [link] |تشغيل اغنية
       ${arrow}${prefix}skip | تخطي اغنية
       ${arrow}${prefix}queue | قائمة الاغاني
       ${arrow}${prefix}stop | لاطلاع البوت من الروم
       ${arrow}${prefix}pause | لايقاف الاغنية مؤقت
       ${arrow}${prefix}volume | لتحديد قوة الصوت
       ${arrow}${prefix}search [music name] | للبحث عن اغنية محددة
       ${arrow}${prefix}loop | لتشغيل و ايقاف الايعادة الطلقائية
       **`)
             .setAuthor(`D Bot Help Menu`)
        .setFooter(`D Bot`)

    message.channel.send(embed)
    }
});


client.on('message',async message => {
let arrow = client.guilds.get("553508691425361940").emojis.find(r => r.name === "arrow");

     		var command = message.content.toLowerCase().split(" ")[0];
	if(command == prefix + 'general') {
        const embed = new Discord.RichEmbed()

       .setDescription(`**
       ${arrow}${prefix}credits
       ${arrow}${prefix}daily
       ${arrow}${prefix}credits @mention credits 
       ${arrow}${prefix}id | معلومات الحساب
       ${arrow}${prefix}user | تاريخ الحساب
       ${arrow}${prefix}server | معلومات السيرفر
       ${arrow}${prefix}new | لفتح تكت
       ${arrow}${prefix}close |اغلاق التكت
       ${arrow}${prefix}member | لمعرفة حالات الاعضاء
       **`)
             .setAuthor(`D Bot Help Menu`)
        .setFooter(`D Bot`)

    message.channel.send(embed)
    }
});








const  RichEmbed = require("discord.js");
const yt_api_key = "AIzaSyDV2JNcnCiCEW99ON7vvwBN5JkDWaIXkXc"
const ytdl = require("ytdl-core");
const devs = ["530062292969062412"]   
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const bot = require('./package.json');
const simpleytapi = require('simple-youtube-api')
const youtube = new simpleytapi(yt_api_key);
var guilds = {};

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
 
client.on('message', async function(message) {
    if(message.author.bot) return;
    if(!message.channel.guild) return;
    //////////////////////////////////
    const novc = "**:x: You are not in a voice channel.**"
    const yt = "✅"
    const correct = "✅"
    const nope = "❌"
    let args = message.content.split(' ').slice(1).join(" ");

    if (message.content.startsWith(`${prefix}eval`)) {
        const eargs = message.content.split(" ").slice(1);
        if(!devs.includes(message.author.id)) return;
        const clean = text => {
            if (typeof(text) === "string")
              return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
            else
                return text;
          }
        try {
          const code = eargs.join(" ");
          let evaled = eval(code);
    
          if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);    
          message.channel.send(clean(evaled), {code:"xl"});
        } catch (err) {
          message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
      } else if(message.content.toLowerCase().startsWith(`${prefix}help`)) {
       const { music, info } = require('./help');
       if(!args) return message.channel.send({embed: {
           author: {
               name: `${client.user.username} Help`,
               icon_url: client.user.avatarURL
           },
           description: `🏳 Want more help? \`\`${prefix}help <command>\`\` | Total Commands: **${music.map(m => m.name).length + info.map(m => m.name).length}**`,
           fields: [
               {
                name: '❯ Music Commands',
                value: `${music.map(m =>`\`\`${m.name}\`\``).join(" ")}`
               }, 
               {
                   name: "❯ Info Commands",
                   value: `${info.map(m =>`\`\`${m.name}\`\``).join(" ")}`
               }
           ], 
           color: 0xF19894,
           footer: {
               text: `${client.user.username} ${bot.version} Beta`
           }
       }})
       const foundCommand = music.find(m => m.name === args.toLowerCase()) || info.find(m => m.name === args.toLowerCase())
       if(foundCommand) {
        return message.channel.send("", {embed: {
            author: {
                name: `${foundCommand.name[0].toUpperCase() + foundCommand.name.slice(1)} Help`,
                icon_url: "https://images-ext-2.discordapp.net/external/ixx9VwaXIvBi71wGahYe_NzG51gFQonnXVBl2eEbQmk/https/cdn.pixabay.com/photo/2012/04/14/16/26/question-34499_960_720.png?width=473&height=473"
            },
            fields: [
                {
                 name: '❯ Description',
                 value: foundCommand.desc
                }, 
                {
                name: '❯ Usage',
                value: `\`\`${prefix + foundCommand.usage}\`\``,
                inline: true
                },
                {
                name: `❯ Aliases`,
                value: foundCommand.aliases.map(m => m).join(" ") || "N/A",
                inline: true
                }
            ], 
            color: 0xF19894,
        }})
       } else return message.channel.send({embed: {
        description:`**No command found with this name \`${args}\`**`,
        color: 0xff0000,
    }});
      }

      if(message.content.startsWith(`${prefix}info`)) {
        function convertMS(ms) {
            var d, h, m, s;
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            return {
                d: d,
                h: h,
                m: m,
                s: s
            };
        };   
        let u = convertMS(client.uptime);
        let uptime = u.d + " days  , " + u.h + " hrs  , " + u.m + " mins  , " + u.s + " secs"
        message.channel.send(new RichEmbed() 
        .setAuthor(client.user.username,client.user.avatarURL)
        .addField("Version", bot.version, true)
        .addField("Library", "[discordjs](https://www.npmjs.com/search?q=discord.js)", true)
        .addField("Creator", "Abady", true)
        .addField("Users", `${client.users.size}`, true)
        .addField('RAM Usage',`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`,true)     
        .setFooter(`Uptime ${uptime} | ${client.user.username} doesn't use Lavalink!`)
        .setColor("RANDOM")
    )
      }

      else if(message.content.startsWith(`${prefix}contact`)) {
        if(!args) return message.channel.send(`Get in touch with me, leave a message. (Real Inqiures Only) \`\`m-contact (Your message)\`\``)
        if(args.length < 2) return message.channel.send(`Your message haven't delivered. make sure your message is more than one word.`)
        client.users.get(devs[0]).send(`${args}\n\n Server: ${message.guild.name} - User: ${message.author.tag}`).then(()=> {
            message.channel.send(`**Thank you!** Your message have been delivered. I'll try to reply as soon as possible.`, {files: ['https://pbs.twimg.com/media/DeikbSqV0AAUSUU.jpg']})
        })
     } else if (message.content.toLowerCase().startsWith(`${prefix}lyric`)) {
const lyricistapi = require('lyricist');
const lyric = new lyricistapi("3u50HX1N0KeDBMCN_y3W126tTcJizSOz-yJtJE7TOmQepOGkAPuzQhuZiRLG9BDn");
try {
    if(!args) {
        args = guilds[message.guild.id].queueNames[0].replace(/\[[^\]]*\]/g, "").replace(/ *\([^)]*\) */g, "").replace(/[^\w\s]/gi, "");
    } 
} catch (error) {
    return message.channel.send(`:x: Missing args.`)
}
const song = await lyric.search(args)
if(song[0]) {
const msg22 = await message.channel.send(`:bookmark_tabs: Fetching **${song[0].full_title}** Lyrics.`);
const songlyrics = await lyric.song(song[0].id, {fetchLyrics: true, textFormat: "dom"})
let fixedsonglyrics;
if(songlyrics.lyrics.length > 2047) fixedsonglyrics = songlyrics.lyrics.slice(0, 2000 - songlyrics.url.length) + `......\n\n[**Continue Here**](${songlyrics.url})`
else fixedsonglyrics = songlyrics.lyrics
msg22.edit("", {embed: {
    description: `\n${fixedsonglyrics}`,
    color:  0x7ec0ee,
    title: songlyrics.full_title,
    url: songlyrics.url,
    thumbnail: {
        url: songlyrics.header_image_url,
    },
}})
} else return message.channel.send(`:x: No results for **\`\`${args}\`\`**`)
     }

     function clear() { 
        guilds[message.guild.id].queue = [];
        guilds[message.guild.id].queueNames = [];
        guilds[message.guild.id].isPlaying = false;
        guilds[message.guild.id].dispatcher = null
        guilds[message.guild.id].voiceChannel = null;
        guilds[message.guild.id].skipReq = 0;
        guilds[message.guild.id].skipReq = [];
        guilds[message.guild.id].loop = false;
        guilds[message.guild.id].volume = 1;
    }
    
    const mess = message.content.toLowerCase();

    if (!guilds[message.guild.id]) {
        guilds[message.guild.id] = {
            queue: [],
            queueNames: [],
            isPlaying: false,
            dispatcher: null,
            voiceChannel: null,
            volume: 1,
            skipReq: 0,
            skippers: [],
            loop: false
        };
    }


    if (mess.startsWith(prefix + "play") || mess.startsWith(prefix+"شغل")) {
        if (message.member.voiceChannel || guilds[message.guild.id].voiceChannel != null) {
        const voiceChannel = message.member.voiceChannel
        const permissions = voiceChannel.permissionsFor(message.client.user)
        if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "🛑 I don't have permission to CONNECT! Give me some."}});
        if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "🛑 I don't have permission to SPEAK! Give me some."}});
         if (args.length == 0 || !args) return message.channel.send(`:musical_note: m-play **<Youtube URL / Search>**`)
            if (guilds[message.guild.id].queue.length > 0 || guilds[message.guild.id].isPlaying) {
                if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
                    description: `🔒 Sorry, max queue length is 100, do **${prefix}clear** to clear entire queue or **${prefix}clear <number>** to clear 1 item`
                }})
                if(args.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi) && !isYoutube(args)) {
                return message.channel.send(`:x: For some reasons you canno't play any other YT stream if it's not number #1 in queue. Do **\`\`clear\`\`** and try again.`)
                    }
                 if (args.match(/[?&]list=([^#\&\?]+)/)) {
                    const playlist = await youtube.getPlaylist(args);
                    if(!playlist) return message.channel.send(`:x: I couldn't get this playlist!`)
                    const videos = await playlist.getVideos();
                    const queuesync = 100 - guilds[message.guild.id].queue.length
                    if(queuesync < 0 || queuesync == 0) return message.channel.send(`:x: Cannot add this playlist, **\`\`MAX_QUEUE = 100\`\`** clear the current queue and try again!`)
                    videos.filter(m => m.thumbnails !== undefined).slice(0, queuesync).forEach(video => {
                        guilds[message.guild.id].isPlaying = true;
                        guilds[message.guild.id].queueNames.push(video.title)
                        guilds[message.guild.id].queue.push(video.id)
                    })
                    return message.channel.send(`[:musical_score: __${playlist.title}__] **${queuesync}** items Added to the **Queue**!`)                    ;
                }
                message.channel.send(`**${yt} Searching :mag_right: \`\`${args}\`\`**`).then(()=> {
                getID(args, function(id) {
                if(!id) return message.channel.send(`:x: I couldn't find anything with this title **${args}**.`);
                   fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`).then(message.react(nope));
                        else message.react(correct)
                        add_to_queue(id, message);
                        message.channel.send(new RichEmbed()
                        .setAuthor("Added to queue", message.author.avatarURL)
                        .setTitle(videoInfo.title)      
                        .setURL(videoInfo.url)
                        .addField("Channel", videoInfo.owner, true)
                        .addField("Duration", convert.fromS(videoInfo.duration, 'mm:ss') , true)
                        .addField("Published at", videoInfo.datePublished, true)
                        .addField("Postion in queue", guilds[message.guild.id].queueNames.length, true)
						.setColor("RED")
						.setThumbnail(videoInfo.thumbnailUrl)
                        )
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                    });
                })
            })
            } else {
            if (args.match(/[?&]list=([^#\&\?]+)/)) {
                const playlist = await youtube.getPlaylist(args);
                if(!playlist) return message.channel.send(`:x: I couldn't get this playlist!`)
                const videos = await playlist.getVideos(100)
                playMusic(videos[0].id, message)
                guilds[message.guild.id].queueNames.push(videos[0].title)
                guilds[message.guild.id].queue.push(videos[0].id)
                videos.filter(m => m.thumbnails !== undefined).slice(1, 100).forEach(video => {
                    guilds[message.guild.id].isPlaying = true;
                    guilds[message.guild.id].queueNames.push(video.title)
                    guilds[message.guild.id].queue.push(video.id)
                })
                return message.channel.send(`[:musical_score: __${playlist.title}__] **${videos.filter(m => m.thumbnails !== undefined).slice(0, 100).length}** items Added to the **Queue**!\nPlaying :notes: **\`\`${videos[0].title}\`\`** ― Now!`)                    ;
            } else {
                if(args.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi) && !isYoutube(args)) {
                    if(guilds[message.guild.id].queue[0]) return message.channel.send(`:x: For some reasons you canno't play any other YT stream if it's not number #1 in queue. Do **\`\`clear\`\`** and try again.`)
                    playMusic(args, message).catch(err => message.channel.send(`<:megErrOr:475075170231517184> That's not something to play!`))
                    guilds
                    guilds[message.guild.id].isPlaying = true;
                    return message.channel.send(`:arrow_forward: Now playing from **${args}**`);
                    } else { 
                message.channel.send(`${yt} **Searching :mag_right: \`\`${args}\`\` **`).then(() => {
                getID(args, function(id) {
                    if(!id) return message.channel.send(`:x: I couldn't find anything with this title **${args}**.`);
                    fetchVideoInfo(id, function(err, videoInfo) {
                        if (err) throw new Error(err);
                        if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`).then(message.react(nope))
                        else message.react(correct)
                        playMusic(id, message);
                        guilds[message.guild.id].isPlaying = true;
                        guilds[message.guild.id].queue.push(id);
                        guilds[message.guild.id].queueNames.push(videoInfo.title);
                        message.channel.send(`Playing :notes: **\`\`${videoInfo.title}\`\`** ― Now!`);
                    })
                })})}}
            }
        } else {
            message.channel.send(novc);
        }

    } else if (mess.startsWith(prefix + "skip") || mess.startsWith(prefix+"عدي")) {
        if(!message.member.voiceChannel) return message.channel.send(novc)
        if(message.member.hasPermission('MANAGE_CHANNELS')) {
        if (guilds[message.guild.id].queueNames[0]) {
            message.channel.send(`**:fast_forward: Skipped** ${guilds[message.guild.id].queueNames[0]}`);
            return skip_song(message);
        } else return message.channel.send(`**:x: Nothing playing in this server**`);
        }
        else
        if (guilds[message.guild.id].skippers.indexOf(message.author.id) === -1) {
            guilds[message.guild.id].skippers.push(message.author.id);
            guilds[message.guild.id].skipReq++;
            if (guilds[message.guild.id].skipReq >= Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2)) {
                if (guilds[message.guild.id].queueNames[0]) {
                message.channel.send(`**:fast_forward: Skipped** ${guilds[message.guild.id].queueNames[0]}`);
                skip_song(message);
                } else return message.channel.send(`**:x: Nothing playing in this server**`);
            } else {
                message.channel.send(`:point_up::skin-tone-1: **${message.author.username}** has voted to skip current song! **${Math.floor(Math.ceil((guilds[message.guild.id].voiceChannel.members.size - 1) / 2) - guilds[message.guild.id].skipReq)}** more votes to skip!`);
            }
        } else {
            message.channel.send("<:megX:476797393283710991> you already voted to skip!");
        }

    } else if (mess.startsWith(prefix + "queue") || mess.startsWith(prefix+"قائمة")) {
        if(guilds[message.guild.id].queueNames.length < 1) return message.channel.send(`**:x: Nothing playing in this server**`);
        const numbaone = await youtube.getVideoByID(guilds[message.guild.id].queue[0])
        if(!guilds[message.guild.id].queueNames[1]) return message.channel.send('', {embed: {
        description: `__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})** \`\`${convert.fromS(numbaone.durationSeconds)}\`\` `,
        author: {
        name: `${message.guild.name}'s Queue.`,
        icon_url: message.guild.iconURL
        },
        color: 3447003
        }});
        else {
            let x;
            if(args > 1) {
             x = Math.floor(args)*10+1
            } else {
              x = Math.floor(11)
            }
            let i;
            if(args > 1) {
                i = x-11
               } else {
                 i = 0
               }
            //? Following is depracted, I'am going to use a queueTimes in guilds.
            // var queueTimes = [];            
            // for (var s = 0; s < x; s++) {
            // const videos = await youtube.getVideoByID(guilds[message.guild.id].queue[s])
            // let time = videos.durationSeconds
            // if(!videos.durationSeconds) time = 0
            // queueTimes.push(Math.floor(time))
            // }
            //?
            let queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
            if(!queuelist) return message.channel.send(`<:megX:476797393283710991> | Page doesn't exist!`)
            const embed = new RichEmbed()
            embed.setDescription(`__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue:** ${guilds[message.guild.id].queueNames.length}`)
            embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/73/YouTube_Music.png")
            embed.setAuthor(`${message.guild.name}'s Queue (${Math.floor(x/10)} / ${Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10)})`)
            embed.setColor(3447003);
            message.channel.send(embed).then(async msg => {
                if(Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10) > 1) {
                    await msg.react("⏪")
                    await msg.react("◀")
                    await msg.react("🔵")
                    await msg.react("▶")
                    await msg.react("⏩")
                    const pages = Math.floor((guilds[message.guild.id].queue.slice(1).length+10) /10)
                    let page = Math.floor(x/10)
                    const back = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "◀" && user.id === message.author.id, {time: 60000})
                    const doubleback = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "⏪" && user.id === message.author.id, {time: 60000})
                    const doubleforwad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "⏩" && user.id === message.author.id, {time: 60000})
                    const forwad = msg.createReactionCollector((reaction, user) => reaction.emoji.name === "▶" && user.id === message.author.id, {time: 60000})
                    back.on('collect', async r => {
                        if(page === 1) return;
                        await r.remove(message.author);
                        await page--
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue:** ${guilds[message.guild.id].queueNames.length}`)
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                    forwad.on('collect', async r => {
                        if(page === pages) return;
                        await r.remove(message.author);
                        await page++
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue:** ${guilds[message.guild.id].queueNames.length}`)
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                    doubleback.on('collect', async r => {
                        if(page === 1) return;
                        await r.remove(message.author);
                        page = 1
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue:** ${guilds[message.guild.id].queueNames.length}`)
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                    doubleforwad.on('collect', async r => {
                        if(page === pages) return;
                        await r.remove(message.author);
                        page = pages
                        x = Math.floor(page)*10+1
                        i = x-11
                        queuelist = guilds[message.guild.id].queueNames.slice(x-10,x).map(song => `**\`\`${++i}.\`\`** [${song}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[i]})`).join('\n\n')
                        embed.setDescription(`__Now Playing:__\n**[${guilds[message.guild.id].queueNames[0]}](https://www.youtube.com/watch?v=${guilds[message.guild.id].queue[0]})**\n\n:arrow_down: __Up Next__  :arrow_down:\n\n${queuelist}\n\n**Total items in queue:** ${guilds[message.guild.id].queueNames.length}`)
                        embed.setAuthor(`${message.guild.name}'s Queue (${page} / ${pages})`)
                        msg.edit(embed)
                    })
                } else return; 
            }) 
        }
    }

if(mess.startsWith(prefix+"np")) {
    const short = require('short-number');
    if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) return message.channel.send(`**:x: Nothing playing in this server**`)
    await message.channel.startTyping()
    const embed = new RichEmbed()
    await fetchVideoInfo(guilds[message.guild.id].queue[0], function(err, videoInfo) {
                        if (err) { 
                             embed.setAuthor("Now Playing", client.user.avatarURL)
                             embed.setTitle(guilds[message.guild.id].queueNames[0])
                             embed.setURL(guilds[message.guild.id].queue[0])
                             throw new Error(err);
                        } else { 
                            embed.setAuthor(`Now Playing`, client.user.avatarURL)
                            embed.setTitle(videoInfo.title)      
                            embed.setURL(videoInfo.url)
                            embed.addField("Channel", `[**${videoInfo.owner}**](https://youtube.com/channel/${videoInfo.channelId})`, true)
                            embed.addField("Duration", `${convert.fromS(videoInfo.duration, 'mm:ss')} — [**Download MP3**](https://www.flvto.biz/sa/downloads/mp3/yt_${videoInfo.videoId})`, true)
                            embed.addField("Views", short(videoInfo.views), true)
                            embed.addField("Likes/Dislikes", `👍 **${short(videoInfo.likeCount)}** / 👎 **${short(videoInfo.dislikeCount)}**`, true)
                            embed.setColor("RED")
                            embed.setImage(videoInfo.thumbnailUrl)
                        }
                        message.channel.stopTyping(true);
                        message.channel.send(embed)
    })
}

if(mess.startsWith(prefix+"stop") || mess.startsWith(prefix+"اطلع")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
    if (guilds[message.guild.id].voiceChannel)
    { 
    await clear()
    message.guild.voiceConnection.disconnect();
    message.channel.send(`**:mailbox_with_no_mail: Successfully disconnected!**`)
    }
}

if(mess.startsWith(prefix+"stfu") || message.content.startsWith(`<@${client.user.id}> stfu`)) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying) guilds[message.guild.id].dispatcher.end();
    if (guilds[message.guild.id].voiceChannel)
    { 
    await clear()
    message.guild.voiceConnection.disconnect();
    message.channel.send(`:cry: k sempai!`)
    }
}

if(message.content.startsWith(prefix+"search")) {
    let index = 0
    if(!args) return message.channel.send(`:x: You didn't enter a query!`)
    const videos = await youtube.searchVideos(args, 5)
    message.channel.send(`**${yt} Search Results for \`\`${args}\`\`**`,{embed: {
    description: `**__Song Selection__** Type the number of the song or do **cancel** to cancel!\n\n${videos.map(song =>`**${++index}. [${song.title}](${song.url})**`).join('\n')}`,
    footer: {
        text: `Requested by ${message.author.username} (${message.author.id})`,
        icon_url: message.author.avatarURL
    }
    }})
try {
var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11 || msg2.content === 'cancel' || msg2.content.startsWith("m-search") && msg2.author.id === message.author.id, {
    maxMatches: 1,
    time: 30000,
    errors: ['time'],
});
} catch (error) {
return message.channel.send(`**:x: Timeout**`) 
}
if(guilds[message.guild.id].queue.length > 100) return message.channel.send(``, {embed: {
    description: `🔒 Sorry, max queue length is 100, do **${prefix}clear** to clear entire queue or **${prefix}clear <number>** to clear 1 item`
}})
if(!message.member.voiceChannel) return;
if(response.first().content === 'cancel') return message.channel.send(`Alright, I've **cancelled** this opreation.`)
if(response.first().content === 'm-search') return;
const videoIndex = parseInt(response.first().content)
const voiceChannel = message.member.voiceChannel
const permissions = voiceChannel.permissionsFor(message.client.user)
if (!permissions.has('CONNECT')) return message.channel.send({embed: {description: "🛑 I don't have permission to CONNECT! Give me some."}});
if (!permissions.has('SPEAK')) return message.channel.send({embed: {description: "🛑 I don't have permission to SPEAK! Give me some."}});    
const id = videos[videoIndex - 1].id;
message.delete();
if(!guilds[message.guild.id].queue[0] || !guilds[message.guild.id].isPlaying) {
fetchVideoInfo(id, function(err, videoInfo) {
if (err) throw new Error(err);
if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`).then(message.react(nope));
if(!message.member.voiceChannel) return message.channel.send(novc); 
else message.react(correct)
playMusic(id, message);
guilds[message.guild.id].isPlaying = true;
guilds[message.guild.id].queue.push(id);
guilds[message.guild.id].queueNames.push(videos[videoIndex - 1].title);
message.channel.send(`Playing :notes: **\`\`${videos[videoIndex - 1].title}\`\`** ― Now!`);
});
} else {
        fetchVideoInfo(`${id}`, function(err, videoInfo) {
            if (err) throw new Error(err);
            if(videoInfo.duration > 1800) return message.channel.send(`**${message.author.username}, :x: Cannot play a video that's longer than 30 minutes**`).then(message.react(nope));
            else message.react(correct)
            add_to_queue(id, message);
            message.channel.send(new RichEmbed()
            .setAuthor("Added to queue", message.author.avatarURL)
            .setTitle(videoInfo.title)
            .setURL(videoInfo.url)
            .addField("Channel", videoInfo.owner, true)
            .addField("Duration", convert.fromS(videoInfo.duration, 'mm:ss') , true)
            .addField("Published at", videoInfo.datePublished, true)
            .addField("Postion in queue", guilds[message.guild.id].queueNames.length, true)
            .setColor("RED")
            .setThumbnail(videoInfo.thumbnailUrl)
            )
            guilds[message.guild.id].queueNames.push(videoInfo.title);
        });
}
    }


else if (mess.startsWith(prefix + 'vol') || mess.startsWith(prefix + "volume")|| mess.startsWith(prefix+"صوت")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: Nothing playing in this server**")
    if(!args) return message.channel.send(`**:loud_sound: Current Volume:** ${guilds[message.guild.id].dispatcher.volume*100}`)
    if(isNaN(args)) return message.channel.send(`**:x: Volume must be a number -_-**`)
    if (args > 200) return message.channel.send('**:headphones: For some health reasons the max vol you can use is ``200``, kthx**');
    if (args < 1) return message.channel.send("**:headphones: you can set volume from ``1`` to ``200``**");
    guilds[message.guild.id].dispatcher.setVolume((0.01 * parseInt(args)))
    guilds[message.guild.id].volume = 0.01 * parseInt(args)
    message.channel.send(`**:loud_sound: Volume:** ${guilds[message.guild.id].dispatcher.volume*100}`);
}


else if (mess.startsWith(prefix + 'pause') || mess.startsWith(prefix+"وقف")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(guilds[message.guild.id].isPlaying !== true || !guilds[message.guild.id].queue[0]) return message.channel.send(`**:x: Nothing playing in this server**`)
    if (guilds[message.guild.id].dispatcher.paused === true) return message.channel.send("*:hash: Already paused*")
    message.channel.send(':pause_button: **Paused**').then(() => {
        guilds[message.guild.id].dispatcher.pause(false);
    });
}

else if (mess.startsWith(prefix + 'resume') || mess.startsWith(prefix+"كمل")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (guilds[message.guild.id].dispatcher.paused === false) return message.channel.send("*:hash: Nothing to resume.*")
    message.channel.send(':play_pause: **Resuming**').then(() => {
        guilds[message.guild.id].dispatcher.resume();
    });
}


//? ONE ITEM WORKS, BUT QUEUE NO... ==> QUEUE LOOP SYSTEM IN 2.0

else if (mess.startsWith(prefix + 'loop') || mess.startsWith(prefix+"عيد")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if (!guilds[message.guild.id].isPlaying) return message.channel.send("**:x: Nothing playing in this server**")
    if(guilds[message.guild.id].loop === true) {
        message.channel.send(`:arrow_right_hook: **Looping Disabled**`)
        guilds[message.guild.id].loop = false;        
        return;
    } else if(guilds[message.guild.id].loop === false) {
    guilds[message.guild.id].loop = true;
    message.channel.send(':repeat_one: **Looping Enabled!**')
    return;
    }
    
} 
/* else if(mess.startsWith(`${prefix}shuffle`)) {
//     if(!guilds[message.guild.id].queue[2]) return message.channel.send(`:x: It seems you can't do that right now.`)
//     shuffle(guilds[message.guild.id].queue.slice(1) , guilds[message.guild.id].queueNames.slice(1))
//     message.channel.send(`:twisted_rightwards_arrows: Queue shuffled.`)
}*/
else if (mess.startsWith(prefix + 'join') || mess.startsWith(prefix+"ادخل")) {
    if (!message.member.voiceChannel) return message.channel.send(novc);
    if(!guilds[message.guild.id].isPlaying && guilds[message.guild.id].queueNames.length <= 0) {
        message.member.voiceChannel.join().then(message.react(correct));
        message.channel.send(`**:page_facing_up: Queue moved to \`\`${message.member.voiceChannel.name}\`\`**`)
    } else {
        message.channel.send(`<:megX:476797393283710991> **Music is being played in another voice channel!**`)
    }
}





//
async function skip_song(message) {
  await guilds[message.guild.id].dispatcher.end();
}

async function playMusic(id, message) {
    guilds[message.guild.id].voiceChannel = message.member.voiceChannel;
    guilds[message.guild.id].voiceChannel.join().then(function(connection) {
        if(!isYoutube(id) && id.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi)) {
            stream = id
        } else {
        stream = ytdl("https://www.youtube.com/watch?v=" + id, {
            filter: 'audioonly',
            quality: 'highestaudio',
            audioEncoding: "opus"
        })};
        guilds[message.guild.id].skipReq = 0;
        guilds[message.guild.id].skippers = [];
        guilds[message.guild.id].dispatcher = connection.playStream(stream, {bitrate: "auto", volume: guilds[message.guild.id].volume})
        guilds[message.guild.id].dispatcher.on('end', async function() {
            guilds[message.guild.id].skipReq = 0;
            guilds[message.guild.id].skippers = [];
           if(guilds[message.guild.id].loop === true) return playMusic(guilds[message.guild.id].queue[0], message)
           else                      
           await guilds[message.guild.id].queue.shift();
           await guilds[message.guild.id].queueNames.shift();
            if (guilds[message.guild.id].queue.length === 0) {
                guilds[message.guild.id].queue = [];          
                guilds[message.guild.id].queueNames = [];
                guilds[message.guild.id].isPlaying = false;
                setTimeout(function() {
                if(guilds[message.guild.id].voiceChannel !== null) return message.channel.send(`**:stop_button: Queue concluded.** Please rate the audio quality https://www.strawpoll.me/16407689`)
            }, 1000)
            } else {
                setTimeout(async function() {
                    if(!guilds[message.guild.id].queueNames || guilds[message.guild.id].queueNames[0] == undefined) return;
                    await playMusic(guilds[message.guild.id].queue[0], message);
                   message.channel.send(`Playing :notes: **\`\`${guilds[message.guild.id].queueNames[0]}\`\`** ― Now!`)
                }, 500);
            }
        });
        guilds[message.guild.id].dispatcher.on('error', function(error) {
          return message.channel.send(`<:megErrOr:475075170231517184> An error occurd! \`\`\`${error}\`\`\``)
        });
    });
}



async function getID(str, cb) {
    if (isYoutube(str)) {
         const video = await youtube.getVideo(str)
         cb(video.raw.id);
    } else {
        const video = await youtube.searchVideos(str, 1)
        if(!video) return cb(null); 
        cb(video.map(m => m.id).toString());
    }
}

function add_to_queue(strID, message) {
    if (isYoutube(strID)) {
        guilds[message.guild.id].queue.push(getYouTubeID(strID));
    } else {
        guilds[message.guild.id].queue.push(strID);
    }
}

//! DEPRCATED V
// function search_video(query, callback) {
//     request("https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=" + encodeURIComponent(query) + "&key=" + yt_api_key, function(error, response, body) {
//         var json = JSON.parse(body);
//         if (!json.items[0]) callback("3_-a9nVZYjk");
//         else {
//             callback(json.items[0].id.videoId);
//         }
//     });
// }
function isYoutube(str) {
    return str.toLowerCase().indexOf("youtube.com") > -1 || str.toLowerCase().indexOf("youtu.be") > -1;
}

// function shuffle(a, b) {
//     for (var i = a.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [a[i], a[j]] = [a[j], a[i]];
//         [b[i], b[j]] = [b[j], b[i]];
//     }
//     return a, b;
// }
////////////////


client.on('message' , message => {

    if(message.content.startsWith( "$invite")) {
 

message.channel.send(`**Link: https://discordapp.com/oauth2/authorize?client_id=562701721772752897&permissions=8&scope=bot

**`)
}
})
});


client.on('message', message => {
   
      if(message.content === prefix + "hide") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: false
 })
              message.channel.send('**Channel Hided Successfully ! :white_check_mark:  **')            
 }
});


client.on('message', message => {
   
      if(message.content === prefix + "show") {
      if(!message.channel.guild) return;
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('**You Dont Have Perms :x:**');
             message.channel.overwritePermissions(message.guild.id, {
             READ_MESSAGES: true
 })
              message.channel.send('**Channel Showed Successfully ! :white_check_mark:  **')            
 }
});
////////////////////////////////////////////////////////////



client.on('message', message => {
     if (message.author.bot) return;
if (message.content.startsWith(prefix + "uptime")) {
    let uptime = client.uptime;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let notCompleted = true;

    while (notCompleted) {

        if (uptime >= 8.64e+7) {

            days++;
            uptime -= 8.64e+7;

        } else if (uptime >= 3.6e+6) {

            hours++;
            uptime -= 3.6e+6;

        } else if (uptime >= 60000) {

            minutes++;
            uptime -= 60000;

        } else if (uptime >= 1000) {
            seconds++;
            uptime -= 1000;

        }

        if (uptime < 1000)  notCompleted = false;

    }

    message.channel.send("`" + `${days} days, ${hours} hrs, ${minutes} , ${seconds} sec` + "`**🎛 **");

}
});

client.on('message', message => {
    if(message.content === "$bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**🌐 عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)

               message.channel.sendEmbed(embed);
           }
});

const sql = require('sqlite');
const path = require('path');
sql.open(path.join(__dirname, 'credits.sql')) // read sql file
.then(() => { // then ?
    console.log('Opened') // if the sql opened
    sql.run(`CREATE TABLE IF NOT EXISTS creditSysteme (id VARCHAR(30), credits BIGINT, timeDaily BIGINT)`) // create new table if the table does'nt exosts
})
.catch(err => console.error(err)) // if the sql file does'nt exists
 
const ms = require('parse-ms'); // package time ?
client.on("message", async msg => { // event message
    if(!msg.channel.guild) return; // channel guild
    let men = msg.mentions.users.first() || msg.author; // the mention or the author
    let prize =  msg.content.split(" ").slice(2).join(" ") // prize
 
    if(msg.content.startsWith(prefix+"credits")) { // if the message content credits do
        if(!men || !men === undefined) return msg.channel.send("** :interrobang: | "+men.username+", I can't find "+men.username+"!**"); // undefind user
        if(!prize) {
        sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`).then(res => { // select user from table
            if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if the user does'nt exisit in table
            if(res) { // if user exsist
                    msg.channel.send("**"+men.username+" :credit_card: balance is ``"+res.credits+"$``.**") // reply
            }
        })
        }else{ // else ?
            if(isNaN(prize)) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // is nan :)
            if(parseFloat(prize) === NaN) return msg.channel.send(" :interrobang: | "+msg.author.username+", type the credit you need to transfer!"); // if nan :))
            if(men === msg.author) return; // if the men = author
            let authorRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
            let userRes = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${men.id}'`) // select from sql
            if(!authorRes) sql.run(`INSERT INTO creditSysteme VALUES ('${msg.author.id}', 0, 0)`) // if !user create new col
            if(!userRes) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
            let authorCredits = authorRes.credits; // credits before transfer
            let userCredits = userRes.credits; // credits before transfer
            if(parseFloat(prize) > authorCredits) return msg.channel.send("** :thinking: | "+msg.author.username+", Your balance is not enough for that!**"); // if the balance hight then prize
            sql.run(`UPDATE creditSysteme SET credits = ${authorCredits - parseInt(prize)} WHERE id = '${msg.author.id}'`); // uptade credits for the author
            sql.run(`UPDATE creditSysteme SET credits = ${userCredits + parseInt(prize)} WHERE id = '${men.id}'`); // update credits for the mentions user
            msg.channel.send("**:moneybag: | "+msg.author.username+", has transferred ``$"+prize+"`` to "+men.toString()+"**") // the message :)
       men.send(`**:atm:  |  Transfer Receipt 
\`\`\`You have received ${prize} from user ${msg.author.username} (ID:${men.id})\`\`\`**`)
let channel = client.channels.get("592682731004231681")
        
     channel.send(`**:moneybag: | ${msg.author.username}, has transferred ${prize} to ${men.toString()}**`)
      channel.send("\`\`\` \`\`\`")

        
        }
    } else if(msg.content.startsWith(prefix+"daily")) {  // if the message content daily do
        let daily = 86400000; // 24h
        let amount = 200;// Money
    let res = await sql.get(`SELECT * FROM creditSysteme WHERE id = '${msg.author.id}'`) // select from sql
        if(!res) sql.run(`INSERT INTO creditSysteme VALUES ('${men.id}', 0, 0)`) // if !user create new col
    let time = res.timeDaily; // select last daily
    let credits = res.credits; // credits before daily
    if(time != null && daily - (Date.now() - time) > 0) { // if already climed the daily in same day
 
            let fr8 = ms(daily - (Date.now() - time)); // the remining time
            msg.channel.send("**:stopwatch: | "+msg.author.username+", your daily :yen: credits refreshes in "+fr8.hours+" hours and "+fr8.seconds+" seconds. **") //reply
 
        }else{ // if does'nt clim her daily in 24h
            msg.channel.send("**:atm:  |  "+msg.author.username+", you received your :yen: "+amount+" daily credits!**"); // reply
            sql.run(`UPDATE creditSysteme SET credits = ${credits + amount}, timeDaily = ${Date.now()} WHERE id = '${msg.author.id}'`); // add amount to the credits before daily
        }
    }
})

 
 
client.login("NTYyNzAxNzIxNzcyNzUyODk3.XRDSiQ.9vnipjNuDFTJm_ZkDBXABD4_Sng");
