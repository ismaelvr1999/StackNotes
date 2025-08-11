import { useState, useEffect } from "react";
const useDebouncedSearch = (callback: (value: string) => Promise<void>, delay: number) => {
    const [search, setSearch] = useState<string>('');
    useEffect(() => {
        const handlerTimeout = setTimeout(async () => {
            await callback(search);
        }, delay);
        return () => clearTimeout(handlerTimeout);
    }, [search]);

    return { search, setSearch };
}

export default useDebouncedSearch;