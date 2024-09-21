import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ActionButton({ onClick, redirectTo, Icon }) {
    const navigate = useNavigate();

    function handleClick() {
        if (onClick) {
            onClick();
        }

        if (redirectTo) {
            navigate(redirectTo);
        }
    }

    return (
        <button className="action" type="button" onClick={handleClick}>
            {Icon && <Icon />}
        </button>
    );
}

ActionButton.propTypes = {
    onClick: PropTypes.func,
    redirectTo: PropTypes.string,
    Icon: PropTypes.elementType.isRequired,
};

export default ActionButton;
