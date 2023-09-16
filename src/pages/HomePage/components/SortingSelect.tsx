import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDispatch } from "react-redux";
import { defaultSorting } from "src/models/models";

export default function SortingSelect() {
    const dispatch = useDispatch();

    const setSorting = (selectedValue: string) => {
        dispatch({ type: "SET_SORTING", payload: selectedValue });
    };

    return (
        <FormControl fullWidth>
            <InputLabel>Sorting by</InputLabel>
            <Select
                label="Sorting by"
                defaultValue={defaultSorting}
                onChange={(e) => {
                    const selectedValue = e.target.value as string;
                    setSorting(selectedValue);
                }}
            >
                <MenuItem value={"relevance"}>relevance</MenuItem>
                <MenuItem value={"newest"}>newest</MenuItem>
            </Select>
        </FormControl>
    );
}
