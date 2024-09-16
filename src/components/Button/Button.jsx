import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 rounded-lg ${getButtonStyling(styleType)}  text-white hover:shadow-2xl hover:shadow-cyan-500/50`}
        >
            {text}
        </button>
    );
}


export default Button;