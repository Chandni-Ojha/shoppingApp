import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss'],
})
export class EvenComponent implements OnInit {
  counter: number;

  constructor() {}

  ngOnInit(): void {}

  display(event: number) {
    this.counter = event;
  }

}
