import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  idTimeOut = -1

  loadText(text: string) {
    console.log('Text loaded:', text);
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

  /*  downloadText() {
     const text = localStorage.getItem("savedText");
     return text;
   } */

  constructor() {

  }
}
