import { useSelector } from "react-redux";
import { cfg } from "src/config/config";
import { RootState } from "src/store/store";

export default function useSearchPath(): (startIndex: number) => string {
    const search = useSelector((state: RootState) => state.search.search);
    const categories = useSelector(
        (state: RootState) => state.categories.categories
    );
    const sorting = useSelector((state: RootState) => state.sorting.sorting);

    return function (startIndex: number): string {
        let searchString: string = `${cfg.apiHost}?key=${cfg.bookKey}&maxResults=30&startIndex=${startIndex}&q=${search}`;
        if (categories !== "all") {
            searchString += `+subject:${categories}`;
        }
        if (sorting !== "relevance") {
            searchString += `&orderBy=newest`;
        }
        return searchString;
    };
}
