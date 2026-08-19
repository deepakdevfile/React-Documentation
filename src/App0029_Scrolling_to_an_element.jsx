
import { useRef } from 'react';

function CatFriends(){
    const firstCatRef = useRef(null);
    const secondCatRef = useRef(null);
    const thirdCatRef = useRef(null);

    function toFirstCat(){
        firstCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        });
    }

    function toSecondCat(){
        secondCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }

    function toThirdCat(){
        thirdCatRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center',
        })
    }

    return(
        <>
            <nav>
                <button onClick={toFirstCat}>
                    Neo
                </button>
                <button onClick={toSecondCat}>
                    Millie
                </button>
                <button onClick={toThirdCat}>
                    Bella
                </button>
            </nav>
            <div>
                <ul>
                    <li>
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                            ref={firstCatRef}
                        />
                    </li>
                    <li>
                        <img 
                            src="https://placecats.com/millie/200/200" 
                            alt="Millie" 
                            ref={secondCatRef}
                        />
                    </li>
                    <li>
                        <img 
                            src="https://placecats.com/bella/199/200" 
                            alt="Bella" 
                            ref={thirdCatRef}
                        />
                    </li>
                </ul>
            </div>
        </>
    )
}

export default function App(){
    return(
        <CatFriends />
    )
}