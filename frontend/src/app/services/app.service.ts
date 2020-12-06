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
  showMenu = new BehaviorSubject<boolean>(null);

  /**
   * Width state: global width state in number.
   */
  width = new BehaviorSubject<number>(null);

}
