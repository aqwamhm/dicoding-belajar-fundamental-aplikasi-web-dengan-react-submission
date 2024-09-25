import { useState } from "react";
import CreateForm from "../components/CreateForm";
import ActionButton from "../components/ActionButton";
import { MdSave } from "react-icons/md";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const CreatePage = ({ addNote }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const onTitleChangeEventHandler = (event) => {
        setTitle(event.target.value);
    };

    const onBodyChangeEventHandler = (event) => {
        setBody(event.target.innerHTML);
    };

    const addNoteHandler = async () => {
        await addNote({ title, body });

        navigate("/");
    };

    return (
        <>
            <CreateForm
                title={title}
                body={body}
                titleHandler={onTitleChangeEventHandler}
                bodyHandler={onBodyChangeEventHandler}
            />
            <div className="add-new-page__action">
                <ActionButton onClick={addNoteHandler} Icon={MdSave} />
            </div>
        </>
    );
};

CreatePage.propTypes = {
    addNote: PropTypes.func.isRequired,
};

export default CreatePage;
