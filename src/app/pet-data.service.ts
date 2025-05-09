import { Injectable } from '@angular/core';
import {Pet} from "./pet";
import {CatalogJson, PetJson} from "./json-structure";
import {HttpClient} from "@angular/common/http";
import {map, Observable, catchError, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'images/pets/';
  private static catalogUri: string = 'data/pets.json'

  private static json2Pet(petJson: PetJson): Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.age = petJson.age;
    pet.owner = petJson.owner;
    pet.imgSrc = PetDataService.imageFolder + petJson.image;
    return pet;
  }

  // public getAllPets(): Observable<Pet[]> {
  //   return this.http.get<CatalogJson>(PetDataService.catalogUri)
  //     .pipe(
  //       map(catalog => catalog.pets
  //         .map(pet => PetDataService.json2Pet(pet)))
  //     )
  // }

  public getAllPets(): Observable<Pet[]> {
    return this.http.get<CatalogJson>(PetDataService.catalogUri)
      .pipe(
        map(catalog => catalog.pets
          .map(pet => PetDataService.json2Pet(pet))),
      catchError(error => {
        console.error('Error fetching pets:', error);
        return throwError(() => new Error('Error fetching pets'));
      })
    );
  }

  public getPetById(id: string): Observable<Pet | undefined>{
    return this.getAllPets().pipe(
      map(pets => pets.find(pet => pet.id == id))
    )
  }
}
