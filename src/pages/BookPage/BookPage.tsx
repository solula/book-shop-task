import { CardContent, CardMedia, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "src/store/store";

export default function BookPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const books = useSelector((state: RootState) => state.books.books);
    const book = books.find((book) => book.id === id);
    useEffect(() => {
        if (!book || !book.volumeInfo) {
            navigate(`/not_found`);
        }
    }, [book]);

    if (!book || !book.volumeInfo) {
        return null;
    }

    return (
        <Grid
            container
            spacing={2}
            margin={4}
            sx={{ justifyContent: "center", alignItems: "center" }}
        >
            <Grid xs={12} sm={6} md={6} lg={6} xl={4}>
                <Typography>
                    {book.volumeInfo.categories ? (
                        <Chip
                            label={book.volumeInfo.categories.join(", ")}
                            color="secondary"
                        />
                    ) : (
                        <Chip label="No categories" color="primary" />
                    )}
                </Typography>
                {book.volumeInfo.title && (
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                        {book.volumeInfo.title}
                    </Typography>
                )}
                <Typography>
                    {book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "No authors"}
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                    {book.volumeInfo.description
                        ? book.volumeInfo.description
                        : "No description"}
                </Typography>
            </Grid>
            <Grid xs={12} sm={6} md={6} lg={6} xl={4}>
                {book.volumeInfo.imageLinks ? (
                    <CardMedia
                        component="img"
                        sx={{
                            maxWidth: "300px",
                            margin: "0 auto",
                            padding: "20px",
                        }}
                        image={book.volumeInfo.imageLinks.thumbnail}
                    />
                ) : (
                    <CardMedia
                        component="img"
                        sx={{
                            maxWidth: "300px",
                            margin: "0 auto",
                            padding: "20px",
                        }}
                        image="https://books.google.ru/googlebooks/images/no_cover_thumb.gif"
                    />
                )}
            </Grid>
        </Grid>
    );
}
