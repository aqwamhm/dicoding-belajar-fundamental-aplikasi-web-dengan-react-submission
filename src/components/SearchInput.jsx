import PropTypes from "prop-types";
import React from "react";

class SearchInput extends React.Component {
    handleChange = (event) => {
        this.props.changeFilter(event.target.value);
    };

    render() {
        return (
            <section className="search-bar">
                <input
                    type="text"
                    value={this.props.filter}
                    onChange={this.handleChange}
                    placeholder="Cari berdasarkan judul ..."
                />
            </section>
        );
    }
}

SearchInput.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
};

export default SearchInput;
