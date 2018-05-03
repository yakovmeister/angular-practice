import { Component, OnInit, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as UserActions from '../../actions/users.actions'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  state: {
  };

  constructor(private store: Store<any>) {
    store.select('users').subscribe(data => this.state = data)
  }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.store.dispatch(new UserActions.GetUsers())
  }

}
