import { useState, useEffect } from "react";

async function fetchPlaces(planetId){
    if(typeof planetId !== 'string'){
        throw Error(
            'fetchPlaces(planetId) expects a string argument. ' +
            'Instead recevied: ' + planetId + '.'
        );
    }
    return new Promise(resolve => {
        setTimeout(() => {
            if(planetId === 'earth'){
                resolve([{
                    id: 'laos',
                    name: 'Laos'
                }, {
                    id: 'spain',
                    name: 'Spain'
                }, {
                    id: 'vietnam',
                    name: 'Vietnam'
                }]);
            } else if (planetId === 'venus'){
                resolve([{
                    id: 'aurelia',
                    name: 'Aurelia'
                }, {
                    id: 'diana-chasma',
                    name: 'Diana Chasma'
                }, {
                    id: 'kumsong-vallis',
                    name: 'Kŭmsŏng Vallis'
                }]);
            } else if(planetId === 'mars'){
                resolve([{
                    id: 'aluminum-city',
                    name: 'Aluminum City'
                }, {
                    id: 'new-new-york',
                    name: 'New New York'
                }, {
                    id: 'vishniac',
                    name: 'Vishniac'
                }]);
            } else throw Error('Unknown planet ID: ' + planetId);
        }, 1000);
    })
}

async function fetchPlanets(){
    return new Promise(resolve => (
        setTimeout(() => {
            resolve([{
                id: 'earth',
                name: 'Earth'
            }, {
                id: 'venus',
                name: 'Venus'
            }, {
                id: 'mars',
                name: 'Mars'
            }]);
        }, 1000)
    ))
} 

function fetchData(url){
    if(url === '/planets'){
        return fetchPlanets();
    } else if(url.startsWith('/planets/')){
        const match = url.match(/^\/planets\/([\w-]+)\/places(\/)?$/);
        if(!match || !match[1] || !match[1].length){
            throw Error('Expected URL like "/planets/earth/places". Received: "' + url + '".');
        }
        return fetchPlaces(match[1]);
    } else throw Error('Expected URL like "/planets" or "/planets/earth/places". Received: "' + url + '".');
}

function Page(){
    const [planetList, setPlanetList] = useState([]);
    const [planetId, setPlanetId] = useState('');

    const [placeList, setPlaceList] = useState([]);
    const [placeId, setPlaceId] = useState('');

    useEffect(() => {
        let ignore = false;
        fetchData('/planets').then(result => {
            if(!ignore){
                console.log('Fetched a list of planets.');
                setPlanetList(result);
                setPlanetId(result[0].id);
            }
        });
        return () => {
            ignore = true;
        }
    }, []);

    useEffect(() => {
        let ignore = false;
        console.log(planetId);
        if(planetId !== ''){
            fetchData('/planets/' + planetId + '/places').then(result => {
                if (!ignore) {
                    console.log('Fetched a list of places.');
                    setPlaceList(result);
                    setPlaceId(result[0].id);
                }
            });
        }
        
        return () => {
            ignore = true;
        }
    }, [planetId]);


    

    return (
        <>
            <label>
                Pick a planet: {' '}
                <select value={planetId} onChange={(e) => setPlanetId(e.target.value)}>
                    {planetList.map(planet => 
                        <option key={planet.id} value={planet.id}>{planet.name}</option>
                    )}
                </select>
            </label>
            <br />
            <label >
                Pick a place: {' '}
                <select value={placeId} onChange={(e) => setPlaceId(e.target.value)}>
                    {placeList.map(place => 
                        <option key={place.id} value={place.id}>{place.name}</option>
                    )}
                </select>
            </label>
            <hr />
            <p>You are going to: {placeId || '???'} on {planetId}</p>
        </>
    )
}

export default function App(){
    return(
        <Page />
    )
}