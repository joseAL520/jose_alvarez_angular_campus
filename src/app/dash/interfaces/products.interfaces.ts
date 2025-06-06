export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category: Category;
  available: boolean;
}

export enum Category {
  Electronica = 'Electrónica',
  Ropa = 'Ropa',
  Hogar = 'Hogar',
  Alimentos = 'Alimentos',
  Juguetes = 'Juguetes',
  Libros = 'Libros',
  Deportes = 'Deportes',
  Belleza = 'Belleza'
} 
