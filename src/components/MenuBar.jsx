import PropTypes from "prop-types";
import "./MenuBar.css";

function MenuBar({height}) {
    return (
        <div className="linksTop" style={{ height: height }}>
            <a href="#profile">Home</a>
            <a href="#aboutMe">About Me</a>
            <a href="#project">Personal Projects</a>
        </div>
    );
}

MenuBar.propTypes = {
    height: PropTypes.number.isRequired
}

export default MenuBar