import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-register-page',
  imports: [FormComponent],
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent { 

  productServices = inject(ProductService)

  formPost($event: any) {
    this.productServices.postProduct($event)
  }

}
