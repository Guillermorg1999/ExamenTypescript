import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Character } from 'src/app/interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class GetCharactersService {

  constructor(private http: HttpClient, private firebase: AngularFirestore) { }

  getCharacters() {

    return this.http.get<Character>('https://rickandmortyapi.com/api/character')
      .pipe(
        map(
          response => response.results
        )
      )
  }

}
