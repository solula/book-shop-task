import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { defautlCategory } from "src/models/models";
import { RootState } from "src/store/store";

export default function CategoriesSelect() {
    const dispatch = useDispatch();
    const setCategories = (selectedValue: string) => {
        dispatch({ type: "SET_CATEGORIES", payload: selectedValue });
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Categories</InputLabel>
            <Select
                label="Categories"
                defaultValue={defautlCategory}
                onChange={(e) => {
                    const selectedValue = e.target.value as string;
                    setCategories(selectedValue);
                }}
            >
                <MenuItem value={"all"}>all</MenuItem>
                <MenuItem value={"art"}>art</MenuItem>
                <MenuItem value={"biography"}>biography</MenuItem>
                <MenuItem value={"computers"}>computers</MenuItem>
                <MenuItem value={"history"}>history</MenuItem>
                <MenuItem value={"medical"}>medical</MenuItem>
                <MenuItem value={"poetry"}>poetry</MenuItem>
            </Select>
        </FormControl>
    );
}
