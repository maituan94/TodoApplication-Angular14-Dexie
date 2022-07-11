import { Component } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'empty-task',
  templateUrl: './emptytask.component.html',
  styleUrls:['./emptytask.component.scss']
})
export class EmptyTaskComponent {
  faThumbsUp = faThumbsUp;
}
