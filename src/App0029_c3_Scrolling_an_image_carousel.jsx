import { useState, useRef } from "react";
import { flushSync } from "react-dom";


const catCount = 10;
const catList = new Array(catCount);
for(let i = 0; i < catCount; i++){
    const bucket = Math.floor(Math.random() * catCount) % 2;
    let imageUrl = '';
    switch(bucket){
        case 0: {
            imageUrl = "https://placecats.com/neo/250/200";
            break;
        }
        case 1: {
            imageUrl = "https://placecats.com/millie/250/200";
            break;
        }
        case 2: 
        default: {
            imageUrl = "https://placecats.com/bella/250/200";
            break;
        }
    }

    catList[i] = {
        id: i,
        imageUrl: imageUrl,
    }
}

function CatFriends(){
    const [index, setIndex] = useState(0);
    const ref = useRef(null);

    return(
        <>
            <nav>
                <button onClick={() => {
                    flushSync(() => {
                        if (index < catList.length - 1) {
                            setIndex(index + 1);
                        } else {
                            setIndex(0);
                        }
                    });
                    ref.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'nearest',
                        inline: 'center',
                    });
                }}>
                    Next
                </button>
            </nav>
            <div>
                <ul>
                    {catList.map((cat, i) => (
                        <li ref={index === i ? ref : null} key={cat.id}>
                            <img src={cat.imageUrl} alt={'Cat #' + cat.id} />
                        </li>
                    ))}
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