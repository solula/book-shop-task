import { Link } from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function Copyright() {
    return (
        <Typography variant="subtitle2" color="text.secondary" align="center">
            {"Copyright © Yury Solopov, "}
            {new Date().getFullYear()}
            {". Иконка взята с сайта "}
            <Link href="https://www.flaticon.com/ru/" color="inherit">
                flaticon.com
            </Link>
        </Typography>
    );
}

export default function Footer() {
    return (
        <Container
            maxWidth={false}
            component="footer"
            sx={{
                bgcolor: "background.paper",
                py: 1,
            }}
        >
            <Typography
                variant="body2"
                align="center"
                color="text.secondary"
                component="p"
            >
                {"По вопросам работы сайта писать на почту "}
                <Link color="inherit" href="mailto:yura.solopov@gmail.com">
                    {"yura.solopov@gmail.com"}
                </Link>
            </Typography>
            <Copyright />
        </Container>
    );
}
