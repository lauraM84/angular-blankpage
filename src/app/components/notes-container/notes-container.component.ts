import { Component, inject } from '@angular/core';
import { EditorComponent } from "../editor/editor.component";
import { CountersComponent } from "../counters/counters.component";
import { NotesService } from '../../services/notes.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-notes-container',
  imports: [CountersComponent, EditorComponent, HeaderComponent, SidebarComponent],
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

  createNewNote(): void {
    console.log('Creating new note...');
    this.service.createNote();
  }


  setTextRealTime(text: string) {
    this.textRealTime = text;
    this.service.loadText(text);
  }

}
