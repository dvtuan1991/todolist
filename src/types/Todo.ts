export interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
}

export interface ReduxStore {
    todoReduxReducer: Todo[],
    todoReduxReducerImmer: Todo[]
}