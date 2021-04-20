import { CustomBackendService } from './../services/custom-backend.service';
import { Message } from './../models/Message';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading-message',
  templateUrl: './reading-message.component.html',
  styleUrls: ['./reading-message.component.scss']
})
export class ReadingMessageComponent implements OnInit {

  messages : Message[];

  @Input() count = 10;

  constructor(private $messageBackend: CustomBackendService) {
    console.log(this.$messageBackend.getValue())
    this.messages = [];
  }

  ngOnInit(): void {
    this.$messageBackend.getMessages((messages: Message[]) => this.messages = messages)
    console.log(this.$messageBackend.getValue())
  }

}
