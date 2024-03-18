import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SidebarComponent } from '../../shared/layouts/sidebar/sidebar.component';
import { CardComponent } from '../../shared/component/card/card.component';
import { MessageItemComponent } from '../../shared/component/message-item/message-item.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CardComponent, SidebarComponent, MessageItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
})
export class MessagesComponent {
  messages: string[] = ['msg 1','msg 2','msg 3','msg 4','msg 5','msg 6'];
  
}
