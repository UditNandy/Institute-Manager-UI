import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public currentRoute = new Subject();
  constructor() {}
}
