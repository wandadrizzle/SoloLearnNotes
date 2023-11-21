import { Component, OnInit, inject } from '@angular/core';
import { NOTES } from '../mystaticnotes';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-note-detail',
  templateUrl: './note-detail.component.html',
  styleUrls: ['./note-detail.component.css']
})
export class NoteDetailComponent implements OnInit {

  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  constructor() { }

  ngOnInit(): void {
  }
 
  router = inject(Router);
  delete() {
    const selectedNote = NOTES.find((note) => note.id === this.id);

    // Check if selectedNote is defined
    if (selectedNote) {
      const index = NOTES.indexOf(selectedNote, 0);
      NOTES.splice(index, 1);
      this.router.navigateByUrl('/');
      console.log('Note deleted successfully!');
    } else {
      console.error('Note not found. Unable to delete.');
    }
  }
  
  
  
}
