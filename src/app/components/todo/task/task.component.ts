import { Component, Input, OnInit } from '@angular/core';
import { faPencil, faTrash, faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import * as moment from 'moment';
import { TodoItem } from 'src/app/interface';
import { db } from 'src/app/db/db';

@Component({
    selector: 'single-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
    @Input() task!: TodoItem;
    isEditTask = false;

    faPencil = faPencil;
    faTrash = faTrash;
    faCalendarCheck = faCalendarCheck;
    modalDelete = '';
    modalDatePicker = '';
    dueDate = ''

    ngOnInit(): void {
        this.modalDelete = `#modalDelete${this.task.id}`
        this.modalDatePicker = `#modalDatePicker${this.task.id}`
        this.dueDate = moment(this.task.dueDate).format('YYYY, MMM DD')
    }

    enableEdit(): void {
        this.isEditTask = !this.isEditTask
    }
    

    async updateTask(): Promise<void> {
        if (!this.task.id) return;
        await db.todoItems.update(this.task.id, this.task)
    }

    async doneTask(): Promise<void> {
        if (!this.task.id) return;
        await db.todoItems.update(this.task.id, {
            done: this.task.done
        })
    }
}
