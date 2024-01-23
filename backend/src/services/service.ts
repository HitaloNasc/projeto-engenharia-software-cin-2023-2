export interface Service {
    execute(...args: any[]): Promise<any | any[]>;
}
