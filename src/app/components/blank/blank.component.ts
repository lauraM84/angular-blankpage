import { Component, inject } from '@angular/core';
import { Event } from '@angular/router';
import { BlankpageService } from '../../services/blankpage.service';

@Component({
  selector: 'app-blank',
  imports: [],
  templateUrl: './blank.component.html',
  styleUrl: './blank.component.scss'
})
export class BlankComponent {

  service = inject(BlankpageService)

  autoSave() {
    const element: HTMLElement | null = document.querySelector('.container');
    if (element) {
      const text = element.innerText;
      this.service.loadText(text)
    }
  }

}
