import { Component, OnInit } from '@angular/core';
import { NOTES } from '../mystaticnotes';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent implements OnInit {

  notes = NOTES;

  show(title: string) {
    alert(title);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
