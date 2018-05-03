import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  @Input() items: any = [];
  @Input() dataState: string = 'idle';

  constructor() { }

  ngOnInit() {}

}
