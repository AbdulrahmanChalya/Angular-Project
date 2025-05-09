import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-catalog',
  imports: [
    AsyncPipe,
    RouterLink,
    NgIf,
    NgForOf
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  pets: Observable<Pet[]>;
  noPets: any;
  trackByPetId: any;

  constructor(petDataService: PetDataService) {
    this.pets = petDataService.getAllPets();
  }

}
