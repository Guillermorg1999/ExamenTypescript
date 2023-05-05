import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataChar } from 'src/app/interfaces/character.interface';

import { CharacterDB } from '../../interfaces/characterDb.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {

  charToUpdate!: CharacterDB;

  constructor(private firebase: AngularFirestore) {}

  obtenerDatosDb(): Observable<any> {

    return this.firebase.collection('Characters').snapshotChanges();

  }

  VerificarDocumento(character: DataChar): Promise<boolean> {

    return this.firebase.collection('Characters').doc(character.id.toString()).ref.get().then(doc => {
      if( doc.exists ) { return true; }
      else { return false; }
    })

  }

  guardarDatos(character: CharacterDB) {
    return this.firebase.collection('Characters').doc(character.id.toString()).set(character);
  }

  actualizarDatos(updChar: any): Promise<any> {

    return this.firebase
      .collection('Characters')
      .doc(updChar.id.toString())
      .update(updChar);
      
  }

  async borrarDatos(id: string) {
    localStorage.setItem(`Id: ${id}`, id);
    return await this.firebase.collection('Characters').doc(id).delete();
  }
}
