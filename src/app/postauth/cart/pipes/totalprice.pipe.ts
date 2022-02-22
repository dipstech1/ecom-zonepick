import { Pipe, PipeTransform } from '@angular/core';  

@Pipe({  
    name: 'total',  
    pure: true  
})  

export class TotalPipe implements PipeTransform {  
    transform(price:any,quantity:number): any {  
        console.log(price,quantity);
        
      return (Number(price)*quantity)
      
    }  
}  