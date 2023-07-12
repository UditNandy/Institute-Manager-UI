import { Component } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent {
  protected loggedIn: boolean = false;

  constructor() {}

  ngOnInit = () => {
    this.loggedIn = false;
  };

  isAdminLoggedIn = (event: any) => {
    this.loggedIn = true;
    // this.loggedIn = Boolean(event.value);
  };
}
