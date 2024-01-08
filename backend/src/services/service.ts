export interface Service {
    execute(): Promise<any[]>
}