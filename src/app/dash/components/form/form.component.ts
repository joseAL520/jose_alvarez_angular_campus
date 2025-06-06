import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../utils/utils';
import { Category, Product } from '../../interfaces/products.interfaces';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';



@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  private idGenel = '';

  isActiveAlertSuccess = signal<boolean>(false)
  router = inject(Router)
  activateRouter= inject(ActivatedRoute)


  categori = Object.values(Category)
  private fb  = inject(FormBuilder)
  formUtils= FormUtils; 
  formOutput = output<any>();
  myForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(10)]],
    description: ['',[Validators.required,Validators.minLength(50),Validators.maxLength(100)]],
    price: [0, [Validators.required, Validators.min(0.01)]],
    cate: ['',Validators.required],
    available: ['',Validators.required]
});

  onSubmit() {
    this.myForm.markAllAsTouched();
    if(!this.myForm.valid)return

    console.log(this.idGenel)
    if(this.idGenel) return this.updateClient()




    const newClient = this.myForm.value
    this.messengerAlert()
    this.formOutput.emit(newClient)
    //{id: uuidv4()}
    this.myForm.reset( )
  }

  messengerAlert(){
    this.isActiveAlertSuccess.set(true)
    setTimeout(() => {
    this.isActiveAlertSuccess.set(false)
   }, 3000);
  }

  updateClient(){
    const client = this.myForm.value;
    //this.serviceClient.updateClients(this.idGenel, client).subscribe();
    this.router.navigateByUrl('/dashboard');
    console.log('update')
  }

  
  ngOnInit(): void {
    if(!this.router.url.includes('/')) return
  
    this.activateRouter.params.pipe(
      switchMap(params  => {
           const id = params['id'];
            //return this.serviceClient.getClientsIdBy(id);
          return this.idGenel = id ;
      })
    ).subscribe(
      prod => {
         if (!prod) {
            this.router.navigateByUrl('/');
            return;
         }
        this.myForm.patchValue({
          name: 'asdasdasdasd',
          description: 'adsasdasdadsasdasdadsasdasdadsasdasdadsasdasdadsasdasdadsasdasd',
          price: 10000,
          cate: 'hogar',
          available: 'disponible',
        })
      }
    );

  }
}


