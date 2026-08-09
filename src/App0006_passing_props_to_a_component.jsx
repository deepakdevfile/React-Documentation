import getImageUrl from "./App0006_utils";

function Avatar({ person, size = 100 }){
    return(
        <img 
            src={getImageUrl(person)} 
            alt={person.name} 
            className="avatar"
            width={size}
            height={size} 
        />
    );
}

function Profile(){
    return (
        <>
            <Avatar
                person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
            />
            <Avatar 
                person={{ name: 'Aklilu Lemma', imageId: 'OKS67lh' }}
                size={80}
            />
            <Avatar 
                person={{ name: 'Katsuko Saruhashi', imageId: 'Yfe0qp2'}}
                size={50}
            />
        </>
    );
}

// forwarding props with the JSX spread syntax
// function Profile2(props){
//     return(
//         <div className="card">
//             <Avatar {...props}/>
//         </div>
//     )
// }

// Passing JSX as children
function Card({ children }){
    return (
        <div className="card">
            { children }
        </div>
    );
}

function Profile3(){
    return(
        <Card>
            <Avatar 
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'Yfe0qp2'
                }}
            />
        </Card>
    )
}

export default function App(){
    return(
        <>
            <Profile />
            {/* <Profile2 /> */}
            <Profile3 />
        </>
    )
}