import {
    CommandOptions,
    EventOptions
} from "./rawDataTypes";

import Discord from "discord.js";

// Collections
/**
 * Collection typings for ``client.commands``.
 */
declare class ClientCommands extends Discord.Collection<string, CommandOptions> {}

/**
 * Collection typings for ``client.events``.
 */
declare class ClientEvents extends Discord.Collection<string, EventOptions> {}

// Builders
/**
 * Typings for Slash Command files.
 * @example
 * const HelloWorldCommand = new CommandBuilder()
 * ⠀⠀.setScope("Global")
 * ⠀⠀.setCategory("Fun")
 * ⠀⠀.setData(
 * ⠀⠀⠀⠀data => data
 * ⠀⠀⠀⠀.setName("helloworld")
 * ⠀⠀⠀⠀.setDescription('Replies with "Hello World!"')
 * ⠀⠀)
 * ⠀⠀.onExecute(async interaction => {
 * ⠀⠀⠀⠀await interaction.reply("Hello World!")
 *   })
 */
declare class CommandBuilder {
    /**
     * The scope of the command.
     */
    public readonly scope: CommandOptions[`scope`];

    /**
     * The category of the command. (Optional)
     */
    public readonly category?: CommandOptions[`category`];

    /**
     * The data of the command.
     */
    public readonly data: CommandOptions[`data`];

    /**
     * The function of the command to be executed.
     */
    public readonly execute: CommandOptions[`execute`];

    /**
     * Returns final data in [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) form.
     */
    public toJSON(): any;

    /**
     * Set the scope of the command.
     * @param scope - The scope of the command.
     * @example
     * .setScope("Global")
     */
    public setScope(scope: CommandOptions[`scope`]): this;

    /**
     * **Optional**
     * 
     * Set the category of the command.
     * @param category - The category of the command.
     * @example 
     * .setCategory("Fun")
     */
    public setCategory(category: CommandOptions[`category`]): this;

    /**
     * Set the data of the command.
     * @param input - The data input of the command.
     * @example 
     * .setData(
     * // (*) = Required.
     *   data => data
     * ⠀⠀.setName("helloworld") // (*)
     * ⠀⠀.setDescription('Replies with "Hello World!"') // (*)
     * )
     */
    public setData(input: CommandOptions[`data`] | ((builder: CommandOptions[`data`]) => CommandOptions[`data`])): this;

    /**
     * Actions whenever the command is being executed.
     * @param func - The function to be executed.
     * @example 
     * .onExecute(async interaction => {
     * ⠀⠀await interaction.reply("Hello World!") 
     * })
     */
    public onExecute(func: CommandOptions[`execute`]): this;
    private _setData;
}

/**
 * Typings for event files.
 * @example
 * const ReadyEvent = new EventBuilder()
 * ⠀⠀.setName("ready")
 * ⠀⠀.onExecute(() => {
 * ⠀⠀⠀⠀return console.log("Bot is online.")
 * ⠀⠀})
 */
declare class EventBuilder {
    /**
     * The name of the event.
     */
    public readonly name: EventOptions[`name`];
    
    /**
     * The function of the event to be executed.
     */
    public readonly execute: EventOptions[`execute`];

    /**
     * Returns final data in [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) form.
     */
    public toJSON(): any;

    /**
     * Set the name of the event.
     * @param name - The name of the event.
     * @example
     * .setName("ready")
     */
    public setName(name: EventOptions[`name`]): this;

    /**
     * Actions whenever the event is being executed.
     * @param func - The function to be executed.
     * @example
     * .onExecute(() => {
     * ⠀⠀return console.log("Bot is online.")
     * })
     */
    public onExecute(func: EventOptions[`execute`]): this;
}