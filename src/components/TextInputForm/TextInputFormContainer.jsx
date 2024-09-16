import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType] = useState("password");
    const [value, setValue] = useState("");
    const [hint, setHint] = useState('')
    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log("Form submitted", value);
        if(value) {
            // if we have something in value then we want to go to the play page
            navigate('/play',{state:{value,hint}});
        }
    }

    function handleTextInputChange(event) {
        
        setValue(event.target.value);
    }
    function handleHintInputChange(event){
        setHint(event.target.value)
    }
    function handleShowHideClick() {
        console.log("Show/Hide button clicked");
        if (inputType === "password") {
            setInputType("text")
        } else {
            setInputType("password");
        }
        console.log(inputType);
        
    }

    return (
        <TextInputForm 
            inputType={inputType}
            handleFormSubmit={handleFormSubmit} 
            handleTextInputChange={handleTextInputChange} 
            handleShowHideClick={handleShowHideClick}
            handleHintInputChange={handleHintInputChange}
        />
    );
}

export default TextInputFormContainer;