import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'empty-task',
  templateUrl: './empty-task.component.html',
  styleUrls:['./empty-task.component.scss']
})
export class EmptyTaskComponent {
  faThumbsUp = faThumbsUp;
}
