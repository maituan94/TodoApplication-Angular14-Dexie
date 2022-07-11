export interface TodoList {
    id?: number;
    title: string;
}
export interface TodoItem {
    id?: number;
    todoListId: number;
    title: string;
    done?: boolean;
    dueDate?: string;
}