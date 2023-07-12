import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css'],
})
export class HomeViewComponent {
  protected loggedIn: boolean = false;

  constructor(private router: Router) {}

  ngOnInit = () => {
    this.loggedIn = false;
  };

  isAdminLoggedIn = (event: any) => {
    console.log('event triggered', typeof this.loggedIn);
    this.loggedIn = true;
    // this.loggedIn = Boolean(event.value);
    console.log(typeof this.loggedIn);
    this.router.navigate(['/admindashboard']);
  };
}
