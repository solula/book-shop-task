import { Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box/Box";
import Container from "@mui/material/Container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { cfg } from "src/config/config";
import SearchField from "src/pages/HomePage/components/SearchField";
import CategoriesSelect from "./components/CategoriesSelect";

export default function HomePage() {
    const navigate = useNavigate();

    const uri = `${cfg.apiHost}/volumes?key=${cfg.bookKey}?`;

    axios
        .get(uri)
        .then((response) => {
            // Обработка полученных данных
            console.log(response.data);
        })
        .catch((error) => {
            // Обработка ошибок
            console.error(error);
        });

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
                    The app offers a quick and easy way to select book according
                    to your wishes.
                </Typography>
                <SearchField />
                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <CategoriesSelect />
                    <CategoriesSelect />
                </Stack>
            </Container>
        </Box>
    );
}
