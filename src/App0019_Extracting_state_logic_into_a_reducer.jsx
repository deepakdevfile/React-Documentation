import {useReducer, useState} from 'react';

let nextId = 3;
const initialTasks = [
    {id: 0, text: 'Visit kafka Museum', done: true },
    { id: 1, text: 'Watch a puppet show', done: false},
    { id: 2, text: 'Lennon Wall Pic', done: false},
]

function AddTask({onAddTask}){
    const [text, setText] = useState('');
    function handleChange(e){
        setText(e.target.value);
    }

    function handleClick(){
        setText('');
        onAddTask(text);
    }

    return(
        <>
            <input onChange={handleChange} value={text} placeholder='Add task'/>
            <button onClick={handleClick}>Add</button>
        </>
    )
}

function Task({ task, onChange, onDelete }){
    const [isEditing, setIsEditing] = useState(false);

    let taskContent;
    if(isEditing){
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={e => {onChange({...task, text: e.target.value })}}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        );
    } else {
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setIsEditing(true)}>
                    Edit
                </button>
            </>
        );
    }

    return (
        <label >
            <input 
                type="checkbox" 
                checked={task.done}
                onChange={e => {
                    onChange({...task, done: e.target.checked})
                }}
            />
            {taskContent}
            <button onClick={() => onDelete(task.id)}>
                Delete
            </button>
        </label>
    )
}

function TaskList({tasks, onChangeTask, onDeleteTask}){
    return(
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task 
                            task={task}
                            onChange={onChangeTask}
                            onDelete={onDeleteTask}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added': {
            return [...tasks, {id: action.id, text: action.text, done: false}]
        }
        case 'changed': {
            return tasks.map(task => {
                if(task.id === action.task.id){
                    return action.task;
                } else{
                    return task;
                }
            })
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function TaskApp(){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    function handleAddTask(text){
        dispatch({type: 'added', id: nextId++, text: text,})
    }

    function handleChangeTask(task){
        dispatch({type: 'changed', task: task});
    }

    function handleDeleteTask(taskId){
        dispatch({type: 'deleted', id: taskId});
    }

    return(
        <>
            <h1>Prague itinerary</h1>
            <AddTask  onAddTask={handleAddTask}/>
            <TaskList 
                tasks={tasks} 
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    )
}

export default function App(){
    return(
        <TaskApp />
    )
}