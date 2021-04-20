import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() elements!: number;

  name = 'Fabio';

  constructor() { }

  ngOnInit(): void {
  }

  change(): void {
    if (this.name.length !== 0) {
      this.name = '';
    } else {
      this.name = 'FABIO';
    }
  }
}
