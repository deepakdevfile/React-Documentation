import { people } from './App0008_data';
import getImageUrl from './App0006_utils';

function List() {
    const chemists = people.filter(person => person.profession === 'chemist');
    const listItems1 = chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    const non_chemists = people.filter(person => person.profession !== 'chemist');
    const listItems2 = non_chemists.map(person =>
        <li key={person.id}>
            <img
                src={getImageUrl(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
    );

    return (
        <article>
            <h1>Scientists</h1>
            <h2>Chemist</h2>
            <ul>{listItems1}</ul>
            <h2>Non-chemist</h2>
            <ul>{listItems2}</ul>
        </article>
    );
}

export default function App() {
    return (
        <List />
    )
}