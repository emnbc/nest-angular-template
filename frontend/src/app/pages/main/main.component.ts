import { ChangeDetectorRef, Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav'; 

import { AppService } from '../../services/app.service';

@Component({
  selector: 'nat-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  private mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  @ViewChild('snav', {static: false}) snav: MatSidenav;

  constructor(
    private app: AppService,
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  ngOnInit(): void {
    this.app.menuSwicher.subscribe(() => this.snav.toggle());
    this.app.menuShower.next(true);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this.mobileQueryListener);
    this.app.menuShower.next(false);
  }

}
