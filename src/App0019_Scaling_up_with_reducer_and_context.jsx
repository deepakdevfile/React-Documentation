import { useReducer, useState, useContext, createContext } from 'react';

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

function useTasks(){
    return useContext(TasksContext);
}

function useTasksDispatch(){
    return useContext(TasksDispatchContext);
}

function AddTask({ onAddTask }){
    const [text, setText] = useState('');
    const dispatch = useTasksDispatch();

    function handleClick(){
        setText('');
        dispatch({type: 'added', id: nextId++, text: text});
    }

    return (
        <>
            <input
                placeholder='Add task'
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <button onClick={handleClick}>
                Add
            </button>
        </>
    )
}

function Task({task}){
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch();

    let taskContent;

    function handleChange(e) {
        dispatch({ type: 'changed', task: { ...task, text: e.target.value } });
    }

    function handleClick() {
        dispatch({ type: 'deleted', id: task.id });
    }

    if(isEditing){
        taskContent = (
            <>
                <input 
                    value={task.text}
                    onChange={handleChange}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
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
                type="checkBox" 
                checked={task.done}
                onChange={handleChange}
            />
            {taskContent}
            <button onClick={handleClick}>
                Delete
            </button>
        </label>
    )
}

function TaskList(){
    const tasks = useTasks();
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added': {
            return [...tasks, {id: action.id, text: action.text, done: false}];
        }
        case 'changed': {
            return tasks.map(task => {
                if(task.id === action.task.id){
                    return action.task;
                } else{
                    return task;
                }
            });
        }
        case 'deleted': {
            return tasks.filter(task => task.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
    return(
        <TasksContext value={tasks}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext>
    )
}

function TaskApp() {
    return (
        <TasksProvider>
            <h1>Day off in Kyoto</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
    )
}

export default function App() {
    return (
        <TaskApp />
    )
}