import { Component } from '@angular/core';
import { faClipboardCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { db } from 'src/app/db/db';

@Component({
  selector: 'add-task',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  faClipboardCheck = faClipboardCheck;
  faListCheck = faListCheck

  listName = '';

  async addNewList() {
    await db.todoLists.add({
      title: this.listName
    })
    this.listName = ''
    document.getElementById('addList')?.classList.toggle('show');
  }
}
