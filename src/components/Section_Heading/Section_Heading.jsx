import PropTypes from "prop-types";
import "./Section_Heading.css";

const Section_Heading = ({ title, text, customStyle }) => {
    return (
        <div className={`Section-Heading ${customStyle}`}>
            <h2 className="mb-2 ">{title}</h2>
            <p className="mb-4" style={{ color: "#555", fontSize: "1.1rem" }}>
                {text}
            </p>
        </div>
    );
};

Section_Heading.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    customStyle: PropTypes.string,
};

export default Section_Heading;
