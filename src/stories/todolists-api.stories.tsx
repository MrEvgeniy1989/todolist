import React, {useEffect, useState} from 'react'
import {ResponseType, TodolistAPI, TodolistType} from '../DAL/api';

export default {
  title: 'Todolist-API'
}

export const GetTodolists = () => {
  const [state, setState] = useState<TodolistType[] | null>(null)
  useEffect(() => {
    TodolistAPI.getTodolists()
      .then((res) => {
        setState(res.data)
      })
  }, [])
  return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
  const [state, setState] = useState<ResponseType<{ item: TodolistType }> | null>(null)
  useEffect(() => {
    TodolistAPI.createTodolist('newTodo')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
  const [state, setState] = useState<TodolistType[] | null>(null)
  useEffect(() => {
    TodolistAPI.deleteTodolist('558b941b-4c73-4cca-9fa4-5a394d75a25f')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TodolistAPI.updateTodolist('9f49bae8-9384-4802-91cd-07ad3003cc95', 'NewTitle')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

