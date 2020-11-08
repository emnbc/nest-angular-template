import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'; 
import { ReplaySubject } from 'rxjs'
import { takeUntil } from 'rxjs/operators';

import { AppService } from '../../services/app.service';

@Component({
  selector: 'nat-inner-pages',
  templateUrl: './inner-pages.component.html',
  styleUrls: ['./inner-pages.component.scss']
})
export class InnerPagesComponent implements OnInit, OnDestroy {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  mobile: boolean;

  @ViewChild('snav') snav: MatSidenav;

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.app.mobile
      .pipe(takeUntil(this.destroyed$))
      .subscribe(mobile => this.mobile = mobile);

    this.app.menuSwicher
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => this.snav.toggle());

    this.app.menuShower.next(true);
  }

  ngOnDestroy(): void {
    this.app.menuShower.next(false);

    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
