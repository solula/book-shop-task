import { TextField } from "@mui/material";
import { useDispatch } from "react-redux";

export default function SearchField() {
    const dispatch = useDispatch();
    const setCategories = (selectedValue: string) => {
        dispatch({ type: "SET_SEARCH", payload: selectedValue });
    };

    return (
        <TextField
            required
            label="Book title"
            onChange={(e) => {
                const selectedValue = e.target.value as string;
                setCategories(selectedValue);
            }}
        />
    );
}
