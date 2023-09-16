import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "src/App";
import { cfg } from "src/config/config";
import theme from "src/theme/theme";
import AlertProvider from "./providers/AlertProvider";
import store from "./store/store";

console.log(`App started with config ${JSON.stringify(cfg)}`);

const client = new ApolloClient({
    uri: cfg.bookKey,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <CssBaseline />
            <ApolloProvider client={client}>
                <AlertProvider defaultMessage={"Внутренная ошибка"}>
                    <App />
                </AlertProvider>
            </ApolloProvider>
        </Provider>
    </ThemeProvider>
);
