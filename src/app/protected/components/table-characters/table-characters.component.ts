import { Component, OnInit } from '@angular/core';

import { GetCharactersService } from '../../services/characters.service';
import { CharactersService } from '../../services/methods-characters.service';
import { CharacterDB } from 'src/app/interfaces/characterDb.interface';

@Component({
  selector: 'app-table-characters',
  templateUrl: './table-characters.component.html',
  styleUrls: ['./table-characters.component.css'],
})
export class TableCharactersComponent implements OnInit {

  arrCharacters: CharacterDB[] = [];

  constructor(
    private httpCharacterService: GetCharactersService,
    private dbCharacterService: CharactersService
  ) {}

  verificarRegistros() {
    this.httpCharacterService.getCharacters().subscribe((arrCharacters) => {
      
      arrCharacters.forEach((char) => {
        this.dbCharacterService.VerificarDocumento(char).then((docExist) => {
          if (!docExist) {
            let docChar = {
              id: char.id,
              name: char.name,
              species: char.species,
              status: char.status,
              location: char.location.name,
              origin: char.origin.name,
            };
            
            this.dbCharacterService.guardarDatos(docChar);
          }
        });
      });

      this.mostrarRegistros();
    });
  }

  public async mostrarRegistros(): Promise<void> {

    this.dbCharacterService.obtenerDatosDb()
      .subscribe((response) => {

        this.arrCharacters = [];

        response.forEach((doc: any) => {

          let document = doc.payload._delegate.doc?._document.data.value.mapValue.fields;

          if( localStorage.getItem(`Id: ${document.id.integerValue}`) == null ) {

            this.arrCharacters.push({
              id: document.id.integerValue,
              name: document.name.stringValue,
              species: document.species.stringValue,
              status: document.status.stringValue,
              location: document.location.stringValue,
              origin: document.origin.stringValue,
            });

          }

        });

      });

  }

  async borrarRegistro(id: number) {
    await this.dbCharacterService.borrarDatos(id.toString());
    this.mostrarRegistros();
  }

  ngOnInit(): void {
    this.verificarRegistros();

    // console.log(Math.floor( Math.floor(Math.random()*100) * 100 / Math.floor(Math.random()*100) * 100 ))
  }
}