import { Icar } from './icar';

export class Car implements Icar{
    constructor(
        public name:string,
        public color:string,
        public price:number
    ){

    }
    calculateDiscountPercent(percent:number):number{
        return (this.price - (this.price * (percent / 100)));
    }
}
