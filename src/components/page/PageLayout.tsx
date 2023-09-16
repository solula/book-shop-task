import { Box } from "@mui/material";
import React from "react";
import Header from "./Header";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "grid",
                //gap: 2,
                gridTemplateRows: "auto 1fr auto",
                gridTemplateAreas: `"header"
                               "content"
                               "footer"`,
            }}
        >
            <Box sx={{ gridArea: "header" }}>
                <Header />
            </Box>
            <Box sx={{ gridArea: "content" }}>{children}</Box>
        </Box>
    );
}
