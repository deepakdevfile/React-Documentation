import { use, useReducer, useState } from "react";

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

function AddTask({handleAddTask}){
    const [text, setText] = useState('');
    return(
        <>
            <input 
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button onClick={() => {
                handleAddTask(text);
                setText('');
            }}
            >Add</button>
        </>
    )
}

function Task({ task, handleChange, handleDelete }){
    const [edit, setEdit] = useState(false);
    let taskContent;
    if(edit){
        taskContent = (
            <>
                <input 
                    onChange={(e) => handleChange({...task, text: e.target.value})} 
                    value={task.text} 
                    type="text" 
                />
                <button onClick={() => setEdit(false)}>Save</button>
            </>
        )
    } else{
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setEdit(true)}>Edit</button>
            </>
        )
    }

    return(
        <>
            <input 
                onChange={(e) => handleChange({...task, done: e.target.checked})} 
                type="checkbox" 
                checked={task.done} 
            />
            {taskContent}
            <button onClick={() => handleDelete(task.id)}>
                Delete
            </button>
        </>
    )
}

function TaskList({ tasks, handleDelete, handleChange }){
    return (
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task 
                            task={task}
                            handleChange={handleChange}
                            handleDelete={handleDelete}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

function taskReducer(tasks, action){
    switch(action.type){
        case 'add':
            return [...tasks, {id: action.id, text: action.text, done: false}];
        case 'delete':
            return tasks.filter(t => (t.id !== action.id));
        case 'change':
            return tasks.map(t => {
                if(t.id === action.task.id){
                    return action.task;
                } else{
                    return t
                }
            });
    }
}

function TaskApp(){
    const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

    function handleAddTask(text){
        dispatch({type: 'add', id: nextId++, text: text})
    }

    function handleDelete(taskId){
        dispatch({type: 'delete', id: taskId});
    }

    function handleChange(task){
        dispatch({type: 'change', task: task})
    }

    return(
        <>
            <AddTask handleAddTask={handleAddTask}/>
            <TaskList 
                tasks = {tasks}
                handleDelete= {handleDelete}
                handleChange={handleChange}
            />
        </>
    )
}

export default function App(){
    return(
        <TaskApp />
    )
}