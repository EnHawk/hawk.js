import {
    Awaitable,
    ClientEvents,
    Interaction,
    SlashCommandBuilder
} from "discord.js";

interface BaseCommandOptions<D, I> {
    scope: `Global` | `Local`;
    category?: `Economy` | `Fun` | `Moderation` | `Other`;
    data: D,
    execute(input: I): Awaitable<any>;
}

interface BaseEventOptions<N, E> {
    eventName: N;
    eventEmitter(...args: [E]): Awaitable<any>
}

export interface APICommandOptions {
    scope: CommandOptions[`scope`] | undefined;
    category?: CommandOptions[`category`] | undefined;
    data: CommandOptions[`data`] | undefined;
    execute: CommandOptions[`execute`] | undefined;
}

export interface APIEventOptions {
    eventName: EventOptions[`eventName`] | undefined;
    eventEmitter: EventOptions[`eventEmitter`] | undefined;
}

export interface CommandOptions extends BaseCommandOptions<SlashCommandBuilder, Interaction> {}

export interface EventOptions extends BaseEventOptions<keyof ClientEvents, ClientEvents[keyof ClientEvents]> {}