import { createContext, useContext, useReducer } from 'react';

const TasksContext = createContext(null);
const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext value={tasks}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext>
    );
}

export function useTasks() {
    return useContext(TasksContext);
}

export function useTasksDispatch(){
    return useContext(TasksDispatchContext);
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

const initialTasks = [
    { id: 0, text: 'Philosopher’s Path', done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
