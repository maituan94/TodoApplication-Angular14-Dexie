import { Component, Input, OnInit } from '@angular/core';
import { db } from 'src/app/db/db';

@Component({
  selector: 'delete-modal',
  templateUrl: './delete.component.html',
})
export class DeleteModalComponent implements OnInit{
    @Input() id?: number;

    modalId = '';

    ngOnInit(): void {
        this.modalId = `modalDelete${this.id}`
    }

    async deleteTask(): Promise<void> {
      if (!this.id) return;
      await db.todoItems.delete(this.id)
  }
}
