import { ChangeDetectorRef, Component, OnDestroy, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav'; 

import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnDestroy {

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;

  @ViewChild('snav', {static: false}) snav: MatSidenav;

  constructor(
    private app: AppService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.app.menuSwicher.subscribe(() => this.snav.toggle());
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
