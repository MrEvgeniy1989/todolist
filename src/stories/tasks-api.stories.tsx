import React, {useEffect, useState} from 'react'
import {ResponseType, TaskAPI, TaskType} from '../DAL/api';

export default {
  title: 'Task-API'
}

export const GetTasks = () => {
  const [state, setState] = useState<TaskType[] | null>(null)
  useEffect(() => {
    TaskAPI.getTasks('aadf36b6-d40e-4b49-8c96-2af60e3769fb')
      .then((res) => {
        setState(res.data)
      })
  }, [])
  return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
  const [state, setState] = useState<ResponseType<{ item: TaskType }> | null>(null)
  useEffect(() => {
    TaskAPI.createTask('aadf36b6-d40e-4b49-8c96-2af60e3769fb', 'newTodo')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
  const [state, setState] = useState<TaskType[] | null>(null)
  useEffect(() => {
    TaskAPI.deleteTask('aadf36b6-d40e-4b49-8c96-2af60e3769fb', '613c8f60-0262-49a4-b9ec-21743703462e')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    TaskAPI.updateTask('aadf36b6-d40e-4b49-8c96-2af60e3769fb', 'ba5d95a0-23c7-43e0-b2e2-a2146ab0cff1', 'NewTitle')
      .then((res) => {
        setState(res.data)
      })
  }, [])

  return <div>{JSON.stringify(state)}</div>
}

