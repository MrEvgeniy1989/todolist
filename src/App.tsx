import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';
import {v1} from 'uuid';

export type TasksType = {
    id: string
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle = 'What to learn'
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: v1(), title: 'HTML & CSS', isDone: true},
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'React', isDone: false},
        {id: v1(), title: 'Rest API', isDone: false},
        {id: v1(), title: 'GraphQL', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')

    const removeTask = (taskId: string) => {
        const updateTasks = tasks.filter(tasks => tasks.id !== taskId)
        setTasks(updateTasks)
    }
    const addTask = (title: string) => {
        const newTask: TasksType = {
            id: v1(),
            title,
            isDone: false,
        }
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, isDone: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: isDone} : t))
    }

    const changeTodoListFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }
    const getFilteredTasks = (tasks: Array<TasksType>, filer: FilterValuesType): Array<TasksType> => {
        switch (filer) {
            case 'completed':
                return tasks.filter(task => task.isDone)
            case 'active':
                return tasks.filter(task => !task.isDone)
            default:
                return tasks
        }
    }
    const filteredTasks: Array<TasksType> = getFilteredTasks(tasks, filter)

    return (
        <div className="App">
            <TodoList
                tasks={filteredTasks}
                title={todoListTitle}
                filter={filter}
                addTask={addTask}
                removeTask={removeTask}
                changeTaskStatus = {changeTaskStatus}
                changeTodoListFilter={changeTodoListFilter}/>

        </div>
    );
}

export default App;
