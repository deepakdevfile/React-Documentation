function getImageUrl(imageId){
    return (
        `./src/assets/${imageId}s.jpg`
    );
}

function Profile({ name, size = 70, profession, awards, awardNames, discovery }){
    return(
        <section className="profile">
            <h2>{name}</h2>
            <img
                className="avatar"
                src= {getImageUrl("szV5sdG")}
                alt={name}
                width={size}
                height={size}
            />
            <ul>
                <li>
                    <b>Profession: </b>
                    { profession }
                </li>
                <li>
                    <b>Awards: {awards} </b>
                    ({awardNames})
                </li>
                <li>
                    <b>Discovered: </b>
                    {discovery}
                </li>
            </ul>
        </section>
    )
}

function Gallery() {
    return (
        <div>
            <h1>Notable Scientists</h1>
            <Profile
                name={"Maria Skłodowska-Curie"}
                size={100}
                profession={"physicist and chemist"}
                awards={4}
                awardNames={"Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal"}
                discovery={"polonium (chemical element)"}
            />
            <Profile 
                name={"Katsuko Saruhashi"} 
                size={100} 
                profession={"geochemist"} 
                awards={2} 
                awardNames={"Miyake Prize for geochemistry, Tanaka Prize"} 
                discovery={"a method for measuring carbon dioxide in seawater"}
            />
        </div>
    );
}

export default function App(){
    return(
        <Gallery />
    )
}