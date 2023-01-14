import Discord from "discord.js";

export interface EventOptions {
    name: keyof Discord.ClientEvents,
    execute: (args: any) => any;
};

/**
 * Typings for event files.
 */
export class EventBuilder {
    /**
     * The name of the event.
     */
    public readonly name: EventOptions[`name`] | undefined = undefined;
    
    /**
     * The function of the event to be executed.
     */
    public readonly execute: EventOptions[`execute`] | undefined = undefined;

    /**
     * Returns final data in JSON form.
     */
    public toJSON(): any {
        return {
            ...this
        }
    };

    /**
     * Set the name of the event.
     * @param name - The name of the event.
     */
    public setName(name: EventOptions[`name`]): this {
        Reflect.set(this, `name`, name)

        return this;
    }

    /**
     * Actions whenever the event is being executed.
     * @param func - The function to be executed.
     */
    public onExecute(func: EventOptions[`execute`]): this {
        Reflect.set(this, `execute`, func);

        return this;
    };
};