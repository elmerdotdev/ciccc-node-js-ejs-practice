export interface Todo {
  id: string,
  todoText: string,
  completed: boolean
}

export interface TodoRequestBody extends Omit<Todo, 'id' | 'completed'> {}