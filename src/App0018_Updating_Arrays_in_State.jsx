import { useState } from 'react';

// Updating arrays without mutation 
let nextId = 0;

function List(){
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([]);

    function handleChange(e){
        setName(e.target.value)
    }

    function handleClick(e){
        setArtists([...artists, {id: nextId++, name: name}]);
    }

    return(
        <>
            <h1>Inspiring sculptors: </h1>
            <input value={name} onChange={handleChange} />
            <button onClick={handleClick}>Add</button>
            <p>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </p>
        </>
    )
}

// Removing from an array 

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye' },
    { id: 2, name: 'Louise Nevelson' },
];

function List2(){
    const [artists, setArtists] = useState(initialArtists);

    function handleClick(){
        
    }

    return(
        <>
            <h1>Inspiring sculptors: </h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name} {' '}
                        <button onClick={() => setArtists(artists.filter(a => a.id !== artist.id))}>Delete</button>
                    </li>
                ))}
                
            </ul>
        </>
    )
}

// Transforming an array
let initialShapes = [
    { id: 0, type: 'circle', x: 50, y: 300 },
    { id: 1, type: 'square', x: 150, y: 300 },
    { id: 2, type: 'circle', x: 250, y: 300 },
];

function ShapeEditor() {
    const [shapes, setShapes] = useState(initialShapes);

    function handleClick(){
        const nextShapes = shapes.map(shape => {
            if (shape.type === 'square') {
                // No change
                return shape;
            } else {
                // Return a new circle 50px below
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });

        setShapes(nextShapes);
    }

    return(
        <>
            <button onClick={handleClick}>
                Move circles down!
            </button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle'
                                ? '50%' : '',
                        width: 20,
                        height: 20,
                    }}
                />
            ))}
        </>
    )
}


// Replacing items in an array
let initialCounters = [0, 0, 0];

function CounterList(){
    const [counters, setCounnters] = useState(initialCounters);

    function handleIncrementClick(index){
        const nextCounters = counters.map((c, i) => {
            if(i === index){
                return c + 1;
            } else{
                return c;
            }
        });
        setCounnters(nextCounters);
    }

    return(
        <ul>
            {counters.map((counter, i) => (
                <li key={i}>
                    {counter}{' '}
                    <button onClick={() => {handleIncrementClick(i)}}> +1 </button>
                </li>
            ))}
        </ul>
    )
}

// Inserting into an array

let nextId3 = 3;

function List3() {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState(
        initialArtists
    );

    function handleClick() {
        const insertAt = 1; // Could be any index
        const nextArtists = [
            ...artists.slice(0, insertAt),
            { id: nextId3++, name: name },
            ...artists.slice(insertAt)
        ];
        setArtists(nextArtists);
        setName('');
    }

    return (
        <>
            <h1>Inspiring sculptors:</h1>
            <input
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={handleClick}>
                Insert
            </button>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>{artist.name}</li>
                ))}
            </ul>
        </>
    );
}

// Making other changes to an array
const initialList2 = [
    {id: 0, title: 'Big Bellies'},
    {id: 1, title: 'Lunar Landscape'},
    {id: 2, title: 'Terracotta Army'},
];

function List4(){
    const [list, setList] = useState(initialList2);

    function handleClick(){
        const nextList = [...list];
        nextList.reverse();
        setList(nextList);
    }

    return(
        <>
            <button onClick={handleClick}>
                Reverse
            </button>
            <ul>
                {list.map(artwork => (
                    <li key={artwork.id}>{artwork.title}</li>
                ))}
            </ul>
        </>
    )
}

// Updating objects inside arrays
let nextId4 = 3;
const initialList4 = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracota Army', seen: true},
];

function ItemList({artworks, onToggle}){
    function handleChange(e, artwork){
        onToggle(artwork.id, e.target.checked)
    }
    return(
        <ul>
            {artworks.map(artwork => (
                <li key={artwork.id}>
                    <label>
                        <input 
                            type="checkbox" 
                            checked={artwork.seen} 
                            // onChange={e => {
                            //     onToggle(
                            //         artwork.id,
                            //         e.target.checked
                            //     );
                            // }}
                            onChange={(e) => handleChange(e, artwork)}
                            />
                        {artwork.title}
                    </label>
                </li>
            ))}
        </ul>
    )
}

function BucketList(){
    const [myList, setMyList] = useState(initialList4);
    const [yourList, setYourList] = useState(initialList4);

    function handleToggleMyList(artworkId, nextSeen){
        // const myNextList = [...myList];
        // const artwork = myNextList.find(
        //     a => a.id === artworkId
        // );
        // artwork.seen = nextSeen;
        // setMyList(myNextList);
        // ??
        setMyList(myList.map(artwork =>{
            if(artwork.id === artworkId){
                return {...artwork, seen: nextSeen};
            } else {
                return artwork;
            }
        }))
    }

    function handleToggleYourList(artworkId, nextSeen){
        // const yourNextList = [...yourList];
        // const artwork = yourNextList.find(
        //     a => a.id === artworkId
        // );
        // artwork.seen = nextSeen;
        // setYourList(yourNextList);
        setYourList(yourList.map(artwork => {
            if(artwork.id === artworkId){
                return {...artwork, seen: nextSeen};
            } else {
                return artwork;
            }
        }));
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see: </h2>
            <ItemList artworks={myList} onToggle={handleToggleMyList} />
            <h2>Your list of art to see: </h2>
            <ItemList artworks={yourList} onToggle={handleToggleYourList} />
        </>
    )
}


// Write concise update logic with Immer
// will come back to this later, the concept is same 
// only thing that is different is the concise syntax. 

export default function App(){
    return (
        <>
            <List />
            <List2 />
            <ShapeEditor />
            <br />
            <br />
            <br />
            <CounterList />
            <List3 />
            <List4 />
            <BucketList />
        </>
    )
}