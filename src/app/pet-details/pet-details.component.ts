import { Component } from '@angular/core';
import {Pet} from "../pet";
import {PetDataService} from "../pet-data.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-pet-details',
  imports: [
    RouterLink
  ],
  templateUrl: './pet-details.component.html',
  styleUrl: './pet-details.component.css'
})
export class PetDetailsComponent {

  pet: Pet | undefined;

  private petSub: Subscription | undefined;

  constructor(petDataService: PetDataService, activatedRoute: ActivatedRoute) {

    const id: string | null = activatedRoute.snapshot.paramMap.get('id');
    if(id != null){
      this.petSub = petDataService.getPetById(id).subscribe(pet => this.pet = pet);
    }
  }

  ngOnDestroy(){
    this.petSub?.unsubscribe();
  }

}
