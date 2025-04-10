import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlankpageService {
  loadText(text: string) {
    setTimeout(() => {
      console.log("5 secondi sono passati", text)
    }, 5000);

  }

  constructor() { }
}
