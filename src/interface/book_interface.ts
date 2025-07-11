import { Model } from "mongoose";

export enum Genre {
    FICTION = 'FICTION',
    NON_FICTION = 'NON_FICTION',
    SCIENCE = 'SCIENCE',
    HISTORY = 'HISTORY',
    BIOGRAPHY = 'BIOGRAPHY',
    FANTASY = 'FANTASY',
}

export interface IBook extends Document {
    title: string;
    author: string;
    genre: Genre;
    isbn: string;
    description?: string;
    copies: number;
    available: boolean;
    isAvailable(): Promise<boolean>;
}

export interface IBookModel extends Model<IBook> {
    isBookAvailable(id: string): Promise<boolean>;
}
