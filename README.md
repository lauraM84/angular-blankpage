# 🗒️ Blank Notes App – Struttura e Architettura

Questa applicazione è una semplice "blank page" per prendere appunti, con supporto al salvataggio locale, conteggio parole/caratteri e gestione di più note tramite una sidebar. Include anche un'opzione per cambiare tema chiaro/scuro.

---

## 🧱 Struttura dei Componenti

```
AppComponent
│
├── HeaderComponent
│   ├── Pulsante "Nuova Nota"
│   └── Switch tema Chiaro/Scuro
│
└── NotesContainerComponent ← COMPONENTE COORDINATORE
    │
    ├── SidebarComponent
    │   ├── Elenco note salvate
    │   └── Selezione nota attiva
    │
    └── EditorComponent
        ├── Area contenteditable (testo nota)
        └── CounterComponent
            ├── Conteggio parole
            └── Conteggio caratteri
```

---

## 🧠 Logica dell'app

L'app è strutturata seguendo il principio della **separazione tra logica e presentazione**, usando un componente coordinatore centrale (`NotesContainerComponent`) che gestisce lo stato e la logica principale, e componenti figli semplici e riutilizzabili, responsabili della sola visualizzazione e interazione con l’utente.

---

## 🧩 Ruoli dei Componenti

### `AppComponent`
Componente radice. Gestisce il layout generale e contiene `Header` e `NotesContainer`.

### `HeaderComponent`
Contiene:
- Pulsante **"Nuova nota"** che chiede al coordinatore di crearne una nuova
- Switch per passare dalla **modalità chiara a quella scura**

### `NotesContainerComponent` (💡 Coordinatore)
Gestisce:
- Stato attuale (lista note, nota selezionata)
- Creazione, selezione e salvataggio note
- Comunicazione tra `SidebarComponent` e `EditorComponent`

### `SidebarComponent`
Mostra l'elenco delle note salvate  
Permette all'utente di selezionare una nota da modificare

### `EditorComponent`
Contiene:
- Area modificabile (`<div contenteditable>`) per il contenuto della nota
- Riferimento alla **nota corrente**
- Emissione di eventi per i cambiamenti di testo

### `CounterComponent`
Visualizza il numero di parole e caratteri della nota corrente  
Riceve il testo come `@Input()` e aggiorna i conteggi

---

## 🛠️ Servizi

### `NotesService`
Gestisce la logica di CRUD per le note, salvandole nel `localStorage`.

Funzionalità principali:
- `getNotes()`: ottieni tutte le note
- `getNote(id)`: ottieni una nota specifica
- `createNote()`: crea una nuova nota
- `saveNote(note)`: salva una nota
- `deleteNote(id)`: elimina una nota

### `ThemeService`
Gestisce il tema chiaro/scuro dell'app.  
Salva la preferenza nel `localStorage` e applica dinamicamente le classi al DOM.

---

## 📦 Struttura delle cartelle consigliata

```
src/
├── app/
│   ├── components/
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── notes-container/
│   │   ├── editor/
│   │   └── counter/
│   │
│   ├── services/
│   │   ├── notes.service.ts
│   │   └── theme.service.ts
│   │
│   ├── models/
│   │   └── note.model.ts
│   │
│   ├── app.component.ts
│   └── app.module.ts
```

---

## ✅ Best Practice Angular Seguite

- ✅ Smart/Dumb components
- ✅ Separazione delle responsabilità
- ✅ Utilizzo di Signal API (`input()`, `output()`, `computed()`)
- ✅ Persistenza locale con `localStorage`
- ✅ Tema dinamico
