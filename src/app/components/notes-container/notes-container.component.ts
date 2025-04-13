import { Component, inject } from '@angular/core';
import { EditorComponent } from "../editor/editor.component";
import { CountersComponent } from "../counters/counters.component";
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-notes-container',
  imports: [CountersComponent, EditorComponent],
  templateUrl: './notes-container.component.html',
  styleUrl: './notes-container.component.scss'
})
export class NotesContainerComponent {

  service = inject(NotesService);

  textRealTime: string;

  initialText: string;

  constructor() {
    this.initialText = this.service.getSavedText() || '';
    this.textRealTime = this.initialText;
  }


  setTextRealTime(text: string) {
    this.textRealTime = text;
    this.service.loadText(text);
  }

}
