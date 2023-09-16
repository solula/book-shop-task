import HomeIcon from "@mui/icons-material/Home";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="home"
                    sx={{ mr: 2 }}
                    onClick={() => navigate("/")}
                >
                    <HomeIcon />
                </IconButton>
                <Typography variant="h6" component="span">
                    BOOK SEARCH
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
