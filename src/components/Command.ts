import Discord from "discord.js";

export interface CommandOptions {
    scope: `Global` | `Local`;
    category?: `Economy` | `Fun` | `Moderation` | `Other`;
    data: Discord.SlashCommandBuilder;
    execute: (input: Discord.Interaction) => any;
};

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
    public readonly execute: Function | undefined = undefined;

    /**
     * Returns final data in JSON form.
     */
    public toJSON(): any {
        return {
            ...this
        }
    };

    /**
     * Set the scope of the command.
     * @param scope - The scope of the command.
     */
    public setScope(scope: CommandOptions[`scope`]): this {
        Reflect.set(this, `scope`, scope);
        
        return this;
    };

    /**
     * (Optional) Set the category of the command.
     * @param category - The category of the command.
     */
    public setCategory(category: CommandOptions[`category`]): this {
        Reflect.set(this, `category`, category);

        return this;
    };

    /**
     * Set the data of the command.
     * @param input - The data input of the command.
     */
    public setData(input: CommandOptions[`data`] | ((builder: CommandOptions[`data`]) => CommandOptions[`data`])): this {
        Reflect.set(this, `data`, input);

        return this;
    };

    /**
     * Actions whenever the command is being executed.
     * @param func - The function to be executed.
     */
    public onExecute(func: CommandOptions[`execute`]): this {
        Reflect.set(this, `execute`, func);

        return this;
    };
};