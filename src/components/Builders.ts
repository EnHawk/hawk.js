import Discord from "discord.js";
import { APICommandOptions,  APIEventOptions,CommandOptions, EventOptions } from "../../typings/rawDataTypes";

/**
 * Typings for Slash Command files.
 */
export class CommandBuilder {
    /**
     * The scope of the command.
     */
    public readonly scope: CommandOptions[`scope`] | undefined = undefined;

    /**
     * The category of the command. (Optional)
     */
    public readonly category?: CommandOptions[`category`];

    /**
     * The data of the command.
     */
    public readonly data: CommandOptions[`data`] | undefined = undefined;

    /**
     * The function of the command to be executed.
     */
    public readonly execute: CommandOptions[`execute`] | undefined = undefined;

    /**
     * Returns the final data in JSON form.
     */
    public toJSON(): APICommandOptions {
        return { 
            ...this 
        }
    };

    /**
     * Set the scope of the command
     * @param scope - The scope of the command.
     */
    public setScope(scope: CommandOptions[`scope`]): this {
        Reflect.set(this, `scope`, scope);

        return this;
    };

    /**
     * (Optional) Set the category of the command
     * @param category - The category of the command.
     */
    public setCategory(category: CommandOptions[`category`]): this {
        Reflect.set(this, `category`, category);

        return this;
    };

    /**
     * Set the data of the command
     * @param input - The data input of the command.
     */
    public setData(input: CommandOptions[`data`] | ((builder: CommandOptions[`data`]) => CommandOptions[`data`])): this {
        Reflect.set(this, `data`, input);

        return this;
    };

    /**
     * Actions whenever the command is being executed.
     * @param callback - The function to be executed.
     */
    public onExecute(callback: CommandOptions[`execute`]): this {
        Reflect.set(this, `execute`, callback);

        return this;
    };
};

/**
 * Typings for event files.
 */
export class EventBuilder {
    /**
     * The name of the event.
     */
    public readonly eventName: EventOptions[`eventName`] | undefined = undefined;

    /**
     * T
     */
    public readonly eventEmitter: EventOptions[`eventEmitter`] | undefined = undefined;

    /**
     * Returns the final data in JSON form.
     */
    public toJSON(): APIEventOptions {
        return { 
            ...this 
        }
    };

    /**
     * Set the event listener
     * @param event - The name of the event.
     * @param listener - The function to be executed.
     */
    public setEvent<E extends EventOptions[`eventName`], K extends EventOptions[`eventEmitter`]>(
        event: E, 
        listener: K
    ): this {
        Reflect.set(this, `eventName`, event);
        Reflect.set(this, `eventEmitter`, listener);

        return this;
    };

    /**
     * Execute the event
     * @param args - Additional parameter for the matching event
     */
    public execute<A extends Discord.ClientEvents[keyof Discord.ClientEvents]>(...args: A): any {
        switch (typeof this.eventEmitter) {
            case `function`:
                this.eventEmitter(args);
                break;
            default:
                throw new Error(`Type of 'eventEmitter' must be a function.`);
        };
    };
};