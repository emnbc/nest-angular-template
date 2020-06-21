import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  /**
   * Trigger for menu button.
   */
  menuSwicher = new Subject<void>();
  menuShower = new Subject<boolean>();

  /**
   * Mobile state: true - mobile, false - not mobile.
   */
  mobile = new Subject<boolean>();

}
