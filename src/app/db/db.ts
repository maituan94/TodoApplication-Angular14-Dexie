import Dexie, { Table } from 'dexie';
import { TodoItem, TodoList } from '../interface';

export class AppDB extends Dexie {
  todoItems!: Table<TodoItem, number>;
  todoLists!: Table<TodoList, number>;

  constructor() {
    super('ngdexieliveQuery');
    this.version(3).stores({
      todoLists: '++id',
      todoItems: '++id, todoListId',
    });
  }

  async resetDatabase() {
    await db.transaction('rw', 'todoItems', 'todoLists', () => {
      this.todoItems.clear();
      this.todoLists.clear();
    });
  }
}

export const db = new AppDB();
