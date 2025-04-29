import { effect, Injectable } from '@angular/core';
import { Note } from '../models/note';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  idTimeOut = -1
  private notes = signal<Note[]>([]);
  private text = signal<string>('');
  notes$ = this.notes.asReadonly();
  text$ = this.text.asReadonly();

  constructor() {
    effect(() => {
      const allNotes = this.notes();
      console.log('Note aggiornate:', allNotes);
      this.saveNotes();
    });
  }

  textChange(text: string) {
    console.log('textChange:', text);
    this.text.set(text);
    if (this.idTimeOut !== -1) {
      window.clearTimeout(this.idTimeOut)
    }
    this.idTimeOut = window.setTimeout(() => {
      this.saveText(text);
    }, 7000);

  }

  getSavedText() {
    return localStorage.getItem("savedText")
  }

  saveText(text: string) {
    localStorage.setItem("savedText", text)
  }

  saveNote(content: string): void {
    const newNote = { id: Date.now(), content };
    console.log('New note created:', newNote);
    this.notes.update((notes) => [...notes, newNote]);
  }

  updateNote(noteToUpdate: Note, newContent: string): void {
    this.notes.update(notes =>
      notes.map(note =>
        note.id === noteToUpdate.id
          ? { ...note, content: newContent }
          : note
      )
    );
  }

  private saveNotes(): void {
    localStorage.setItem('notes', JSON.stringify(this.notes()));
  }

  /*  downloadText() {
     const text = localStorage.getItem("savedText");
     return text;
   } */

}
