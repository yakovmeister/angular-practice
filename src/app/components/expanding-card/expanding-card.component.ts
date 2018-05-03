import { Component, OnInit, Input } from '@angular/core';

const noop = (e) => {}

@Component({
  selector: 'app-expanding-card',
  templateUrl: './expanding-card.component.html',
  styleUrls: ['./expanding-card.component.scss']
})
export class ExpandingCardComponent implements OnInit {
  @Input() width: string = '250px'
  @Input() id: string | void;
  @Input() isLoading: boolean = false;
  @Input() isVisible: boolean = true;
  @Input() expanded: boolean = false;
  @Input() title: any;
  @Input() content: any;
  @Input() handleEdit: (e) => void = noop;
  @Input() handleDelete: (e) => void = noop;
  @Input() titleEllipsis: number = 15;
  @Input() contentEllipsis: number = 100;

  constructor() { }

  ngOnInit() { }

  toggleExpand() {
    this.expanded = !this.expanded
  }
}

