import getImageUrl from './App0006_utils.jsx';
import { useState } from 'react';

function Panel({ children }) {
    const [open, setOpen] = useState(true);
    return (
        <section className="panel">
            <button onClick={() => setOpen(!open)}>
                {open ? 'Collapse' : 'Expand'}
            </button>
            {open && children}
        </section>
    );
}

function Header({ currentPerson }) {
    return <h1>{currentPerson.name}</h1>;
}

function Avatar({ currentPerson}) {
    return (
        <img
            className="avatar"
            src={getImageUrl(currentPerson)}
            alt={currentPerson.name}
            width={50}
            height={50}
        />
    );
}

function Profile({ person }) {
    let currentPerson = person;
    return (
        <Panel>
            <Header currentPerson={currentPerson}/>
            <Avatar currentPerson={currentPerson}/>
        </Panel>
    )
}

export default function App() {
    return (
        <>
            <Profile person={{
                imageId: 'lrWQx8l',
                name: 'Subrahmanyan Chandrasekhar',
            }} />
            <Profile person={{
                imageId: 'MK3eW3A',
                name: 'Creola Katherine Johnson',
            }} />
        </>
    )
}