# My First Slackbot

This project serves as a base to start creating a slackbot.

The tools used include:

- node
- npm
- [botkit](https://github.com/howdyai/botkit)
- [now.sh](https://now.sh)

What my botkit does..

1. Listens for any ambient mention of the word "what" and returns a hilarius meme.
2. Listens for any mention of the word "robot" or "human" and returns a list of users that are either bots or humans


Slack supports a number of different ways for your bot to connect. The most basic of which is Real Time Messaging (aka, RTM).

The Real Time Messaging API is an API that allows you to receive events from Slack in real time and send messages as a user. It is the basis for all Slack clients. It's also commonly used with the bot user integration to create helper bots for your team.

[Slack] will provide a stream of events, including both messages and updates to the current state of the team.

Almost everything that happens in Slack will result in an event being sent [...] The simplest event is a message sent from a user:
Botkit comes with support for RTM ready to go using the .startRTM() method.

Once the connection to the Real Time Messaging API is started, a Botkit bot can listen for keywords, commands, etc using the very useful method .hears().

.hears() allows our bot to optionally listen for different message types. 3 useful ones are:

mention: When someone uses your bot's name anywhere in their message
> Ash: Hey everyone, check out @awesomebot my new bot!
direct_mention: When someone starts their message with your bot's name
> Ash: @awesomebot how are you doing?
direct_message: When someone sends a private chat message to your bot
You can read about more Slack event types in the Botkit documentation

Useful Resources

Key Resources

Botkit documentation
Botkit adapter for Slack
Slack API Documentation
Examples

Powered by Botkit
Slackbot Community
Advanced Reading

Great in-depth tutorial on writing a Slackbot
Create a Slackbot using Botkit
Getting Started with Slackbots
