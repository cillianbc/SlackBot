/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */
var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
 })
bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
   }
 });
var bots = [];
var humans =[];
bot.api.users.list({},function(err,response) {
  response.members.forEach((obj)=>{
    if(obj.is_bot == true){
      bots.push(obj.name);
      }else{
        humans.push(obj.name);
      }
    })
})
controller.hears(['robot'], ['ambient'], function(whichBot, message) {
  whichBot.reply(message, bots.toString());
  })

controller.hears(['human'], ['ambient'], function(whichBot, message) {
  whichBot.reply(message, humans.toString());
  })
controller.hears(['what'], ['ambient'], function(whichBot, message) {
  whichBot.reply(message,'http://memesvault.com/wp-content/uploads/Okay-Meme-Lil-Jon-11.jpg');
  })
