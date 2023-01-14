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
    onExecute(input) {
        Reflect.set(this, `execute`, input);

        return this;
    };
    _setData(input, Instance) {
        const result = typeof input === "function" ? input(new Instance()) : input;

        Reflect.set(this, `data`, result);

        return this;
    };
};

class EventBuilder {
    name;
    execute;
    toJSON() {
        return {
            ...this
        }
    };
    setName(name) {
        Reflect.set(this, `name`, name);

        return this;
    };
    onExecute(func) {
        Reflect.set(this, `execute`, func);

        return this;
    };
};

module.exports = {
    CommandBuilder,
    EventBuilder
};