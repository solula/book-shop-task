import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Book } from "src/models/models";
import { RootState } from "src/store/store";

function BookCard({ book }: { book: Book }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={book.volumeInfo.imageLinks.thumbnail}
                title={book.volumeInfo.title}
            />
            <CardContent></CardContent>
            <CardActions>
                <Button size="small">Read More</Button>
            </CardActions>
        </Card>
    );
}

const BooksCards = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.books.books.books);
console.log(books);
    if (!books) {
        return <div>Books not found.</div>;
    }
    return (
        <div>
            {Array.isArray(books) &&
                books.map((book) => <BookCard book={book} />)}
        </div>
    );
};

export default BooksCards;
