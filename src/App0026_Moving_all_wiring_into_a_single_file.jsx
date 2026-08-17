import { createContext, useContext, useReducer, useState } from "react";
import { TasksProvider, useTasksDispatch, useTasks  } from './App0026_TasksProvider';

let nextId = 3;

function AddTask(){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();
    return (
        <>
            <input 
                onChange={(e) =>setText(e.target.value)} 
                value={text}
                placeholder="Add task"
            />
            <button onClick={() => {dispatch({
                    type: 'add',
                    id: nextId++,
                    text: text
                });
                setText('');
            }}
            >Add</button>
        </>
    )
}

function Task({ task }){
    const [edit, setEdit] = useState(false);
    const dispatch = useTasksDispatch();
    let taskContent;
    if(edit){
        taskContent = (
            <>
                <input
                    value={task.text}
                    onChange={(e) => {dispatch({ 
                        type: 'change', 
                        task: { 
                            ...task, 
                            text: e.target.value 
                        } 
                    })}}
                />
                <button onClick={() => setEdit(false)}>
                    Save
                </button>
            </>
        )
    } else{
        taskContent = (
            <>
                {task.text}
                <button onClick={() => setEdit(true)}>
                    Edit
                </button>
            </>
        )
    }

    return(
        <>
            <input
                type="checkbox"
                checked={task.done}
                onChange={(e) => {dispatch({
                    type: 'change',
                    task: {
                        ...task,
                        done: e.target.checked
                    }
                });}}
            />
            {taskContent}
            <button 
                onClick={() => {dispatch({
                    type: 'delete',
                    id: task.id
                });}}
            > Delete </button>
        </>
    )
}

function TaskList(){
    const tasks = useTasks();
    return(
        <>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <Task 
                            task={task}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}




function TaskApp(){
    return(
        <>
            <TasksProvider>
                <h1>Day off in Kyoto</h1>
                <AddTask />
                <TaskList/>
            </TasksProvider>
        </>
    )
}

export default function App(){
    return(
        <>
            <TaskApp />
        </>
    )
}