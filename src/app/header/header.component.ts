import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vdo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  /**
   * Is user verified?
   */
  userVerified = false;

  constructor() { }

  ngOnInit() {
  }
}
