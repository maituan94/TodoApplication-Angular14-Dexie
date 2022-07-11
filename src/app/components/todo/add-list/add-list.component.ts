import { Component } from '@angular/core';
import { faClipboardCheck, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { db } from 'src/app/db/db';

@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
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
