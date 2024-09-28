import { useContext } from "react";
import NotesList from "../components/NotesList";
import SearchInput from "../components/SearchInput";
import PropTypes from "prop-types";
import { LocaleContext } from "../contexts/LocaleContext";

const ArchivesPage = ({ changeFilter, filter }) => {
    const { locale } = useContext(LocaleContext);
    return (
        <section className="homepage">
            <h2>{locale == "id" ? "Catatan Arsip" : "Archived Notes"}</h2>
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
