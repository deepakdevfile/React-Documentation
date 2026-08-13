import { useState } from 'react';

function Panel({ title, children, isActive, onShow }){
    return(
        <section>
            <h2>{title}</h2>
            {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>)}
        </section>
    )
}

function Accordion(){
    const [activeIndex, setActiveIndex] = useState(true);

    function handleClick(){
        setActiveIndex(!activeIndex);
    }

    return(
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel 
                title={"About"} 
                isActive={activeIndex === false}
                onShow={handleClick}
            > 
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city
            </Panel>
            <Panel
                title={"Etymology"}
                isActive={activeIndex === true}
                onShow={handleClick}
            > 
                The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples".In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    )
}

export default function App(){
    return(
        <Accordion />
    )
}


// 
{/* <div>
                <h2>Etymology</h2>
                {!activeIndex ?
                    <p> The name comes from алма, the Kazakh word for "apple" and is often translated as "full of apples".In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild Malus sieversii is considered a likely candidate for the ancestor of the modern domestic apple.</p>
                    :
                    <button onClick={handleClick}>Show</button>
                }
            </div> */}
{/* <div>
                <h2>About</h2>
                {activeIndex ? 
                    <p>With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.</p>
                    :
                    <button onClick={handleClick}>Show</button>
                }
            </div> */}