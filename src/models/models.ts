export interface Book {
    id: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
        categories: string[];
        imageLinks: {
            smallThumbnail: string;
            thumbnail: string;
        };
    };
}

export type Category =
    | "all"
    | "art"
    | "biography"
    | "computers"
    | "history"
    | "medical"
    | "poetry";
export const defaultCategory = "all";


export type Sorting =
    | "newest"
    | "relevance";
export const defaultSorting = "relevance";
