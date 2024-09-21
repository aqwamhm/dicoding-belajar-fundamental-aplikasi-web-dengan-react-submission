import React from "react";
import SearchInput from "../components/SearchInput";
import NotesList from "../components/NotesList";
import ActionButton from "../components/ActionButton";
import { IoIosAdd } from "react-icons/io";
import PropTypes from "prop-types";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="homepage">
                <h2>Catatan Aktif</h2>
                <SearchInput
                    changeFilter={this.props.changeFilter}
                    filter={this.props.filter}
                />
                <NotesList notes={this.props.notes} />
                <div className="homepage__action">
                    <ActionButton redirectTo="/notes/create" Icon={IoIosAdd} />
                </div>
            </section>
        );
    }
}

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
