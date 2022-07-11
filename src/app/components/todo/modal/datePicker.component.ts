import { Component, Input, OnInit } from '@angular/core';
import { db } from 'src/app/db/db';

@Component({
  selector: 'date-picker-modal',
  templateUrl: './datePicker.component.html',
})
export class DatePickerModalComponent implements OnInit {
  @Input() id?: number;

  modalId = '';
  date = new Date().toISOString().split('T')[0]

  ngOnInit(): void {
    this.modalId = `modalDatePicker${this.id}`
  }

  async updateTask(): Promise<void> {
    if (!this.id) return;
    await db.todoItems.update(this.id, {
      dueDate: this.date
    })
  }
}