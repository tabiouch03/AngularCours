// Core Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Component
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { MessagingModule} from '../messaging/messaging.module';

// Libraries
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MessagingModule
  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent
  ]
})
export class TemplateModule { }
