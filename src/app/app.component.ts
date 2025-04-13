import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NotesContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blankpage';
}
