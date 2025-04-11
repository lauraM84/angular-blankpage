import { Component, computed, inject, input } from '@angular/core';
import { BlankpageService } from '../../services/blankpage.service';

@Component({
  selector: 'app-counters',
  imports: [],
  templateUrl: './counters.component.html',
  styleUrl: './counters.component.scss'
})
export class CountersComponent {
  service = inject(BlankpageService)

  textToCount = input<string>();

  wordsNumber = computed(() => '' + this.textToCount.length)

}