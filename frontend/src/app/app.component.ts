import { HostListener, Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit() {
    this.detectMobile();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.detectMobile();
  }

  private detectMobile() {
    this.app.mobile.next(window.innerWidth <= 600 ? true : false);
  }

}
