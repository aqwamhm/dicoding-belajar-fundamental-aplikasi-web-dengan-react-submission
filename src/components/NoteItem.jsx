import React from "react";
import { showFormattedDate } from "../utils";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class NoteItem extends React.Component {
    render() {
        return (
            <article className="note-item">
                <h3 className="note-item__title">
                    <Link to={`/notes/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                </h3>
                <p className="note-item__createdAt">
                    {showFormattedDate(this.props.createdAt)}
                </p>
                <p className="note-item__body">{this.props.body}</p>
            </article>
        );
    }
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string,
};

export default NoteItem;
