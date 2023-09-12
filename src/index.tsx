import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import App from "src/App";
import { cfg } from "src/config/config";
import theme from "src/theme/theme";

console.log(`App started with config ${JSON.stringify(cfg)}`);

const client = new ApolloClient({
    uri: cfg.graphqlEndpoint,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </ThemeProvider>
);
