export class Properties {
    public blogsURL: string;
    public usersURL: string;
    private static _instance: Properties;

    public static get Instance() {
        return this._instance || (this._instance = new this());
    }

    constructor() {    
        this.blogsURL = 'https://jsonplaceholder.typicode.com/posts';
        this.usersURL = 'https://jsonplaceholder.typicode.com/users';
    }
}