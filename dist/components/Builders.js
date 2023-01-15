const Discord = require(`discord.js`);

class CommandBuilder {
    scope;
    category;
    data;
    execute;
    toJSON() {
        return {
            ...this
        }
    };
    setScope(scope) {
        Reflect.set(this, `scope`, scope);

        return this;
    };
    setCategory(category) {
        Reflect.set(this, `category`, category);

        return this;
    };
    setData(input) {
        this._setData(input, Discord.SlashCommandBuilder);

        return this;
    };
    onExecute(callback) {
        Reflect.set(this, `execute`, callback);

        return this;
    };
    _setData(input, Instance) {
        const result = typeof input === `function` ? input(new Instance()) : input;

        Reflect.set(this, `data`, result);

        return this;
    };
};

class EventBuilder {
    eventName;
    eventEmitter;
    toJSON() {
        return {
            ...this
        }
    };
    setEvent(event, listener) {
        Reflect.set(this, `eventName`, event);
        Reflect.set(this, `eventEmitter`, listener);

        return this;
    };
    execute(...args) {
        switch (typeof this.eventEmitter) {
            case `function`:
                this.eventEmitter(args);
                break;
            default:
                throw new Error(`Type of 'eventEmitter' must be a function.`);
        };
    };
};

module.exports = {
    CommandBuilder,
    EventBuilder
};