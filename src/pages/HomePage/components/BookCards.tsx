import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Unstable_Grid2";
import { useSelector } from "react-redux";
import { Book } from "src/models/models";
import { RootState } from "src/store/store";

function BookCard({ book }: { book: Book }) {
    if (!book || !book.volumeInfo || !book.volumeInfo.imageLinks) {
        // console.log(book.volumeInfo);
        // console.log(book);
        return null; // or you can render a placeholder image or display an error message
    }

    return (
        <Card
            variant="elevation"
            sx={{ borderRadius: 5, minHeight: "400px", height: "100%" }}
        >
            <CardMedia
                component="img"
                sx={{
                    maxWidth: "200px",
                    height: "300px",
                    margin: "0 auto",
                    padding: "20px",
                }}
                image={book.volumeInfo.imageLinks.thumbnail}
            />
            <CardContent>{book.volumeInfo.categories && book.volumeInfo.categories[0]}</CardContent>
            <CardContent sx={{ fontWeight: 'bold' }}>{book.volumeInfo.title}</CardContent>
            <CardContent>{book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}</CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}

const BooksCards = () => {
    const books = useSelector((state: RootState) => state.books.books);
    console.log(books.length);
    if (books.length === 0) {
        return <div>Books not found.</div>;
    }
    return (
        <Grid container spacing={2}>
            {Object.values(books).map((book) => (
                <Grid xs={12} sm={12} md={12} lg={6} xl={4}>
                    <BookCard key={book.id} book={book} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BooksCards;
