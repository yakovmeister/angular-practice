import { NgModule } from '@angular/core'
import { ListsComponent } from './lists/lists.component';
import { MaterialModule } from '../material'
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    MaterialModule,
    CommonModule,
    
  ],
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent
  ]
})
export class ComponentModule { }
