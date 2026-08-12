import { useState } from 'react';

function Scoreboard(){    
    const [player, setPlayer] = useState({
        firstName: 'Ranjani',
        lastName: 'Shettar',
        score: 10.
    })

    function handlePlusClick(){
        setPlayer({...player, score: player.score+1});
    }

    function handleFirstNameChange(e){
        setPlayer({...player, firstName: e.target.value})
    }

    function handleLastNameChange(e){
        setPlayer({...player, lastName: e.target.value});
    }

    return(
        <>
            <label htmlFor="" style={{display: "block"}}>
                Score: <b>{player.score} </b>{" "}
                <button onClick={handlePlusClick}> +1 </button>
            </label>
            <label htmlFor="" style={{ display: "block" }}>
                First name: 
                <input onChange={handleFirstNameChange} value={player.firstName}/>
            </label>
            <label htmlFor="" style={{ display: "block" }}>
                Last name: 
                <input onChange={handleLastNameChange} value={ player.lastName } />
            </label>

        </>
    )
}

export default function App(){
    return(
        <Scoreboard />
    )
}