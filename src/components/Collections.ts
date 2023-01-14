import Discord from "discord.js";
import { CommandOptions } from "./Command";
import { EventOptions } from "./Event";

/**
 * Collection typings for ``client.commands``.
 */
export class ClientCommands extends Discord.Collection<string, CommandOptions> {};

/**
 * Collection typings for ``client.events``.
 */
export class ClientEvents extends Discord.Collection<string, EventOptions> {};