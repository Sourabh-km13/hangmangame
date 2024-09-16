function TextInput({ type = "text", label, placeholder = "Enter your input here", onChangeHandler }) {

    return (
        <label className="flex flex-col gap-2 items-center" >
            <span className="text-white ">{label}</span>
            
            <input 
                type={type}
                className="px-4 py-2 border border-gray-500 rounded-md w-1/2 outline-none focus:shadow-md focus:shadow-cyan-400"
                placeholder={placeholder}
                onChange={onChangeHandler}
                
            />
            
        </label>
        
    )
}

export default TextInput;