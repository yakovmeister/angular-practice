import { Component, Inject, Optional } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent {
  state = {
    title: '',
    content: ''
  }

  constructor(
    public dialogRef: MatDialogRef<CreateNoteComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.state.title = data.title
    this.state.content = data.content
  }

  saveAction(value) {
    this.dialogRef.close({
      title: this.state.title,
      content: this.state.content,
      create: true
    })
  }

  changeFieldValue(key, value) {
    this.state[key] = value
  }

  onNoClick() : void {
    this.dialogRef.close({
      title: this.state.title,
      content: this.state.content
    });
  }
}
