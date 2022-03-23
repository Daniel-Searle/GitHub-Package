export function printHelloWorld() {
    console.log('Hello World')
    return 'Hello World';
}

export function getPdpVersion() {
    return {
        "name": "pdp-prep",
        "buildDateTime": "23/11/2021 14:31:00",
        "version": "1.0.0"
    }
}

export interface Todo {
    id: number
    timeStamp: string
    body: string
    status: string
}

export interface TodoList{
    todoList: Todo[]
}
