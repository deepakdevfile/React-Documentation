import { createContext, useContext, useReducer, useState } from "react";

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

function AddTask(){
    const [text, setText] = useState('');
    const dispatch = useContext(TasksDispatchContext);
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
    const dispatch = useContext(TasksDispatchContext);
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

function TaskList({handleDeleteTask, handleChange }){
    const tasks = useContext(TasksContext);
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

function tasksReducer(tasks, action) {
    switch (action.type) {
        case "add": {
            return [...tasks, { id: action.id, text: action.text, done: false }];
        }
        case 'delete': {
            return tasks.filter(t => (t.id !== action.id));
        }
        case 'change': {
            return tasks.map(t => {
                if (t.id === action.task.id) {
                    return action.task;
                } else {
                    return t;
                }
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);


function TaskApp(){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return(
        <>
            <TasksContext value={tasks}>
                <TasksDispatchContext value={dispatch}>
                    <h1>Day off in Kyoto</h1>
                    <AddTask/>
                    <TaskList
                        tasks={tasks}
                    />
                </TasksDispatchContext>
            </TasksContext>
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