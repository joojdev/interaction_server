const Action = require('./Action')

function Session(id) {
    this.id = id;
    this.actions = [];

    this.registerAction = (name, duration) => {
        const action = new Action(name, duration);
        this.actions.push(action);
    }

    this.gatherActions = () => {
        return this.actions.filter((action) => !action.hasItExpired());
    }
}

module.exports = Session;