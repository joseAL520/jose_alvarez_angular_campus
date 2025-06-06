import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../utils/utils';
import { Category, Product } from '../../interfaces/products.interfaces';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { of, switchMap } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  private idGenel = '';

  producServices = inject(ProductService)

  isActiveAlertSuccess = signal<boolean>(false)
  router = inject(Router)
  activateRouter= inject(ActivatedRoute)


  categori = Object.values(Category)
  private fb  = inject(FormBuilder)
  formUtils= FormUtils; 
  formOutput = output<any>();
  myForm = this.fb.group({
    id:[uuidv4()],
    name: ['',[Validators.required,Validators.minLength(10)]],
    description: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(100)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    category: ['',Validators.required],
    available: ['',Validators.required]
});

  onSubmit() {
    this.myForm.markAllAsTouched();
    if(!this.myForm.valid)return
    if(this.idGenel) return this.updateClient()
      
    const newClient = this.myForm.value
    this.messengerAlert()
    this.formOutput.emit(newClient)
    //{id: uuidv4()}
    this.router.navigateByUrl('/dashboard');
    this.myForm.reset({id: uuidv4()})
  }

  messengerAlert(){
    this.isActiveAlertSuccess.set(true)
    setTimeout(() => {
    this.isActiveAlertSuccess.set(false)
   }, 3000);
  }

  updateClient(){
    const formValue = this.myForm.value;
    const updatedProduct: Product = {
      id: this.idGenel,
      name: formValue.name!,
      description: formValue.description ?? '',
      price: formValue.price!,
      category: formValue.category as Category, 
      available: formValue.available!
    };
    this.producServices.updateProduct(updatedProduct)
    this.router.navigateByUrl('/dashboard');
  }

  ngOnInit(): void {
    if(!this.router.url.includes('/editer')) return
  
    this.activateRouter.params.pipe(
      switchMap((params)  => {
           const id = params['id'];
           this.idGenel = id ;
          const produts = this.producServices.getProductsById(id);
           return  of(produts)
      })
    ).subscribe(
      prod => {
         if (!prod) {
            this.router.navigateByUrl('/');
            return;
         }
        this.myForm.patchValue({
          name: prod.name,
          description: prod.description,
          price: prod.price,
          category: prod.category,
          available: prod.available,
        })
      }
    );

 }

}
