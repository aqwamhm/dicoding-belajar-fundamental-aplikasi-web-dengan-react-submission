import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";

class NotesList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="notes-list">
                {!this.props.notes.length ? (
                    <p>Tidak ada catatan</p>
                ) : (
                    this.props.notes.map((note) => {
                        return (
                            <NoteItem
                                key={note.id}
                                id={note.id}
                                title={note.title}
                                body={note.body}
                                createdAt={note.createdAt}
                            />
                        );
                    })
                )}
            </section>
        );
    }
}

NotesList.propTypes = {
    notes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            body: PropTypes.string,
            createdAt: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default NotesList;
