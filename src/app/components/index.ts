import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NoteComponent } from './note/note.component';
import { MaterialModule } from '../material';
import { CommonModule } from '@angular/common';
import { EllipsisPipe } from '../pipes/ellipsis.pipe';
import { CreateNoteComponent } from './create-note/create-note.component';

const COMPONENTS = [
  NoteComponent,
  CreateNoteComponent
]

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    EllipsisPipe,
    ...COMPONENTS
  ],
  entryComponents: [CreateNoteComponent],
  exports: [
    ...COMPONENTS
  ]
})
export class ComponentModule { }
