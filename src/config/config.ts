export interface Config {
    basePath: string;
    apiHost: string;
    bookKey: string;
}

export const cfg: Config = {
    basePath: process.env.REACT_APP_BASE_PATH!,
    apiHost: process.env.REACT_APP_GOOGLE_BOOK_API_HOST!,
    bookKey: process.env.REACT_APP_GOOGLE_BOOK_KEY!,
};
