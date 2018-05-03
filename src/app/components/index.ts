import { NgModule } from '@angular/core'
import { ListsComponent } from './lists/lists.component';
import { RouterModule } from '@angular/router'
import { ExpandingCardComponent } from './expanding-card/expanding-card.component';
import { MaterialModule } from '../material'
import { CommonModule } from '@angular/common'
import { EllipsisPipe } from '../pipes/ellipsis.pipe'

@NgModule({
  imports: [
    MaterialModule,
    RouterModule,
    CommonModule
  ],
  declarations: [
    EllipsisPipe,
    ListsComponent,
    ExpandingCardComponent
  ],
  exports: [
    ListsComponent,
    ExpandingCardComponent
  ]
})
export class ComponentModule { }
