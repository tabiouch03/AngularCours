import { Message } from './../models/Message';
import { Component, Input, OnInit } from '@angular/core';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-message-ui',
  templateUrl: './message-ui.component.html',
  styleUrls: ['./message-ui.component.scss']
})
export class MessageUiComponent implements OnInit {

  @Input() message!: Message;

  constructor() { }

  ngOnInit(): void {
  }

}
