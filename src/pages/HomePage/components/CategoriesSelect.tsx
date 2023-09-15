import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

export default function CategoriesSelect() {
    const [categories, setCategories] = useState("");

    const handleChange = (event: SelectChangeEvent) => {
        setCategories(event.target.value as string);
    };

    console.log(categories);
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={categories}
                label="Categories"
                onChange={handleChange}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}
