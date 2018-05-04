import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { NoteEffects } from './note.effects';

describe('PostService', () => {
  let actions$: Observable<any>;
  let effects: NoteEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NoteEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(NoteEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
