import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cfg } from "src/config/config";
import SearchField from "src/pages/HomePage/components/SearchField";
import { RootState } from "src/store/store";
import CategoriesSelect from "./components/CategoriesSelect";

export default function HomePage() {
    const search = useSelector((state: RootState) => state.search.search);
    const categories = useSelector(
        (state: RootState) => state.categories.categories
    );
    const handleButtonClick = () => {
        const errValidate = validate(search, categories);
        console.log(errValidate);
        if (errValidate) {
            return;
        }
        const url = `${cfg.apiHost}?key=${cfg.bookKey}` + makeSearchPath(search, categories);
        axios
            .get(url)
            .then((response) => {
                // Обработка полученных данных
                console.log(response.data);
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
                </Stack>
            </Container>
        </Box>
    );
}

function validate(search: string, categories: string): Error | null {
    if (search === "") {
        return new Error("Error: search field cannot be empty.");
    }
    
    return null;
}

function makeSearchPath(search: string, categories: string): string {
    let searchString: string = `&q=${search}`;
    if (categories !== "") {
        searchString += `+subject:${categories}`;
    }
    return searchString;
}