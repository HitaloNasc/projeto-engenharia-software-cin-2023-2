/* eslint-disable no-console */
export const COLORS = {
    red: '\u001b[31m',
    blue: '\u001b[34m',
    reset: '\u001b[0m',
};

export const Logger = {
    log: (message: string) => {
        console.log('[' + COLORS.blue + 'LOG' + COLORS.reset + '] ' + message);
    },

    dir: (message: object) => {
        console.dir(message);
    },

    initial: (message: string) => {
        console.log(COLORS.blue + message + COLORS.reset);
    },
};