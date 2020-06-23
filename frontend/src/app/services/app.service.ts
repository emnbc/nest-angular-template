import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * Trigger for menu button.
   */
  menuSwicher = new Subject<void>();

  /**
   * State for show or hide menu
   */
  menuShower = new BehaviorSubject<boolean>(null);

  /**
   * Mobile state: true - mobile, false - not mobile.
   */
  mobile = new BehaviorSubject<boolean>(null);

}
