import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as NotesActions from '../../actions/notes.actions'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { CreateNoteComponent } from './../../components/create-note'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  state = {
    data: []
  };

  dialogData = {
    title: '',
    content: ''
  }

  constructor(
    private store: Store<any>, 
    private router: Router, 
    public dialog: MatDialog,
    @Inject('notes') private noteProvider) { }

  ngOnInit() {
    this.store
      .select('notes')
      .subscribe(data => this.state = data)
    
    this.GetNotes()
  }

  GetNotes() {
    this.store.dispatch(
      new NotesActions.GetNotes(this.noteProvider.getNotes())
    )
  }

  openDialog() {
    let dialogRef = this.dialog.open(CreateNoteComponent, {
      width: '250px',
      data: { ...this.dialogData }
    })

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.create) {
        delete result.create

        this.store.dispatch(
          new NotesActions.CreateNote(this.noteProvider.createNote(result))
        )
      }
    })
  }
}
