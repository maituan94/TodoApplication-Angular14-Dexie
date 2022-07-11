import { Component, OnDestroy, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  date = moment(new Date()).format('yyyy MMM DD HH:mm:ss');
  id: number = 0;

  ngOnInit(): void {
    this.id = window.setInterval(() => {
      this.date = moment(new Date()).format('yyyy MMM DD HH:mm:ss');
    }, 1000)
  }

  ngOnDestroy(): void {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}