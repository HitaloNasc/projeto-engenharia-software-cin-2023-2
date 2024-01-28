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

    dir: (message: any) => {
        console.dir(message);
    },

    initial: (message: string) => {
        console.log(COLORS.blue + message + COLORS.reset);
    },

    error: (message: string) => {
        console.error('[' + COLORS.red + 'ERROR' + COLORS.reset + '] ' + message);
    },
};
