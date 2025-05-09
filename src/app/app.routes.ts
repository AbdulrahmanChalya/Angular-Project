import { Routes } from '@angular/router';
import {CatalogComponent} from "./catalog/catalog.component";
import {PetDetailsComponent} from "./pet-details/pet-details.component";

export const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'pets/:id', component: PetDetailsComponent},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'},
  {path: '**', redirectTo: 'catalog'}
];
