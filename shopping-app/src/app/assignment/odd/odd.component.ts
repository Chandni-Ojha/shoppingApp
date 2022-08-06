import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
 counter: number;
  constructor() { }

  ngOnInit(): void {
  }

  display(event: number){
    this.counter = event;
  }

}
