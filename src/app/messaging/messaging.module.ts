import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications/notifications.component';
import { ReadingMessageComponent } from './reading-message/reading-message.component';
import { WritingMessageComponent } from './writing-message/writing-message.component';
import { HttpClientModule} from '@angular/common/http';
import { MessageUiComponent } from './message-ui/message-ui.component'
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    NotificationsComponent,
    ReadingMessageComponent,
    WritingMessageComponent,
    MessageUiComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    NotificationsComponent,
    ReadingMessageComponent,
    WritingMessageComponent
  ]
})
export class MessagingModule { }
