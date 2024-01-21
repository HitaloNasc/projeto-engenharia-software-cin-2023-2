export interface Repository {
    list(): Promise<any[]>;
    create(data: any): Promise<any>;
    delete(data: any): Promise<any>; 
}
