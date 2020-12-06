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
    this.detectWidth();
  }

  @HostListener('window:resize', [])
  onResize() {
    this.detectWidth();
  }

  private detectWidth() {
    this.app.width.next(window.innerWidth);
  }

}
