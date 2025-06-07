import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly storageKey = 'myProducts';
  private products: Product[] = [];

  constructor() {
    this.loadFromLocalStorage();
  }

  private loadFromLocalStorage(): void {
    const data = localStorage.getItem(this.storageKey);
    this.products = data ? JSON.parse(data) : [];
  }

  private saveToLocalStorage(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.products));
  }

  getProducts(): Product[] {
    return [...this.products].reverse(); 
  }

  postProduct(product: Product): number {
    this.products.push(product);
    this.saveToLocalStorage();
    return this.products.length;
  }

  getProductById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  updateProduct(updatedProduct: Product): boolean {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index > -1) {
      this.products[index] = { ...updatedProduct };
      this.saveToLocalStorage();
      return true;
    }
    return false;
  }

  deleteProduct(id: string): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index > -1) {
      this.products.splice(index, 1);
      this.saveToLocalStorage();
      return true;
    }
    return false;
  }
}
