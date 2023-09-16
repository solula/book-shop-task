import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import Loading from "src/components/ui/Loading";
import AlertContext from "src/contexts/alertContext";
import useSearchPath from "src/hooks/useSearchPath";
import { Book } from "src/models/models";
import SearchField from "src/pages/HomePage/components/SearchField";
import BooksCards from "./components/BookCards";
import CategoriesSelect from "./components/CategoriesSelect";
import SortingSelect from "./components/SortingSelect";

export default function HomePage() {
    const [showBooks, setShowBooks] = useState(false);
    const [numberOfBooks, setNumberOfBooks] = useState(0);
    const dispatch = useDispatch();
    const makeSearchPath = useSearchPath();
    const { showAlert } = useContext(AlertContext);

    const [loading, setLoading] = useState(false);

    const handleFormSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true);
        const url = makeSearchPath(0);
        axios
            .get(url)
            .then((response) => {
                const books: Book[] = response.data.items;
                dispatch({
                    type: "LOAD_BOOKS",
                    payload: books,
                });
                setShowBooks(true);
                setNumberOfBooks(response.data.totalItems);
                setLoading(false);
            })
            .catch((error) => {
                showAlert(
                    error?.response?.data?.error?.message
                        ? error.response.data.error.message
                        : "Internal error"
                );
                setLoading(false);
            });
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
            <Container maxWidth="lg" sx={{ mb: 8 }}>
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
                <Stack
                    component={"form"}
                    onSubmit={handleFormSumbit}
                    direction="column"
                    spacing={2}
                    justifyContent="center"
                >
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
                        type="submit"
                    >
                        Search
                    </Button>
                    {loading ? (
                        <Loading />
                    ) : (
                        <>
                            {numberOfBooks > 0 && (
                                <Typography
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {`${numberOfBooks} books found`}
                                </Typography>
                            )}
                            {showBooks && <BooksCards />}
                        </>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}
