import { Component, OnInit } from '@angular/core';
import { Element } from '../../core/enums/element.enum';
import { Itest } from '../../core/interface/itest';
import { Car } from '../../core/interface/car';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

name = 'Demo';
type = Element.Metal;

pElement: Itest[] = [
  {
  atnumber: 1,
  atname: 'Hydrogen',
  symbol: 'H',
  weight: 1.0079,
  description: 'Hydrogen is a chemical element with symbol H and atomic number 1. With a standard atomic weight of 1.008, hydrogen is the lightest element on the periodic table.'
  },
  {
    atnumber: 2,
    atname: 'Helium',
    symbol: 'He',
    weight: 4.0026,
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  },
  {
    atnumber: 3,
    atname: 'Lithium',
    symbol: 'Li',
    weight: 6.941,
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }

];
constructor(
  private authenticationService: AuthService,

){}

newCar: Car = new Car('BMW', 'Black', 100000);
discount = this.newCar.calculateDiscountPercent(10);
  ngOnInit(): void {
    console.log(this.type);

  }

// logout(){
// this.authenticationService.logout();
// console.log('Clicked logout');
// }

}
