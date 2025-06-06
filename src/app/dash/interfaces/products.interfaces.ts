export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  available: string;
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
