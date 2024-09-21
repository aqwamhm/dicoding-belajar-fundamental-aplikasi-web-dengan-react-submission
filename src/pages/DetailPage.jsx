import React from "react";
import ActionButton from "../components/ActionButton";
import { MdArchive, MdUnarchive } from "react-icons/md";
import { getNote } from "../utils/local-data";
import { useParams } from "react-router-dom";
import { showFormattedDate } from "../utils";
import { IoMdTrash } from "react-icons/io";
import PropTypes from "prop-types";

function DetailPageWrapper({ deleteNote, archiveNote, unarchiveNote }) {
    const { id } = useParams();
    return (
        <DetailPage
            id={id}
            deleteNote={deleteNote}
            archiveNote={archiveNote}
            unarchiveNote={unarchiveNote}
        />
    );
}

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            note: getNote(props.id),
        };
    }

    render() {
        return (
            <section className="detail-page">
                <h3 className="detail-page__title">{this.state.note.title}</h3>
                <p className="detail-page__createdAt">
                    {showFormattedDate(this.state.note.createdAt)}
                </p>
                <div className="detail-page__body">{this.state.note.body}</div>
                <div className="detail-page__action">
                    {this.state.note.archived ? (
                        <ActionButton
                            redirectTo="/"
                            onClick={() =>
                                this.props.unarchiveNote(this.state.note.id)
                            }
                            Icon={MdUnarchive}
                        />
                    ) : (
                        <ActionButton
                            redirectTo="/"
                            onClick={() =>
                                this.props.archiveNote(this.state.note.id)
                            }
                            Icon={MdArchive}
                        />
                    )}

                    <ActionButton
                        redirectTo="/"
                        onClick={() =>
                            this.props.deleteNote(this.state.note.id)
                        }
                        Icon={IoMdTrash}
                    />
                </div>
            </section>
        );
    }
}

DetailPageWrapper.propTypes = {
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    unarchiveNote: PropTypes.func.isRequired,
};

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    deleteNote: PropTypes.func.isRequired,
    archiveNote: PropTypes.func.isRequired,
    unarchiveNote: PropTypes.func.isRequired,
};

export default DetailPageWrapper;
