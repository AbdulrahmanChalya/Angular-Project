import {Component, Input} from '@angular/core';
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-footer',
  imports: [
    DatePipe
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  today: Date
  @Input() name: string = "Sheridan College"

  constructor() {
    this.today = new Date()
  }
}
