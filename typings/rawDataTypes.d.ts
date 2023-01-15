import {
    Awaitable,
    ClientEvents,
    Interaction,
    SlashCommandBuilder
} from "discord.js";

/**
 * Basic Options for the Command Options.
 */
interface BaseCommandOptions<D, I> {
    scope: `Global` | `Local`;
    category?: `Economy` | `Fun` | `Moderation` | `Other`;
    data: D,
    execute(input: I): Awaitable<any>;
}

/**
 * Basic Options for the Event Options.
 */
interface BaseEventOptions<N, E> {
    eventName: N;
    eventEmitter(...args: [E]): Awaitable<any>
}

/**
 * API Type Options of the Command Options.
 */
export interface APICommandOptions {
    scope: CommandOptions[`scope`] | undefined;
    category?: CommandOptions[`category`] | undefined;
    data: CommandOptions[`data`] | undefined;
    execute: CommandOptions[`execute`] | undefined;
}

/**
 * API Type Options of the Event Options
 */
export interface APIEventOptions {
    eventName: EventOptions[`eventName`] | undefined;
    eventEmitter: EventOptions[`eventEmitter`] | undefined;
}

/**
 * Main Options for the Command.
 */
export interface CommandOptions extends BaseCommandOptions<SlashCommandBuilder, Interaction> {}

/**
 * Main Options for the Event.
 */
export interface EventOptions extends BaseEventOptions<keyof ClientEvents, ClientEvents[keyof ClientEvents]> {}