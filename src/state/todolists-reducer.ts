import {FilterValuesType, TodolistType} from '../App';
import {v1} from 'uuid';

type TodolistsReducerActionType = RemoveTodolistAC | addTodolistACType | changeTodolistTitleACType | changeFilterACType

export const TodolistsReducer = (state: TodolistType[], action: TodolistsReducerActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.id)
        }
        case 'ADD-TODOLIST': {
            let newTodolistId = v1();
            let newTodolist: TodolistType = {id: newTodolistId, title: action.payload.title, filter: 'all'};
            return [...state, newTodolist]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            // const todolist = todolists.find(tl => tl.id === id)
            return state.map(el => el.id === action.payload.todolistId2 ? {...el, title: action.payload.newTodolistTitle} : el)
        }
        case 'CHANGE-TODOLIST-FILTER': {
            return state.map(el => el.id === action.payload.todolistId2 ? {...el, filter: action.payload.newFilter} : el)
        }
        default:
            return state
    }
}

export type RemoveTodolistAC = ReturnType<typeof RemoveTodolistAC>
export const RemoveTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            id: todolistId1
        }
    } as const
}

export type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            title: newTodolistTitle
        }
    } as const
}

export type changeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
export const changeTodolistTitleAC = (todolistId2: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            todolistId2,
            newTodolistTitle
        }
    } as const
}

export type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (todolistId2: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER',
        payload: {todolistId2, newFilter}
    } as const
}