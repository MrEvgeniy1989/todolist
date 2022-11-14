import React from 'react';
import {FilterValuesType, TasksType} from './App';

type TodoListPropsType = {
    title: string
    tasks: Array<TasksType>
    removeTask: (taskId: number) => void
    changeTodoListFilter: (nextFilterValue: FilterValuesType) => void
}

const TodoList = (props: TodoListPropsType) => {

    const getTaskListItem = (task: TasksType) => {
        return (
            <li key={task.id}>
                <input type="checkbox" checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={() => {
                    props.removeTask(task.id)
                }}>x
                </button>
            </li>
        )
    }

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map(getTaskListItem)}
            </ul>
            <div>
                <button onClick={() => {
                    props.changeTodoListFilter('all')
                }}>All
                </button>
                <button onClick={() => {
                    props.changeTodoListFilter('active')
                }}>Active
                </button>
                <button onClick={() => {
                    props.changeTodoListFilter('completed')
                }}>Completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;