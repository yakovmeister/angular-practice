import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as PostActions from '../../actions/posts.actions'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  state = {};

  constructor(private store: Store<any>, private route: ActivatedRoute) {
    this.store.dispatch(new PostActions.ClearSelected())
  }

  ngOnInit() {
    this.store
      .select('posts')
      .subscribe(data => this.state = data.selected)
    
    this.GetPost(this.route.snapshot.params.id)
  }

  GetPost(id: number) {
    this.store.dispatch(new PostActions.SelectPost(id))
  }
}
