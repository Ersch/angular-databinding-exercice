import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  number = 0;
  @Output() incrementedNumber = new EventEmitter<number>();
  ref;

  constructor() {
  }

  ngOnInit() {
  }

  startGame() {
    this.ref = setInterval(() => this.emitEvent(), 1000);
  }

  stopGame() {
    clearInterval(this.ref);
  }

  emitEvent() {
    this.number++;
    this.incrementedNumber.emit(this.number);
    console.log('tick');
  }

}
