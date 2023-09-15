import { Stack, TextField } from "@mui/material";
import { useState } from "react";

export default function SearchField() {
    const [bookTitle, setBookTitle] = useState("");
    const [error, setError] = useState("");

    const handleBookTitleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBookTitle(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleFormSubmit();
        }
    };

    const handleFormSubmit = () => {
        const inputElement = document.getElementById(
            "fullWidth"
        ) as HTMLInputElement;
        if (inputElement.value.trim() === "") {
            setError("Please enter a book title.");
        } else {
            setBookTitle(inputElement.value);
            setError("");
        }
    };

    console.log(bookTitle);
    return (
        <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
        >
            <TextField
                fullWidth
                id="fullWidth"
                label="Book title"
                onKeyDown={handleKeyDown}
                error={!!error}
                helperText={error}
            />
        </Stack>
    );
}
