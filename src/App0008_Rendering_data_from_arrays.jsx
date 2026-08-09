import { people } from "./App0008_data";
import getImageUrl from './App0006_utils';

function List(){
    // const listItems = people.map(person => 
    //     <li key={person.id}>{person.name}</li>
    // );

    const chemists = people.filter(person => person.profession === 'chemist');
    const listItems = people.map(person => 
        <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '} known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}

export default function App(){
    return (
        <List />
    )
}