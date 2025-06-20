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
  
  idProductoDelete: string | null = null;
  productInfo: any = null;

  categoriaSeleccionada = signal<string>('');
  categorias= Object.values(Category)

  get productsFiltrados() {
    return this.products()?.filter(product => {
      return this.categoriaSeleccionada() === '' || product.category === this.categoriaSeleccionada();
    });
  }


  openModal(id: string) {
    this.idProductoDelete = id;
    const modal = document.getElementById('my_modal_Delete') as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  }

  openInfoModal(product: any) {
    this.productInfo = product;
    const modal: any = document.getElementById('modal_info_producto');
    if (modal?.showModal) {
      modal.showModal();
    }
  }


  sendIdProductos(id: string | null) {
  if (id !== null) {
      this.idProducts.emit(id)
      const modal = document.getElementById('my_modal_Delete') as HTMLDialogElement;
      if (modal) {
        modal.close();
      }
    }
  } 

}
