import { useEffect, useState } from "react";
import ActionButton from "../components/ActionButton";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { IoMdTrash } from "react-icons/io";
import PropTypes from "prop-types";
import NotFoundPage from "./NotFoundPage";
import { getNote } from "../utils/network-data";
import useLoading from "../hooks/useLoading";

function DetailPage({ deleteNote, archiveNote, unarchiveNote }) {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const { isLoading, stopLoading, renderWithLoading } = useLoading();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const result = await getNote(id);
            if (result.data) {
                setNote(result.data);
                stopLoading();
            } else {
                setNote(null);
                stopLoading();
            }
        }
        fetchData();
    }, [id]);

    if (!note && !isLoading) {
        return <NotFoundPage />;
    }

    const deleteNoteHandler = async (id) => {
        await deleteNote(id);
        navigate("/");
    };

    const archiveNoteHandler = async (id) => {
        await archiveNote(id);
        navigate("/");
    };

    const unarchiveNoteHandler = async (id) => {
        await unarchiveNote(id);
        navigate("/");
    };

    return (
        <section className="detail-page">
            {renderWithLoading(
                <>
                    {note ? (
                        <>
                            <h3 className="detail-page__title">{note.title}</h3>
                            <p className="detail-page__createdAt">
                                {showFormattedDate(note.createdAt)}
                            </p>
                            <div className="detail-page__body">{note.body}</div>
                            <div className="detail-page__action">
                                {note.archived ? (
                                    <ActionButton
                                        onClick={() =>
                                            unarchiveNoteHandler(note.id)
                                        }
                                        Icon={MdUnarchive}
                                    />
                                ) : (
                                    <ActionButton
                                        onClick={() =>
                                            archiveNoteHandler(note.id)
                                        }
                                        Icon={MdArchive}
                                    />
                                )}
                                <ActionButton
                                    onClick={() => deleteNoteHandler(note.id)}
                                    Icon={IoMdTrash}
                                />
                            </div>
                        </>
                    ) : null}
                </>
            )}
        </section>
    );
}

DetailPage.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    unarchiveNote: PropTypes.func.isRequired,
};

export default DetailPage;
