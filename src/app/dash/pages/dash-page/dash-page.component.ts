import { ChangeDetectionStrategy, Component, inject, resource } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dash-page',
  imports: [TableComponent],
  templateUrl: './dash-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashPageComponent {

  productsServices = inject(ProductService)


  getproducts(){
    return this.productsServices.getProducts()
  }

  deleteProducts(id:any){
    return this.productsServices.deleteProduct(id)
  }

  ngOnInit(): void {
     this.getproducts()  
  }

}
