import PropTypes from "prop-types";
import React from "react";

class CreateForm extends React.Component {
    render() {
        return (
            <div className="add-new-page__input">
                <input
                    className="add-new-page__input__title"
                    placeholder="Catatan rahasia"
                    value={this.props.title}
                    onChange={this.props.titleHandler}
                />
                <div
                    className="add-new-page__input__body"
                    contentEditable
                    data-placeholder="Sebenarnya saya adalah ...."
                    spellCheck="false"
                    onInput={this.props.bodyHandler}
                />
            </div>
        );
    }
}

CreateForm.propTypes = {
    title: PropTypes.string.isRequired,
    titleHandler: PropTypes.func.isRequired,
    bodyHandler: PropTypes.func.isRequired,
};

export default CreateForm;
