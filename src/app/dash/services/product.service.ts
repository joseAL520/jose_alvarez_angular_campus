import { Injectable } from '@angular/core';
import { Category, Product } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

Products: Product[] = [
  {
    id: '1sda2313ad123',
    name: 'smartphone sAmsUng galaxy S21',
    description: 'Pantalla AMOLED de 6.2", cámara triple y 128GB de almacenamiento.',
    price: 3200,
    category: Category.Electronica,
    available: 'true'
  },
  {
    id: '123123123',
    name: 'Camiseta deportiva Nike',
    description: 'Camiseta transpirable ideal para entrenamientos.',
    price: 120,
    category: Category.Ropa,
    available: 'true'
  },
];



  getProducts(){
   return [...this.Products].reverse();
  }

  PostProducts(products:Product){
    console.log(products)
    return this.Products.push(products)
  }

  getProductsById(idProduct:string):Product | undefined{
    return this.Products.find( ({id}) => id === idProduct);
  }

  updateProduct(updatedProduct: Product ): boolean {
    const index = this.Products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.Products[index] = { ...updatedProduct };
      return true;
    }
    return false;
  }


  deleteProduct(id: string): boolean {
    const index = this.Products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.Products.splice(index, 1);
      return true;
    }
    return false;
  }


}
