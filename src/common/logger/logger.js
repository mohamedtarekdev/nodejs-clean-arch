class Logger {
  constructor() {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  log(level, message, metadata) {
    console.log({
      level,
      timestamp: new Date(),
      message,
      metadata,
    });
  }

  info(message, metadata) {
    this.log("info", message, metadata);
  }

  error(message, metadata) {
    this.log("error", message, metadata);
  }

  warn(message, metadata) {
    this.log("warn", message, metadata);
  }

  debug(message, metadata) {
    this.log("debug", message, metadata);
  }
}

export default new Logger();
