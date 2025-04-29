import { Component, inject, ViewChild } from '@angular/core';
import { EditorComponent } from "../editor/editor.component";
import { CountersComponent } from "../counters/counters.component";
import { NotesService } from '../../services/notes.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes-container',
  imports: [CountersComponent, EditorComponent, HeaderComponent, SidebarComponent],
  templateUrl: './notes-container.component.html',
  styleUrl: './notes-container.component.scss'
})
export class NotesContainerComponent {
  service = inject(NotesService);

  editing: Note | null = null;
  text: string;

  initialText: string;

  @ViewChild(EditorComponent) editor!: EditorComponent;

  constructor() {
    this.initialText = this.service.getSavedText() || '';
    this.text = this.initialText;
  }

  onNoteSelected(note: Note) {
    this.editing = note;
    this.editor.reset(note.content);
  }

  createNewNote(): void {
    if (this.editing === null) {
      console.log('Saving new note...');
      this.service.saveNote(this.text);
    }
    else {
      console.log('Updating note...');
      this.service.updateNote(this.editing, this.text);
    }
    this.editing = null;
    this.editor.reset();
  }


  textChange(text: string) {
    this.text = text;
    this.service.textChange(text);
  }

}
