import SearchInput from "../components/SearchInput";
import NotesList from "../components/NotesList";
import ActionButton from "../components/ActionButton";
import { IoIosAdd } from "react-icons/io";
import PropTypes from "prop-types";

const HomePage = ({ changeFilter, filter }) => {
    return (
        <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchInput changeFilter={changeFilter} filter={filter} />
            <NotesList isActiveNotes={true} filter={filter} />
            <div className="homepage__action">
                <ActionButton redirectTo="/notes/create" Icon={IoIosAdd} />
            </div>
        </section>
    );
};

HomePage.propTypes = {
    changeFilter: PropTypes.func.isRequired,
    filter: PropTypes.string.isRequired,
};

export default HomePage;
