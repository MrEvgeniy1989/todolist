import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TasksType = {
    id: number
    title: string
    isDone: boolean
}


function App() {
    const todoListTitle_1 = "What to learn"
    const todoListTitle_2 = "What to buy"

    const tasks_1: Array<TasksType> = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "React", isDone: false},
    ]

    const tasks_2: Array<TasksType> = [
        {id: 4, title: "Beer", isDone: false},
        {id: 5, title: "Milk", isDone: true},
        {id: 6, title: "Cola", isDone: true},
    ]

    return (
        <div className="App">
            <TodoList tasks={tasks_1} title={todoListTitle_1}/>
            <TodoList tasks={tasks_2} title={todoListTitle_2}/>
        </div>
    );
}

export default App;
