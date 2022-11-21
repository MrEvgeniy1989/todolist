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
    // if (filter=== "all") {
    //     return tasks
    // } else if (filter === "active") {
    //     filteredTasks = tasks.filter(task => task.isDone === false)
    // } else if (filter === "completed") {
    //     filteredTasks = tasks.filter(task => task.isDone === true)
    // // }
    // return tasks.filter(task => task.isDone === filter)

// const tasks_2: Array<TasksType> = [
//     {id: 4, title: "Beer", isDone: false},
//     {id: 5, title: "Milk", isDone: true},
//     {id: 6, title: "Cola", isDone: true},
// ]
const filteredTasks: Array<TasksType> = getFilteredTasks(tasks, filter)
return (
    <div className="App">
        <TodoList
            tasks={filteredTasks}
            title={todoListTitle}
            addTask={addTask}
            removeTask={removeTask}
            changeTodoListFilter={changeTodoListFilter}/>

        {/*<TodoList tasks={tasks_2} title={todoListTitle_2}/>*/}
    </div>
);
}

export default App;
