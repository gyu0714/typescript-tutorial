class EagerLogger {
  private static uniqueObject: EagerLogger = new EagerLogger();

  private EagerLogger() {}

  public static getLogger(): EagerLogger {
    return this.uniqueObject;
  }

  public info(message: string) {
    console.log('info : ', message);
  }

  public warning(message: string) {
    console.log('warning : ', message);
  }
}

let logger: EagerLogger = EagerLogger.getLogger();
let logger2: EagerLogger = EagerLogger.getLogger();
logger.info(`같은 객체 ? ${(logger = logger2)}`);
