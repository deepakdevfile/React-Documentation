import { useEffect, useState } from "react";

async function fetchBio(person){
    const delay = person === 'Bob' ? 10000 : 2000;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('This is ' + person + 's bio.')
        }, delay);
    })
}

function Page(){
    const [person, setPerson] = useState('Alice');
    const [bio, setBio] = useState(null);

    useEffect(() => {
        let ignore = null;
        setBio(null);
        fetchBio(person).then(result => {
            if(!ignore){
                setBio(result);
            }
        });

        return () => {
            ignore = true;
        }
    }, [person])

    return(
        <>
            <select 
                value={person}
                onChange={(e) => setPerson(e.target.value)}
            >
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <br />
            <hr />
            <p>{bio ?? 'Loading...'}</p>
        </>
    );
}

export default function App(){
    return(
        <Page />
    )
}