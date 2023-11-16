import { Component } from '@angular/core';
import { GroceryService } from '../grocery.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  groceryItems: any[] = [];
  constructor(private groceryService: GroceryService) { }

   ngOnInit(): void {
    this.groceryService.getGroceryItems().subscribe((items: any[]) => {
       this.groceryItems = items;
     });
   }

  cartItems: any[] = [];

  addToCart(item: any): void {
    this.cartItems.push(item); //
  }
}
