import { Seler } from "./seler";

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    amount: number;
    date: string;
    seler: Seler;
}

export type SalesPage = {
    content?: Sale[];
    last: boolean;
    totalElements: number;
    totalPages: number;
    size?:number;
    number: number;
    first: boolean;
    numberOfElements?: number;
    empty?: boolean;
}

export type SalesSum = {
    sellerName: string;
    sum: number;
}

export type SalesSucess = {
    sellerName: string;
    visited: number;
    deals: number;

}