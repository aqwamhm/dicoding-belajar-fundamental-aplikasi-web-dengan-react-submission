import { useState } from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(true);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    const renderWithLoading = (Content) => {
        return isLoading ? <p>Memuat data...</p> : Content;
    };

    return { isLoading, startLoading, stopLoading, renderWithLoading };
};

export default useLoading;
