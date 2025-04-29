import { Component, EventEmitter, inject, Output } from '@angular/core';
import { NotesService } from '../../services/notes.service';
import { CommonModule } from '@angular/common';
import { Note } from '../../models/note';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  service = inject(NotesService);
  notes = this.service.notes$;
  selectedNote: Note | null = null;
  @Output() noteSelected = new EventEmitter<Note>();


  selectNote(note: Note) {
    this.selectedNote = note;
    this.noteSelected.emit(note); // 👈 emetti evento
  }
}
