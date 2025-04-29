import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() newNote = new EventEmitter<void>();

  onNewNote(): void {
    this.newNote.emit();
  }

}
