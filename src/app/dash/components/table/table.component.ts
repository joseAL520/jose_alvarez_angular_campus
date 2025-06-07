import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Category, Product } from '../../interfaces/products.interfaces';
import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { AvailablePipePipe } from '../../pipe/available-pipe.pipe';

@Component({
  selector: 'app-table',
  imports: [RouterLink,CurrencyPipe, TitleCasePipe,AvailablePipePipe],
  templateUrl: './table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  
  products = input<Product[]>()
  idProducts = output<string>()

  categoriaSeleccionada = signal<string>('');
  categorias= Object.values(Category)

  get productsFiltrados() {
    return this.products()?.filter(product => {
      return this.categoriaSeleccionada() === '' || product.category === this.categoriaSeleccionada();
    });
  }


  sendIdProductos(id:string){
    this.idProducts.emit(id)
  }

}
