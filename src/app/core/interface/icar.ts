export interface Icar {
        name:string,
        color:string,
        price:number,
        height?:number,
        calculateDiscountPercent(percent:number): number;
        
}
