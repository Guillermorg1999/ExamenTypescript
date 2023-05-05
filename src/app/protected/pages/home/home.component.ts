import { Component, ViewChild, ElementRef } from '@angular/core';

import { CharactersService } from '../../services/methods-characters.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('name') name!: ElementRef<HTMLInputElement>;
  @ViewChild('specie') specie!: ElementRef<HTMLInputElement>;
  @ViewChild('status') status!: ElementRef<HTMLInputElement>;
  @ViewChild('location') location!: ElementRef<HTMLInputElement>;
  @ViewChild('origin') origin!: ElementRef<HTMLInputElement>;

  constructor( private dbCharacterService: CharactersService ) {}


  saveCharacter() {
    this.dbCharacterService.guardarDatos({
      id: Math.floor( Math.floor(Math.random()*100) * 100 / Math.floor(Math.random()*100) * 100 ),
      name: this.name.nativeElement.value,
      species: this.specie.nativeElement.value,
      status: this.status.nativeElement.value,
      location: this.location.nativeElement.value,
      origin: this.origin.nativeElement.value,
    })
    
  }

}
