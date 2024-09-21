import React from "react";
import NotesList from "../components/NotesList";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";

class ArchivesPage extends React.Component {
    render() {
        return (
            <section className="homepage">
                <h2>Catatan Arsip</h2>
                <SearchInput
                    changeFilter={this.props.changeFilter}
                    filter={this.props.filter}
                />
                <NotesList notes={this.props.notes} />
            </section>
        );
    }
}

ArchivesPage.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string,
            createdAt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ArchivesPage;
