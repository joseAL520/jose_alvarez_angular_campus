import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-page',
  imports: [RouterOutlet],
  templateUrl: './layout-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutPageComponent { }
