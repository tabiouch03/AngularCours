import { CustomBackendService } from './../services/custom-backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  count!: number;
  value = 1;

  constructor(private $backendMessage: CustomBackendService) {
    console.log(this.$backendMessage.getValue())
   }

  ngOnInit(): void {
    this.$backendMessage.getMessages((messages: string | any[]) => this.count = messages.length)
    this.updateValue();
  }

  updateValue(): void {
    this.$backendMessage.setValue(this.value)
    console.log(this.$backendMessage.getValue())
  }

}
