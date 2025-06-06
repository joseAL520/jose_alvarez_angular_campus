import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "../../components/menu/menu.component";

@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './layout-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
