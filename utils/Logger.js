const chalk = require('chalk');

function pad(number) {
    return `${String(number).length > 1 ? '' : '0'}${number}`
}
    
function getTimestamp() {
    const currentDate = new Date();

    return `${pad(currentDate.getDate())}/${pad(currentDate.getMonth() + 1)}/${currentDate.getFullYear()} ${pad(currentDate.getHours())}:${pad(currentDate.getMinutes())}:${pad(currentDate.getSeconds())}`;
}

function log(message) {
    console.log(chalk.white.bgGray(`[${getTimestamp()}]`), chalk.blue('[LOG]'), chalk.white(message));
}

function warn(message) {
    console.log(chalk.white.bgGray(`[${getTimestamp()}]`), chalk.yellow('[WARN]'), chalk.white(message));
}

function error(message) {
    console.log(chalk.white.bgGray(`[${getTimestamp()}]`), chalk.red('[ERROR]'), chalk.white(message));
}

function info(message) {
    console.log(chalk.white.bgGray(`[${getTimestamp()}]`), chalk.magenta('[INFO]'), chalk.white(message));
}

module.exports = {
    log,
    warn,
    error,
    info
};