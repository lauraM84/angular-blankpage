import { Component, inject, output } from '@angular/core';
import { Event } from '@angular/router';
import { BlankpageService } from '../../services/blankpage.service';

@Component({
  selector: 'app-blank',
  imports: [],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

  service = inject(BlankpageService);

  textEvent = output<string>()

  getText() {
    const element: HTMLElement | null = document.querySelector('.container');
    if (element) {
      const text = element.innerText;
      this.service.loadText(text);
      this.textEvent.emit(text);
    }
  }

}
