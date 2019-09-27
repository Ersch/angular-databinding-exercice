import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
  odd: any;

  onChange($event: number) {
    this.numbers.push($event);
    if ($event % 2 === 0) {
      this.odd = true;
    } else {
      this.odd = false;
    }
  }
}
