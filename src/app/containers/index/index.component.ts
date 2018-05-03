import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from '../../actions/posts.actions'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  state = {
    data: []
  };

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store
      .select('posts')
      .subscribe(data => this.state = data)
    
    this.GetPosts()
  }

  GetPosts() {
    this.store.dispatch(new PostActions.GetPosts())
  }

  handleEdit(e, id) {
    
  }
}
