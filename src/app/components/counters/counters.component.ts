import { Component, computed, inject, input } from '@angular/core';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'app-counters',
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  service = inject(NotesService)

  textToCount = input<string>('');

  charsNumber = computed(() => '' + this.textToCount().length)

  wordsNumber = computed(() => {
    const text = this.textToCount().trim();
    return '' + (text ? text.split(/\s+/).length : 0);
  });

}