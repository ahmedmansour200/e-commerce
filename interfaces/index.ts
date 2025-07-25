export interface IProduct {
    id?: string;
    title: string;
    body?: string | null;
    price: number;
    image: string [];
    color: string [];
    size: string [];
    createdAt?: Date |null;
}
