import {Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: 'card.html',
  styleUrls: ['card.css'],
})
export class CardComponent {
    constructor(public router: Router) {

  }
  navigateToJobs() {
    this.router.navigate(['/jobs', 'Rfx']);
    }
}
