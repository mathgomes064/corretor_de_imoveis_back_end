export interface IImovelCreate{
    status: boolean;
    image: string;
    name: string;
    description: string;
    valor_compra: number;
    valor_venda: number;
    created_at: Date;
    userId: string; 
}

export interface IImovelUpdate{
    status?: boolean;
    name?: string;
    description?: string;
    valor_compra?: number;
    valor_venda?: number;
}