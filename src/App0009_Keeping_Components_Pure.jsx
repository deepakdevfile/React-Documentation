function Recipe({drinkers}){
    return (
        <ol>
            <li>Boil {drinkers} cups of water. </li>
            <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice. </li>
            <li>Add { 0.5 * drinkers } cups of milk to boil and sugar to taste. </li>
        </ol>
    );
}

// should avoid this type of unpure function
let guest = 0;

function Cup(){
    guest = guest + 1;
    return <p>Tea cup for guest #{guest}</p>
}

function TeaSet(){
    return (
        <>
            <Cup />
            <Cup />
            <Cup />
        </>
    )
}

// TeaSet function should be written like this 
function Cup2({guest}){
    return <p>Tea cup for guest #{guest}</p>
}

function TeaSet2(){
    return(
        <>
            <Cup2 guest={1} />
            <Cup2 guest={2} />
            <Cup2 guest={3} />
        </>
    )
}

// local mutation 
function TeaGathering(){
    const cups = [];
    for(let i = 0; i <= 12; i++){
        cups.push(<Cup2 key={i} guest={i} />)
    }
    return cups;
}

export default function App(){
    return (
        <section>
            <h1>Spiced Chai Recipe</h1>
            <h2>For Two</h2>
            <Recipe drinkers={2} />
            <h2>For a gathering</h2>
            <Recipe drinkers={4} />
            <h3>Things with unpure function</h3>
            <TeaSet />
            <h3>Pure function</h3>
            <TeaSet2 />
            <h2>Local mutation</h2>
            <TeaGathering />
        </section>
    )
}