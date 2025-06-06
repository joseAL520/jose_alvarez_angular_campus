import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";

@Component({
  selector: 'app-dash-page',
  imports: [TableComponent],
  templateUrl: './dash-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashPageComponent { }
