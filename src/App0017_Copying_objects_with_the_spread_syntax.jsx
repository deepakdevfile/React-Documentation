import { useState } from 'react';
// import { useImmer } from 'use-immer';


function Form(){
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleFirstNameChange(e){
        setPerson({...person, firstName: e.target.value});
    }

    function handleLastNameChange(e){
        setPerson({...person, lastName: e.target.value});
    }

    function handleEmailChange(e){
        setPerson({...person, email: e.target.value});
    }


    return(
        <form >
            <div>
                <label htmlFor="fname">First name: </label>
                <input onChange={handleFirstNameChange} value={person.firstName} type="text" id='fname' />
            </div>
            
            <div>
                <label htmlFor="lname">Last name: </label>
                <input onChange={handleLastNameChange} value={person.lastName} type="text" id='lname' />
            </div>
            
            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={handleEmailChange} value={person.email} type="text" id='email' />
            </div>
            
            <p>
                {person.firstName + " " + person.lastName + ' (' + person.email + ')' }
            </p>
        </form>
    )
}


// Using a single event handler for multiple fields 
function Form2() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });

    function handleChange(e) {
        setPerson({ ...person, [e.target.name]: e.target.value });
    }

    return (
        <form action="">
            <div>
                <label htmlFor="fname">First name: </label>
                <input onChange={handleChange} value={person.firstName} type="text" name='firstName' />
            </div>

            <div>
                <label htmlFor="lname">Last name: </label>
                <input onChange={handleChange} value={person.lastName} type="text" name='lastName' />
            </div>

            <div>
                <label htmlFor="email">Email: </label>
                <input onChange={handleChange} value={person.email} type="text" name='email' />
            </div>

            <p>
                {person.firstName + " " + person.lastName + ' (' + person.email + ')'}
            </p>
        </form>
    )
}

// updating nested object 
function Form3(){
    const [person, setPerson] = useState({
        name: "Niki de Saint Phalle",
        artwork: {
            title: 'Blue Nana',
            city: "Hamburg",
            image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
        }
    });

    function handleNameChange(e){
        setPerson({...person, name: e.target.value})
    }

    function handleTitleChange(e){
        setPerson({...person, artwork:{...person.artwork, title: e.target.value}})
    }

    function handleCityChange(e){
        setPerson({...person, artwork:{...person.artwork, city: e.target.value}})
    }

    function handleImageChange(e){
        setPerson({ ...person, artwork: { ...person.artwork, image: e.target.value } })
    }

    return(
        <form action="">
            <label style={{display: "block"}}>
                Name: <input onChange={handleNameChange} value={person.name} />
            </label>
            <label style={{ display: "block" }}>
                Title: <input onChange={handleTitleChange} value={person.artwork.title} />
            </label>
            <label style={{ display: "block" }}>
                City: <input onChange={handleCityChange} value={person.artwork.city} />
            </label>
            <label style={{ display: "block" }}>
                Image: <input onChange={handleImageChange} value={person.artwork.image}/>
            </label>
            <p>
                <i>{person.artwork.title}</i> {' by '}{person.name}
                <br />(located in {person.artwork.city})
            </p>
            <img src={person.artwork.image} alt={person.artwork.title} />
        </form>
    )
}

// writing concise code with Immer to update the nested object 
// function Form4() {
//     const [person, updatePerson] = useImmer({
//         name: "Niki de Saint Phalle",
//         artwork: {
//             title: 'Blue Nana',
//             city: "Hamburg",
//             image: 'https://react.dev/images/docs/scientists/Sd1AgUOm.jpg',
//         }
//     });

//     function handleNameChange(e) {
//         updatePerson(draft => {draft.name = e.target.value;})
//     }

//     function handleTitleChange(e) {
//         updatePerson(draft => {draft.artwork.title = e.target.value})
//     }

//     function handleCityChange(e) {
//         updatePerson(draft => {draft.artwork.city = e.target.value})
//     }

//     function handleImageChange(e) {
//         setPerson(draft => {draft.artwork.image = e.target.value})
//     }

//     return (
//         <form action="">
//             <label style={{ display: "block" }}>
//                 Name: <input onChange={handleNameChange} value={person.name} />
//             </label>
//             <label style={{ display: "block" }}>
//                 Title: <input onChange={handleTitleChange} value={person.artwork.title} />
//             </label>
//             <label style={{ display: "block" }}>
//                 City: <input onChange={handleCityChange} value={person.artwork.city} />
//             </label>
//             <label style={{ display: "block" }}>
//                 Image: <input onChange={handleImageChange} value={person.artwork.image} />
//             </label>
//             <p>
//                 <i>{person.artwork.title}</i> {' by '}{person.name}
//                 <br />(located in {person.artwork.city})
//             </p>
//             <img src={person.artwork.image} alt={person.artwork.title} />
//         </form>
//     )
// }

export default function App(){
    return (
        <>
            <Form />
            <Form2 />
            <Form3 />
            {/* <Form4 /> */}
        </>
    )
}