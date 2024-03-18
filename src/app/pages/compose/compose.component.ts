import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layouts/sidebar/sidebar.component';
import { CardComponent } from '../../shared/component/card/card.component';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [CardComponent, SidebarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent {

}
