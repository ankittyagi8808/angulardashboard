import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RouterOutlet } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  fav: string;
  symbol: string;
}
 const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', fav : 'Yes'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' , fav : 'Yes'},
  {position: 3, name: 'eAdapter', weight: 6.941, symbol: 'Li' , fav : 'Yes'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' , fav : 'Yes'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B' , fav : 'Yes'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' , fav : 'Yes'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' , fav : 'Yes'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' , fav : 'Yes'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' , fav : 'Yes'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' , fav : 'Yes'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' , fav : 'Yes'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' , fav : 'Yes'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' , fav : 'Yes'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' , fav : 'Yes'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' , fav : 'Yes'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' , fav : 'Yes'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' , fav : 'Yes'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' , fav : 'Yes'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' , fav : 'Yes'}
 ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}


