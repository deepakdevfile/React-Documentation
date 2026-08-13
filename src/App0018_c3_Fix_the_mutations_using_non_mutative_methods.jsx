import { useState } from 'react';

const initialTodos = [
    {id: 0, title: 'Buy milk', done: true},
    {id: 1, title: 'Eat tacos', done: false},
    {id: 2, title: 'Brew tea', done: false},
]

let nextId = 3;

function AddTodo({ onAddTodo }){
    const [title, setTitle] = useState('');

    function handleChange(e){
        setTitle(e.target.value);
    }

    function handleClick(){
        setTitle('');
        onAddTodo(title);
    }

    return(
        <>
            <input
                placeholder='Add todo'
                value={title}
                onChange={handleChange}
            />
            <button onClick={handleClick}>
                Add
            </button>
        </>
    )
}

function Task({ todo, onChange, onDelete }){
    const [isEditing, setIsEditing ] = useState(false);

    let todoContent;
    if(isEditing){
        todoContent = (
            <>
                <input 
                    value={todo.title}
                    onChange={e => {onChange({...todo, title: e.target.value});}}
                />
                <button onClick={() => setIsEditing(false)}>Save</button>
            </>
        );
    } else{
        todoContent = (
            <>
                {todo.title + " "}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <label>
            <input 
                type="checkbox" 
                checked={todo.done}
                onChange={e => {onChange({...todo, done: e.target.checked});}}
            />
            {todoContent}
            <button onClick={() => onDelete(todo.id)}>
                Delete
            </button>
        </label>
    )
}

function TaskList({todos, onChangeTodo, onDeleteTodo}){
    return(
        <>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <Task 
                            todo={todo}
                            onChange={onChangeTodo}
                            onDelete={onDeleteTodo}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

function TaskApp(){
    const [todos, setTodos] = useState(initialTodos);

    function handleAddTodo(title){
        const newTodos = [...todos];
        newTodos.push({id: nextId++, title: title, done: false});
        setTodos(newTodos);
    }

    function handleChangeTodo(nextTodo){
        const newTodos = todos.map(task => {
            if(task.id === nextTodo.id){
                return nextTodo;
            } else {
                return task
            }
        });
        setTodos(newTodos);
    }

    function handleDeleteTodo(todoId){
        const newTodos = todos.filter(t => t.id !== todoId)
        setTodos(newTodos);
        nextId--;
    }
    
    return(
        <>
            <AddTodo onAddTodo={handleAddTodo}/>
            <TaskList 
                todos={todos} 
                onChangeTodo={handleChangeTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </>
    )
}

export default function App(){
    return(
        <TaskApp />
    )
}