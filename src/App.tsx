import React, {useState} from 'react';
import './App.css';
import TodoList from './TodoList';

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}

export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    const todoListTitle = 'What to learn'
    // const todoListTitle_2 = "What to buy"

    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: 'HTML & CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'React', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ])

    const [filter, setFilter] = useState<FilterValuesType>('all')
    console.log(filter)

    const removeTask = (taskId: number) => {
        const updateTasks = tasks.filter(tasks => tasks.id !== taskId)
        setTasks(updateTasks)
        console.log(tasks)
    }

    const changeTodoListFilter = (nextFilterValue: FilterValuesType) => {
        setFilter(nextFilterValue)
    }

    let tasksForRender: Array<TasksType> = [];
    if (filter=== "all") {
        tasksForRender = tasks
    } else if (filter === "active") {
        tasksForRender = tasks.filter(task => task.isDone === false)
    } else if (filter === "completed") {
        tasksForRender = tasks.filter(task => task.isDone === true)
    }

    // const tasks_2: Array<TasksType> = [
    //     {id: 4, title: "Beer", isDone: false},
    //     {id: 5, title: "Milk", isDone: true},
    //     {id: 6, title: "Cola", isDone: true},
    // ]

    return (
        <div className="App">
            <TodoList
                tasks={tasksForRender}
                title={todoListTitle}
                removeTask={removeTask}
                changeTodoListFilter={changeTodoListFilter}/>

            {/*<TodoList tasks={tasks_2} title={todoListTitle_2}/>*/}
        </div>
    );
}

export default App;
