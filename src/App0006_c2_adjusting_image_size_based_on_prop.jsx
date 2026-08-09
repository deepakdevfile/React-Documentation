import getImageUrl from "./App0006_utils";

function Avatar({ person, size }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person, (size < 110) ? 's': 'b' )}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Profile() {
    return (
        <Avatar
            size={40}
            person={{
                name: 'Gregorio Y. Zara',
                imageId: 'szV5sdG'
            }}
        />
    );
}

export default function App(){
    return (
        <Profile />
    )
}
