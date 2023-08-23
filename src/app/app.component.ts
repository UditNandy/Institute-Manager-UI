import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Institute-Manager-UI';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit() {
    this.router.events.subscribe((value: any) => {
      if (value?.routerEvent?.url) {
        this.dataService.currentRoute.next(value?.routerEvent?.url);
      }
    });
  }
}
