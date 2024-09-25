import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import useLoading from "../hooks/useLoading";
import { getActiveNotes, getArchivedNotes } from "../utils/network-data";

const NotesList = ({ isActiveNotes = true, filter = "" }) => {
    const [notes, setNotes] = useState([]);
    const { startLoading, stopLoading, renderWithLoading } = useLoading();

    useEffect(() => {
        async function fetchData() {
            startLoading();

            const result = isActiveNotes
                ? await getActiveNotes()
                : await getArchivedNotes();
            setNotes(result.data);
            stopLoading();
        }

        fetchData();
    }, [isActiveNotes]);

    const filteredNotes = notes.filter((note) =>
        note.title.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <section className="notes-list">
            {renderWithLoading(
                !notes.length ? (
                    <p>Tidak ada catatan</p>
                ) : (
                    filteredNotes.map((note) => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            title={note.title}
                            body={note.body}
                            createdAt={note.createdAt}
                        />
                    ))
                )
            )}
        </section>
    );
};

NotesList.propTypes = {
    isActiveNotes: PropTypes.bool,
};

export default NotesList;
