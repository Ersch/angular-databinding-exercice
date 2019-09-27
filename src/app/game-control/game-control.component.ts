import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number = 0;
  @Output() incrementedNumber = new EventEmitter<number>();
  interval;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.interval = setInterval(() => this.emitEvent(), 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  emitEvent() {
    this.incrementedNumber.emit(this.number + 1);
  }

}
