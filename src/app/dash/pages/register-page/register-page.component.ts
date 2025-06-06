import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormComponent } from "../../components/form/form.component";

@Component({
  selector: 'app-register-page',
  imports: [FormComponent],
  templateUrl: './register-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent { }
