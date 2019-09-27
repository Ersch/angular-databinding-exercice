import {Component, Input} from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: number[] = [];
  odd: any;
  msgs: any = {severity: 'success', summary: '', detail: 'Even'};

  onChange($event: number) {
    this.numbers.push($event);
    if ($event % 2 === 0) {
      this.odd = false;
      this.msgs = [];
      this.msgs.push({severity: 'success', summary: '', detail: 'Even'});
    } else {
      this.odd = true;
      this.msgs = [];
      this.msgs.push({severity: 'info', summary: '', detail: 'Odd'});
    }
  }
}
