import React from "react";
import CreateForm from "../components/CreateForm";
import ActionButton from "../components/ActionButton";
import { MdSave } from "react-icons/md";
import PropTypes from "prop-types";

class CreatePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
        };
    }

    onTitleChangeEventHandler = (event) => {
        this.setState({ title: event.target.value });
    };

    onBodyChangeEventHandler = (event) => {
        this.setState({ body: event.target.innerHTML });
    };

    render() {
        return (
            <>
                <CreateForm
                    title={this.state.title}
                    body={this.state.body}
                    titleHandler={this.onTitleChangeEventHandler}
                    bodyHandler={this.onBodyChangeEventHandler}
                />
                <div className="add-new-page__action">
                    <ActionButton
                        redirectTo="/"
                        onClick={() =>
                            this.props.addNote({
                                title: this.state.title,
                                body: this.state.body,
                            })
                        }
                        Icon={MdSave}
                    />
                </div>
            </>
        );
    }
}

CreatePage.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default CreatePage;
