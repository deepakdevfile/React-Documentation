import { useState } from 'react';

const initialTodos = [
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id: 2, title: 'Brew tea', done: false},
]

let nextId = 3;

function TaskApp(){
    const [todos, setTodos] = useState(initialTodos);
    const [title, setTitle] = useState('');

    function handleInputChange(e){
        setTitle(e.target.value)
    }

    function handleCheckboxChange(todoId){
        const newTodo = todos.map(todo => {
            if(todo.id === todoId){
                todo.done = !todo.done;
                return todo;
            } else{
                return todo;
            }
            
        })
        setTodos(newTodo);
    }

    function handleAddClick(e){
        const newTodos = [...todos];
        newTodos.push({ id: nextId++, title: title, done: true });
        setTodos(newTodos);
    }

    function handleEditClick(todoId, editedTodo){
        const newTodos = todos.map(todo => {
            if(todo.id !== todoId){
                return todo;
            } else {

            }
        })
    }

    function handleDeleteClick(todoId){
        const newTodos = todos.filter(todo => todo.id !== todoId);
        nextId--;
        setTodos(newTodos);
    }

    return(
        <>
            <input onChange={handleInputChange} placeholder='Add todo' />
            <button onClick={(e) => handleAddClick(e)}>Add</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <input onChange={() => handleCheckboxChange(todo.id)} type="checkbox" checked={todo.done}/>
                        {todo.title}
                        {' '}
                        <button onClick={() => handleEditClick(todo.id, todo.title)}>Edit</button>
                        <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
                    </li>
                ))}
                {}
            </ul>
        </>
    )
}

export default function App(){
    return(
        <TaskApp />
    )
}