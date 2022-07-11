import { Component, Input, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from 'src/app/db/db';
import { TodoItem, TodoList } from 'src/app/interface';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-task',
  templateUrl: './listtask.component.html',
  styleUrls: ['./listtask.component.scss']
})
export class ListTaskComponent implements OnInit {
  @Input() todoList!: TodoList;

  faClipboardCheck = faClipboardCheck;
  isEditList = false;
  taskName = '';

  // Observe an arbritary query:
  todoItems = liveQuery(() => this.listTodoItems());

  async listTodoItems() {
    return await db.todoItems
      .where({
        todoListId: this.todoList.id,
      })
      .toArray();
  }

  async deleteList(): Promise<void> {
    if (!this.todoList.id) return;
    await db.todoLists.delete(this.todoList.id)
    await db.todoItems.where('todoListId').equals(this.todoList.id).delete();
  }

  enableEdit(): void {
    this.isEditList = !this.isEditList
    if (this.isEditList === false) {
      this.updateList();
    }
  }

  async updateList(): Promise<void> {
    if (!this.todoList.id) return;
    await db.todoLists.update(this.todoList.id, this.todoList)
  }

  async addTask() {
    if (!this.todoList.id || !this.taskName) return;
    await db.todoItems.add({
      title: this.taskName,
      todoListId: this.todoList.id,
    });
    this.taskName = ''
  }

  async ngOnInit(): Promise<void> {
    // await db.resetDatabase();
  }
}
