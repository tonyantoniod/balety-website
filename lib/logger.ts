type LogLevel = "debug" | "info" | "warn" | "error"

interface LogEntry {
  level: LogLevel
  message: string
  timestamp: string
  context?: Record<string, any>
}

class Logger {
  private static instance: Logger

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger()
    }
    return Logger.instance
  }

  private log(level: LogLevel, message: string, context?: Record<string, any>): void {
    const timestamp = new Date().toISOString()
    const formattedContext = context ? JSON.stringify(context, null, 2) : ""

    // Simple console logging - perfect for Vercel
    switch (level) {
      case "debug":
        if (process.env.NODE_ENV === "development") {
          console.debug(`[${timestamp}] DEBUG: ${message}`, formattedContext)
        }
        break
      case "info":
        console.info(`[${timestamp}] INFO: ${message}`, formattedContext)
        break
      case "warn":
        console.warn(`[${timestamp}] WARN: ${message}`, formattedContext)
        break
      case "error":
        console.error(`[${timestamp}] ERROR: ${message}`, formattedContext)
        break
    }
  }

  public debug(message: string, context?: Record<string, any>): void {
    this.log("debug", message, context)
  }

  public info(message: string, context?: Record<string, any>): void {
    this.log("info", message, context)
  }

  public warn(message: string, context?: Record<string, any>): void {
    this.log("warn", message, context)
  }

  public error(message: string, context?: Record<string, any>): void {
    this.log("error", message, context)
  }
}

export const logger = Logger.getInstance()
