import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss'],
})
export class GameControlComponent implements OnInit {
  counter: number = 0;
  @Output() counterFired = new EventEmitter<number>();
  timer: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges){
    console.log(change)
  }

  startCounter() {
      this.timer = setInterval( ()=> {
        this.counterFired.emit(this.counter+1);
        this.counter+=1;
      }, 1000);
  }
  stopCounter() {
    clearInterval(this.timer);
  }
}
