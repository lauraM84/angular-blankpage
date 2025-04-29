import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesContainerComponent } from './notes-container.component';
import { Component } from '@angular/core';
import { NotesService } from '../../services/notes.service';

describe('HomeComponent', () => {
  let component: NotesContainerComponent;
  let fixture: ComponentFixture<NotesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesContainerComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NotesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
