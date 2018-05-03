import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UsersService } from '../services/users.service';
import { IndexComponent } from './index/index.component';
import { ComponentModule } from '../components'
import { MaterialModule } from '../material'

const COMPONENTS = [
  IndexComponent
]

const routes: Routes = [
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
    { provide: 'users', useClass: UsersService }
  ],
  declarations: [
    ...COMPONENTS
  ]
})
export class BootModule { }
