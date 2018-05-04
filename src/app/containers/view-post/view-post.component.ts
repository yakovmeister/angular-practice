import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import * as NotesActions from '../../actions/notes.actions'


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  state = {
    id: '',
    title: '',
    content: ''
  };

  constructor(
    private store: Store<any>, 
    private route: ActivatedRoute,
    private router: Router,
    @Inject('notes') private noteProvider) {
    this.store.dispatch(new NotesActions.ClearSelected())
  }

  ngOnInit() {
    this.store
      .select('notes')
      .subscribe(data => this.state = data.selected)
    
    this.GetNote(this.route.snapshot.params.id)
  }

  GetNote(id: number) {
    this.store.dispatch(
      new NotesActions.SelectNote(this.noteProvider.showNote(id))
    )
  }

  handleEdit = (e, data) => {
    this.store.dispatch(
      new NotesActions.PutNote(this.noteProvider.updateNote(data))
    )

    this.router.navigate([''])
  }

  handleDelete = (e) => {
    this.store.dispatch(
      new NotesActions.SelectNote(this.noteProvider.deleteNote(this.state.id))
    )
  }

  back() {
    this.router.navigate([''])
  }
}
