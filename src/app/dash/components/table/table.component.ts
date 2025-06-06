import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../interfaces/products.interfaces';
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

  sendIdProductos(id:string){
    this.idProducts.emit(id)
  }

}
