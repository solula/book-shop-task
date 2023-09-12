export interface Config {
    basePath: string;
    apiHost: string;
    graphqlEndpoint: string;
}

export const cfg: Config = {
    basePath: process.env.REACT_APP_BASE_PATH!,
    apiHost: process.env.REACT_APP_API_HOST!,
    graphqlEndpoint: process.env.REACT_APP_GRAPHQL_ENDPOINT!,
};
