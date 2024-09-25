import NotesList from "../components/NotesList";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";

const ArchivesPage = ({ changeFilter, filter }) => {
    return (
        <section className="homepage">
            <h2>Catatan Arsip</h2>
            <SearchInput changeFilter={changeFilter} filter={filter} />
            <NotesList isActiveNotes={false} filter={filter} />
        </section>
    );
};

ArchivesPage.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default ArchivesPage;
