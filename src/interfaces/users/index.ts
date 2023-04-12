export interface IUser{
    id: string;
    name: string;
    email: string;
    senha: string;
    contato: string;
    created_at: Date;
}

export interface IUserCreate{
    id: string;
    name: string;
    email: string;
    senha: string;
    contato: string;
    created_at: Date;
}