import { useState } from "react"

function Input({ label, text, handleChange }){
    return(
        <>
            <label>{label}
                <input value={text} onChange={handleChange}/>
            </label>
        </>
    )
}

function SyncedInputs(){
    const [editText, setEdtiText] = useState('');
    function handleChange(e){
        setEdtiText(e.target.value);
    }
    return(
        <>
            <Input handleChange={handleChange} text = {editText} label={"First Input "}/>
            <Input handleChange={handleChange} text = {editText} label ={"Second Input "}/>
        </>
    )
}

export default function App(){
    return (
        <SyncedInputs />
    )
}