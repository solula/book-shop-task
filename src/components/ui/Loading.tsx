import { Box, CircularProgress } from "@mui/material";

function Loading() {
    return (
        <Box
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <CircularProgress color="secondary" size={150} />
        </Box>
    );
}
export default Loading;
