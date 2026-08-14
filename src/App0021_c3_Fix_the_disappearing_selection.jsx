import { useState } from 'react';

const initialLetters = [{
    id: 0,
    subject: 'Ready for adventure?',
    isStarred: true,
}, {
    id: 1,
    subject: 'Time to check in!',
    isStarred: false,
}, {
    id: 2,
    subject: 'Festival Begins in Just SEVEN Days!',
    isStarred: false,
}];

function Letter({ letter, isHighlighted, onHover, onToggleStar}){
    const background = isHighlighted ? "#d2eaff" : "#ffffff" ;
    return (
        <li 
            style={{ backgroundColor: background }}
            onFocus={() => onHover(letter.id)}
            onPointerMove={() => {onHover(letter.id)}}
        >
            <button onClick={() => onToggleStar(letter)}>
                {letter.isStarred ? "Unstar" : "Star"}
            </button>
            {" " + letter.subject}
        </li>
    )
}

function MailClient(){
    const [letters, setLetters] = useState(initialLetters);
    const [highlightedId, setHighlightedId] = useState(null);

    function handleHover(letterId){
        setHighlightedId(letterId);
    }

    function handleStar(starred){
        const newLetters = letters.map(letter => {
            if(letter.id === starred.id){
                letter.isStarred = !letter.isStarred;
                return letter;
            } else {
                return letter;
            }
        })
        setLetters(newLetters);
    }

    return(
        <>
            <h1>Indox</h1>
            <ul>
                {letters.map(letter => (
                    <Letter 
                        key={letter.id} 
                        letter={letter}
                        isHighlighted={letter.id === highlightedId}
                        onHover={handleHover}
                        onToggleStar={handleStar}
                    />
                ))}
            </ul>
        </>
    )
}

export default function App(){
    return (
        <MailClient />
    )
}