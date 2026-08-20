import { useState } from "react";

let nextId = 0;

function createTodo(text, completed = false){
    return {
        id: nextId++,
        text,
        completed
    };
}

const initialTodos = [
    createTodo('Get apples', true),
    createTodo('Get orangess', true),
    createTodo('Get carrots')
];

function NewTodo({handleAdd}){
    const [text, setText] = useState('');

    return(
        <>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={(e) => handleAdd(text)}>
                Add
            </button>
        </>
    )
}

function TodoList(){
    const [todos, setTodos] = useState(initialTodos);
    const [showActive, setShowActive] = useState(false);
    const activeTodos = todos.filter(todo => !todo.completed);
    const visibleTodos = showActive ? activeTodos : todos;

    function handleAdd(text){
        setTodos([...todos, { id: nextId++, text: text, completed: false}]);
    }

    return(
        <>
            <label>
                <input 
                    type="checkbox" 
                    checked={showActive}
                    onChange={(e) => setShowActive(e.target.checked)}
                />
                Show only active todos
            </label>
            <br />
            <NewTodo handleAdd={handleAdd}/>
            <ul>
                {visibleTodos.map(todo => (
                    <li key={todo.id}>
                        {todo.completed ? <s>{todo.text}</s> : todo.text}
                    </li>
                ))}
            </ul>
            <p>{activeTodos.length} todos left</p>
        </>
    )
}


export default function App(){
    return (
        <TodoList />
    )
}