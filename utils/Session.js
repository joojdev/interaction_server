function Session(id) {
    this.id = id;
    this.actions = [];

    this.registerAction = (action) => {
        this.actions.push(action);
    }

    this.gatherActions = () => {
        return this.actions;
    }
}

module.exports = Session;