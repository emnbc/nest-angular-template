import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HttpHelperService } from '../../services/http-helper.service';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service'
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'nat-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {

  user: User;
  width: number;
  error: string = null;

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement>;

  constructor(
    private auth: AuthService,
    private app: AppService,
    private http: HttpHelperService
    ) { }

  ngOnInit(): void {
    this.auth.user
      .pipe(takeUntil(this.destroyed$))
      .subscribe(user => this.user = user);
    this.app.width
      .pipe(takeUntil(this.destroyed$))
      .subscribe(width => this.width = width);
  }

  uploadFile(files: File[]) {

    this.error = null;

    const formData: FormData = new FormData();
    formData.append('file', files[0], files[0].name);

    if (files[0].size > 1048576) {
      this.error = 'Max file size 1 MB';
      return;
    }

    this.http.upload('profile/upload', formData).subscribe(() => {
      this.auth.refreshUser();
      this.fileInput.nativeElement.value = null;
    });
  }

  get mobile() {
    return this.width <= 960;
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
