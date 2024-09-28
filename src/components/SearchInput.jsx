import PropTypes from "prop-types";
import { useContext } from "react";
import { LocaleContext } from "../contexts/LocaleContext";

const SearchInput = ({ filter, changeFilter }) => {
    const { locale } = useContext(LocaleContext);
    const handleChange = (event) => {
        changeFilter(event.target.value);
    };

    return (
        <section className="search-bar">
            <input
                type="text"
                value={filter}
                onChange={handleChange}
                placeholder={
                    locale == "id"
                        ? "Cari berdasarkan judul ..."
                        : "Search by title ..."
                }
            />
        </section>
    );
};

SearchInput.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default SearchInput;
