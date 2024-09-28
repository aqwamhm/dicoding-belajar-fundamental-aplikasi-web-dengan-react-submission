import { useContext, useEffect, useState } from "react";
import NoteItem from "./NoteItem";
import PropTypes from "prop-types";
import useLoading from "../hooks/useLoading";
import { getActiveNotes, getArchivedNotes } from "../utils/network-data";
import { LocaleContext } from "../contexts/LocaleContext";

const NotesList = ({ isActiveNotes = true, filter = "" }) => {
    const [notes, setNotes] = useState([]);
    const { stopLoading, renderWithLoading } = useLoading();
    const { locale } = useContext(LocaleContext);

    useEffect(() => {
        async function fetchData() {
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
                    <p>
                        {locale == "id"
                            ? "Tidak ada catatan"
                            : "No notes available"}
                    </p>
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
