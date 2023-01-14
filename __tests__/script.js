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

    /**
     * @output
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
    .setName(`ready`)
    .onExecute(async function Execute() {
        console.log(`Bot is online.`)
    });

    /**
     * @output
     * EventBuilder {
     *   name: 'ready',
     *   execute: [AsyncFunction: Execute]
     * }
     */