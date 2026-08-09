function Image(){
    return(
        <div className="card-content">
            <h1>Photo</h1>
            <img
                src="./src/assets/szV5sdGs.jpg"
                alt="Aklilu Lemma"
                width={70}
                height={70}
            />   
        </div>
    )
}

function About(){
    return (
        <div className="card-content">
            <h1>About</h1>
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </div>
    )
}

function Card({ children }){
    return(
        <div className="card">
            { children }
        </div>
    )
}

function Profile(){
    return(
        <div>
            <Card>
                <Image />
            </Card>
            <Card>
                <About />
            </Card>
        </div>
    );
}

export default function App(){
    return(
        <Profile />
    )
}