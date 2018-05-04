import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotesService } from '../services/notes';
import { IndexComponent } from './index/index.component';
import { ComponentModule } from '../components'
import { MaterialModule } from '../material';
import { ViewPostComponent } from './view-post/view-post.component'
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

const COMPONENTS = [
  IndexComponent,
  ViewPostComponent
]

const routes: Routes = [
  {
    path: 'notes/:id',
    component: ViewPostComponent
  },
  {
    path: 'notes',
    component: IndexComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    component: IndexComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    ...COMPONENTS,
    RouterModule,
    MaterialModule,
    ComponentModule
  ],
  providers: [
    { provide: 'notes', useClass: NotesService },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class BootModule { }
