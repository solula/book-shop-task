import { Chip, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import { useContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "src/components/ui/Loading";
import AlertContext from "src/contexts/alertContext";
import useSearchPath from "src/hooks/useSearchPath";
import { Book } from "src/models/models";
import { RootState } from "src/store/store";

function BookCard({ book }: { book: Book }) {
    const navigate = useNavigate();

    if (!book || !book.volumeInfo) {
        return null;
    }

    return (
        <Card
            variant="elevation"
            sx={{
                borderRadius: 5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
        >
            {book.volumeInfo.imageLinks ? (
                <CardMedia
                    component="img"
                    sx={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        padding: "20px",
                    }}
                    image={book.volumeInfo.imageLinks.thumbnail}
                />
            ) : (
                <CardMedia
                    component="img"
                    sx={{
                        maxWidth: "200px",
                        margin: "0 auto",
                        padding: "20px",
                    }}
                    image="https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
                />
            )}

            <CardContent>
                {book.volumeInfo.categories &&
                book.volumeInfo.categories.length > 0 ? (
                    <Chip
                        label={book.volumeInfo.categories[0]}
                        color="secondary"
                    />
                ) : (
                    <Chip label="No categories" color="primary" />
                )}
            </CardContent>
            <CardContent sx={{ fontWeight: "bold" }}>
                {book.volumeInfo.title}
            </CardContent>
            <CardContent>
                {book.volumeInfo.authors
                    ? book.volumeInfo.authors.join(", ")
                    : "No authors"}
            </CardContent>
            <CardActions sx={{ marginTop: "auto", justifyContent: "center" }}>
                <Button
                    size="small"
                    fullWidth
                    onClick={() => navigate(`/books/${book.id}`)}
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}

const BooksCards = () => {
    const dispatch = useDispatch();
    const { showAlert } = useContext(AlertContext);
    const [loading, setLoading] = useState(false);

    const books = useSelector((state: RootState) => state.books.books);
    const loadedCount = useSelector(
        (state: RootState) => state.books.loadedCount
    );
    const makeSearchPath = useSearchPath();

    if (!books || books.length === 0) {
        return (
            <Typography sx={{ display: "flex", justifyContent: "center" }}>
                No books found
            </Typography>
        );
    }

    const handleButtonClick = () => {
        setLoading(true);
        const url = makeSearchPath(loadedCount);
        axios
            .get(url)
            .then((response) => {
                const books: Book[] = response.data.items;
                dispatch({
                    type: "ADD_BOOKS",
                    payload: books,
                });
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
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Grid container spacing={2}>
                        {Object.values(books).map((book) => (
                            <Grid
                                key={book.id}
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                xl={4}
                            >
                                <BookCard book={book} />
                            </Grid>
                        ))}
                    </Grid>
                </>
            )}
            <Button
                variant="contained"
                size="large"
                color="secondary"
                fullWidth
                onClick={handleButtonClick}
            >
                Load More
            </Button>
        </>
    );
};

export default BooksCards;
