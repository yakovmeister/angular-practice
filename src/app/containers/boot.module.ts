import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../services/users.service';
import { PostsService } from '../services/posts';
import { IndexComponent } from './index/index.component';
import { ComponentModule } from '../components'
import { MaterialModule } from '../material';
import { ViewPostComponent } from './view-post/view-post.component'

const COMPONENTS = [
  IndexComponent,
  ViewPostComponent
]

const routes: Routes = [
  {
    path: 'posts/:id',
    component: ViewPostComponent
  },
  {
    path: 'posts',
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
    { provide: 'users', useClass: UsersService },
    { provide: 'posts', useClass: PostsService }
  ],
  declarations: [
    ...COMPONENTS,
  ]
})
export class BootModule { }
