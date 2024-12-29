class Logger {
    static log(level, label, value) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] [${level}] ${label}: ${value}`);
    }

    static info(label, value) {
        this.log("INFO", label, value);
    }

    static warn(label, value) {
        this.log("WARN", label, value);
    }

    static error(label, value) {
        this.log("ERROR", label, value);
    }
}

module.exports = Logger;