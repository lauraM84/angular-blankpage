import { Component, ElementRef, inject, input, output, ViewChild } from '@angular/core';
import { Event } from '@angular/router';


@Component({
  selector: 'app-editor',
  imports: [],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent {

  text = input<string>('');
  textChange = output<string>()
  @ViewChild('editorRef') editorRef!: ElementRef<HTMLElement>;

  emitText() {
    const current = this.editorRef?.nativeElement?.innerText ?? '';
    this.textChange.emit(current); // emetti il contenuto
  }

  reset(text = '') {
    if (this.editorRef) {
      this.editorRef.nativeElement.innerText = text; // reset al valore originale
      this.emitText(); // aggiorna anche il valore esterno
    }
  }
}
