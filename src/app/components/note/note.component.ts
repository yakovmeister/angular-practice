import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

const noop = (e) => {};

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() baseUrl: string = '/notes';
  @Input() width: string | void;
  @Input() height: string | void;
  @Input() id: string | void;
  @Input() isLoading: boolean = false;
  @Input() isVisible: boolean = true;
  @Input() expanded: boolean = false;
  @Input() title: any;
  @Input() content: any;
  @Input() created_at: any;
  @Input() handleEdit: (e) => void = noop;
  @Input() handleDelete: (e) => void = noop;
  @Input() titleEllipsis: number = 15;
  @Input() contentEllipsis: number = 100;
  @Input() showEditButton: boolean = false;
  @Input() showDeleteButton: boolean = false;
  @Input() editMode: boolean = false;

  data: any = {
    id: '',
    title: '',
    content: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
    this.data = {
      id: this.id,
      title: this.title,
      content: this.content
    }
  }

  changeFormValue(key, value) {
    this.data[key] = value
  }

  /**
   * View full content of the note
   * @param e Mouse Click Event
   */
  handleClick(e) {
    if (this.id) {
      this.router.navigate([this.baseUrl, this.id])
    } else {
      this.router.navigate([this.baseUrl])
    }
  }
}
