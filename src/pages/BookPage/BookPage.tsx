import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { cfg } from "src/config/config";
import { Category } from "src/models/models";
import SearchField from "src/pages/HomePage/components/SearchField";
import { RootState } from "src/store/store";

export default function BookPage() {
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
                </Stack>
            </Container>
        </Box>
    );
}