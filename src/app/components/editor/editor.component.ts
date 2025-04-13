import { Component, inject, input, output } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-editor',
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  initialText = input<string>('');

  textEvent = output<string>()

  getText() {
    const element: HTMLElement | null = document.querySelector('.editor');
    if (element) {
      const text = element.innerText;
      this.textEvent.emit(text);
    }
  }

}
