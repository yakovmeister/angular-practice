import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject'

@Injectable()
export class NotesService {

  private storage = window.localStorage;


  constructor(private http: HttpClient) { }

  showNote(id?: string) {
    let store: any = JSON.parse(this.storage.getItem('content'))
    let result = store.notes.find(note => note.id === id)

    return result
  }

  getNotes(query?: string) {
    let store: any = JSON.parse(this.storage.getItem('content'))

    if (!store) {
      store = {
        notes: [],
        users: []
      }
    }

    let results = store.notes

    if (query) {
      results = store.notes.filter(note => {
        return note.title.match(new RegExp(`(${query})`, 'gmi'))
        || note.content.match(new RegExp(`(${query})`, 'gmi'))
        || note.id.match(new RegExp(`(${query})`, 'gmi'))
      })
    }


    return results
  }

  createNote(content) {
    content.id = Math.random().toString(36).substring(7)

    let store = JSON.parse(this.storage.getItem('content'))

    if (!store) {
      store = {
        notes: [],
        users: []
      }
    }

    store.notes.push(content)

    this.storage.setItem('content', JSON.stringify(store))
    this.showNote(content.id)
    return this.getNotes()
  }

  updateNote(content) {
    let store = JSON.parse(this.storage.getItem('content'))

    let notePosition = store.notes.indexOf(
      store.notes.find(note => note.id === content.id)
    )

    store.notes[notePosition] = content

    this.storage.setItem('content', JSON.stringify(store))
    return this.getNotes()
  }

  deleteNote(id) {
    let store = JSON.parse(this.storage.getItem('content'))

    let notePosition = store.notes.indexOf(
      store.notes.find(note => note.id === id)
    )

    store.notes.splice(notePosition, 1)

    this.storage.setItem('content', JSON.stringify(store))
    return this.getNotes()
    // this.showNote()
  }
}

interface Results {
  items: Array<any>;
}
