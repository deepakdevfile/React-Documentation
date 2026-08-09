function Avatar(){
    const avatar = "https://react.dev/images/docs/scientists/7vQD0fPs.jpg";
    const description = "Gregorio Y. Zara";
    return (
        <img className="avator" src={avatar} alt={description} />
    )
}

const today = new Date();
function formatDate(date){
    return new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(date);
}

function TodoList1(){
    const name = 'Hedy Lamarr';
    return (
        <>
            <h1>{name}'s To Do List</h1>
            <h1>To Do List for {formatDate(today)}</h1>
            <ul style={{backgroundColor: 'black', color: 'pink'}}>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </>
    );
}

const person = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'orange',
        color: 'black'
    }
}

function TodoList2(){
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img src="https://react.dev/images/docs/scientists/7vQD0fPs.jpg" alt="Gregorio Y. Zara" className="avatar"/>
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

// challange 2 extract information into an object
const person3 = {
    name: "Gregorio Y. Zara",
    theme: {
        backgroundColor: 'orange',
        color: 'black'
    },
    url: "https://react.dev/images/docs/scientists/7vQD0fPs.jpg"
}

function TodoList3() {
    return (
        <div style={person3.theme}>
            <h1>{person3.name}'s Todos</h1>
            <img src={person3.url} alt="Gregorio Y. Zara" className="avatar" />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    )
}

const baseUrl = 'https://react.dev/images/docs/scientists/';
const person4 = {
    name: 'Gregorio Y. Zara',
    imageId: '7vQD0fP',
    imageSize: 's',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

function TodoList4() {
    return (
        <div style={person4.theme}>
            <h1>{person4.name}'s Todos</h1>
            <img
                className="avatar"
                src={baseUrl + person4.imageId + person4.imageSize + ".jpg"}
                alt={person4.name}
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}

export default function App(){
    return (
        <>
            <Avatar />
            <TodoList1 />
            <TodoList2 />
            <TodoList3 />
            <TodoList4 />
        </>
    )
}