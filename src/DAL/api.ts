import axios, {AxiosResponse} from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': 'abf07995-8043-4f5a-aea7-fbec3de5488c'
  }
})


export type TodolistType = {
  id: string
  addedDate: Date
  order: number
  title: string
}
export type ResponseType<D = {}> = {
  resultCode: number
  messages: Array<string>
  fieldsErrors: Array<string>
  data: D
}
export type TaskType = {
  id: string;
  title: string;
  description?: string;
  todoListId: string;
  order: number;
  status: number;
  priority: number;
  startDate?: Date;
  deadline?: Date;
  addedDate: Date;
}


export const TodolistAPI = {
  getTodolists() {
    return instance.get<TodolistType[]>(`/todo-lists`)
  },
  createTodolist(titleForNewTodolist: string) {
    return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TodolistType }>>>(`/todo-lists`, {title: titleForNewTodolist})
  },
  deleteTodolist<ResponseType>(todolistId: string) {
    return instance.delete(`/todo-lists/${todolistId}`)
  },
  updateTodolist(todolistId: string, newTitle: string) {
    return instance.put<{ title: string }, AxiosResponse<ResponseType>>(`/todo-lists/${todolistId}`, {title: newTitle})
  }
}

export const TaskAPI = {
  getTasks(todolistId: string) {
    return instance.get<TaskType[]>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, titleForNewTask: string) {
    return instance.post<{ title: string }, AxiosResponse<ResponseType<{ item: TaskType }>>>(`/todo-lists/${todolistId}/tasks`, {title: titleForNewTask})
  },
  deleteTask<ResponseType>(todolistId: string, taskId: string) {
    return instance.delete(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(todolistId: string, taskId: string, newTitle: string) {
    return instance.put<{title: string}, AxiosResponse<ResponseType>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {title: newTitle})
  }
}