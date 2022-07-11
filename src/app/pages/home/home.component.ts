import { Component, OnInit } from '@angular/core';
import { liveQuery } from 'dexie';
import { db } from '../../db/db'

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent{
    todoLists = liveQuery(() => db.todoLists.toArray());
}
