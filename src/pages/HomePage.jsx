import SearchInput from "../components/SearchInput";
import NotesList from "../components/NotesList";
import ActionButton from "../components/ActionButton";
import { IoIosAdd } from "react-icons/io";
import PropTypes from "prop-types";

const HomePage = ({ changeFilter, filter, notes }) => {
    return (
        <section className="homepage">
            <h2>Catatan Aktif</h2>
            <SearchInput changeFilter={changeFilter} filter={filter} />
            <NotesList notes={notes} />
            <div className="homepage__action">
                <ActionButton redirectTo="/notes/create" Icon={IoIosAdd} />
            </div>
        </section>
    );
};

HomePage.propTypes = {
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

export default HomePage;
