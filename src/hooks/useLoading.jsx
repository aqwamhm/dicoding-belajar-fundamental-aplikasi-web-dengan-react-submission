import { useState } from "react";

const useLoading = () => {
    const [isLoading, setIsLoading] = useState(false);

    const startLoading = () => setIsLoading(true);
    const stopLoading = () => setIsLoading(false);

    const renderWithLoading = (Content) => {
        return isLoading ? <p>Memuat data...</p> : Content;
    };

    return { startLoading, stopLoading, renderWithLoading };
};

export default useLoading;
