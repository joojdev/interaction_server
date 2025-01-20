function Action(name, duration) {
    this.name = name;
    this.duration = duration; // In seconds
    this.createDate = Date.now();

    this.hasItExpired = () => {
        return Date.now() >= this.createDate + this.duration * 1000;
    };
}

module.exports = Action;
