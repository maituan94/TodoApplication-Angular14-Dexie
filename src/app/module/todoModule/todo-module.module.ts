import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { AddComponent, EmptyTaskComponent, ListTaskComponent, TaskComponent, DeleteModalComponent, DatePickerModalComponent } from '../../components/todo';


@NgModule({
    declarations:[
        AddComponent,
        EmptyTaskComponent,
        ListTaskComponent,
        TaskComponent,
        DeleteModalComponent,
        DatePickerModalComponent
    ],
    imports:[
        BrowserModule,
        FormsModule,
        FontAwesomeModule,
    ],
    exports:[
        AddComponent,
        EmptyTaskComponent,
        ListTaskComponent,
        TaskComponent,
        DeleteModalComponent,
        DatePickerModalComponent
    ]
})

export class TodoModule { }