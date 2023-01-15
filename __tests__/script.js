// Command Builder

const { CommandBuilder } = require(`../dist/index`);

const HelloWorldCommand = new CommandBuilder()
    .setScope(`Global`)
    .setCategory(`Fun`)
    .setData(
        data => data
        .setName(`helloworld`)
        .setDescription(`Replies with "Hello World!"`)
    )
    .onExecute(async function Execute(interaction) {
        await interaction.reply(`Hello World!`)
    });

console.log(HelloWorldCommand);
    /**
     * @returns
     * CommandBuilder {
     *     scope: 'Global',
     *     category: 'Fun',
     *     data: [SlashCommandBuilder]
     *     execute: [AsyncFunction: Execute]
     * }
     */

/**
 * ———————————————————————————————————————————————————————————————————————————————————————————————————————————————
 */

// Event Builder

const { EventBuilder } = require(`../dist/index`);

const ReadyEvent = new EventBuilder()
    .setEvent(`ready`, async function Execute() {
        console.log(`Bot is online.`)
    });

console.log(ReadyEvent);
    /**
     * @returns
     * EventBuilder {
     *   eventName: 'ready',
     *   eventEmitter: [AsyncFunction: Execute]
     * }
     */