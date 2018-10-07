import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modular',
  templateUrl: './modular.component.html',
  styleUrls: ['./modular.component.css']
})
export class ModularComponent implements OnInit {
    constructor(public router: Router) {

  }  
  ngOnInit() {
  this.router.navigate(['/', '1']);
  }
}
