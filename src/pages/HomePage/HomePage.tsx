import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cfg } from "src/config/config";
import { Category } from "src/models/models";
import SearchField from "src/pages/HomePage/components/SearchField";
import { RootState } from "src/store/store";
import CategoriesSelect from "./components/CategoriesSelect";
import SortingSelect from "./components/SortingSelect";
import BooksCards from "./components/BookCards";

export default function HomePage() {
    const search = useSelector((state: RootState) => state.search.search);
    const categories = useSelector(
        (state: RootState) => state.categories.categories
    );
    const sorting = useSelector((state: RootState) => state.sorting.sorting);

    const dispatch = useDispatch();
    const handleButtonClick = () => {
        const errValidate = validate(search);
        if (errValidate) {
            return;
        }

        const url =
            `${cfg.apiHost}?key=${cfg.bookKey}` +
            makeSearchPath(search, categories, sorting);
        axios
            .get(url)
            .then((response) => {
                // Обработка полученных данных
                console.log(response.data);
                const books = response.data;
                dispatch({
                    type: "LOAD_BOOKS",
                    payload: books,
                });
                console.log(books);
            })
            .catch((error) => {
                // Обработка ошибок
                console.error(error);
            });
        console.log(url);
    };

    return (
        <Box
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="md" sx={{ mb: 8 }}>
                <Typography
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Search for books
                </Typography>
                <Typography
                    variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph
                >
                    This app offers a quick and easy way to select book
                    according to your wishes.
                </Typography>
                <Stack direction="column" spacing={2} justifyContent="center">
                    <SearchField />
                    <Stack direction="row" spacing={2} justifyContent="center">
                        <CategoriesSelect />
                        <SortingSelect />
                    </Stack>
                    <Button
                        variant="contained"
                        size="large"
                        color="secondary"
                        fullWidth
                        onClick={handleButtonClick}
                    >
                        Search
                    </Button>
                    <BooksCards />
                </Stack>
            </Container>
        </Box>
    );
}

function validate(search: string): Error | null {
    if (search === "") {
        return new Error("Error: search field cannot be empty.");
    }

    return null;
}

function makeSearchPath(
    search: string,
    categories: Category,
    sorting: string
): string {
    let searchString: string = `&q=${search}`;
    if (categories !== "all") {
        searchString += `+subject:${categories}`;
    }
    if (sorting !== "relevance") {
        searchString += `&orderBy=newest`;
    }
    return searchString;
}
