import { createLogger, format, transports } from 'winston';

const logger = createLogger({
    transports: [
        new transports.Console(),
        new transports.File({
            dirname: 'build/src/Logs',
            filename: 'error.log',
            level: 'error'
        }),
        new transports.File({
            dirname: 'build/src/Logs',
            filename: 'combined.log'
        })
    ],
    format: format.combine(
        format.colorize(),
        format.timestamp(),
        format.printf(({level, message, timestamp}) => {
            return `${timestamp} ${level}: ${message}`;
        })
    )
});

export default logger;
