import { Component, OnDestroy, Optional } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnDestroy {

  form: FormGroup;
  error = '';
  type = 0;

  // #region getCaptcha
  count = 0;
  interval$: any;

  constructor(
    fb: FormBuilder,
    modalSrv: NzModalService,
    @Optional()
    public msg: NzMessageService,
    private router: Router,
    private store: LocalStorageService,
    private http: HttpService,
  ) {
    this.form = fb.group({
      userName: [null, [Validators.required, Validators.minLength(4)]],
      password: [null, Validators.required],
      mobile: [null, [Validators.required, Validators.pattern(/^1\d{10}$/)]],
      captcha: [null, [Validators.required]],
      remember: [true],
    });
    modalSrv.closeAll();
  }

  // #region fields

  get userName() {
    return this.form.controls.userName;
  }
  get password() {
    return this.form.controls.password;
  }
  get mobile() {
    return this.form.controls.mobile;
  }
  get captcha() {
    return this.form.controls.captcha;
  }

  // #endregion

  switch(ret: any) {
    this.type = ret.index;
  }

  getCaptcha() {
    if (this.mobile.invalid) {
      this.mobile.markAsDirty({ onlySelf: true });
      this.mobile.updateValueAndValidity({ onlySelf: true });
      return;
    }
    this.count = 59;
    this.interval$ = setInterval(() => {
      this.count -= 1;
      if ( this.count <= 0 ) { clearInterval(this.interval$); }
    }, 1000);
  }

  submit() {
    this.error = '';
    let userObj = {};
    if (this.type === 0) {
      this.userName.markAsDirty();
      this.userName.updateValueAndValidity();
      this.password.markAsDirty();
      this.password.updateValueAndValidity();
      if (this.userName.invalid || this.password.invalid) { return; }
      userObj = {
        userName: this.userName.value,
        password: this.password.value,
      };
      this.http.post('/manage/login', userObj).subscribe(res => {
        console.log('res', res);
      });
      this.saveUser(userObj);
    } else {
      this.mobile.markAsDirty();
      this.mobile.updateValueAndValidity();
      this.captcha.markAsDirty();
      this.captcha.updateValueAndValidity();
      if (this.mobile.invalid || this.captcha.invalid) { return; }
      userObj = {
        mobile: this.mobile.value,
        password: this.password.value,
      };
      this.saveUser(userObj);
    }
  }

  saveUser(userObj: object): void {
    this.store.set('user', userObj);
    this.router.navigate(['/heroes']);
  }

  // #region social
  open() {

  }

  ngOnDestroy() {
    if (this.interval$) { clearInterval(this.interval$); }
  }

}
