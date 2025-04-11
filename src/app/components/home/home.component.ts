import { Component } from '@angular/core';
import { BlankComponent } from "../blank/blank.component";
import { CountersComponent } from "../counters/counters.component";

@Component({
  selector: 'app-home',
  imports: [BlankComponent, CountersComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  textRealTime?: string;

  setTextRealTime(text: string) {
    this.textRealTime = text;
  }

}
