import { Component } from '@angular/core';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  // !old
  // products: IProduct[] = [];
  // totalOrderPrice: number = 0;
  // * two way binding example:
  selectedCatId: number = 0;
  categories: ICategory[] = [];
  // !
  // * Custome pipe implementation:
  // import {Pipe, PipeTransform} from '@angular/core';
  // @Pipe({
  //   name: 'shorten',
  // })
  // export class shotenPipe implements PipeTransform {
  //   transform(value: string, limit:number=defaultNum): string {
  //     if(!value){
  //        return ''
  //     };
  //    return (limit>=value.length)?value:value.substring(0,limit)+'...'
  //   }
  // }
  // -------------------
  // !old:
  // buy(price: number, quantity: string, evt:MouseEvent){
  // this.totalOrderPrice+= price*Number(quantity);
  // console.log(evt);
  // ? here the emit is called
  // };
  // !
  //--------------------
  // * Signal example:
  // counter=signal<number>(0)
  // increaseCounter(){
  // ? set is used for direct changes
  // ? update is used for computing based on previous value
  //   this.counter.set(this.counter())
  //}
  // -------------------
  // * Services example:
  // todo: @Input example:
  // ? Remove the if condition in html and add (change)='filterProducts()'
  //filteredProducts=this.products;
  // filterProducts(){
  //    this.filteredProducts = this.products.filter((prd)=>prd.catId==this.selectedCatId)
  // }
  // ? Made a new component which will act as the parent:
  // get the select category from the prod(child componenet) to the order(parent). get the category array and put it in the order.ts and selectCatId too.
  // ? Parent can talk with the child using it's selector:
  // give the selectedCatId to a a property called in the order (ex:sentSelectedCatId)
  // ?-- <app-products [sentSelectedCatId]='selectedCatId'></app-products>
  // @Input('sentSelectedCatId') recievedCatId:number=0 => in the products (since it is a child)
  // Products implements 'OnChanges' since it listens to every input change
  // todo: @Output example:
  // we have no method in lifecycle for listening to outtputs so the solution is 'Events'
  //? In prouduct ts define the event :
  // @Output() onOrderPriceChange:EventEmitter= new EventEmitter<number>()
  // each time buy is called, in the body add : this.onOrderPriceChanged.emit(this.totalOrderPrice)
  // in <app-products (onOrderPriceChanged)='setOrderPrice($event)'
  // then in order.ts name totalOrderPrice:number=0
  // setOrderPrice(receivedTotalPrice:number (which is value emitted)){
  // this.orderPrice = receivedTotalPrice
  // }
  //!----------------------------------
}
