import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from './user';

import { LocalStorageService } from 'src/app/services/local-storage.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent implements OnInit {

  user: User = {
    avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
    name: 'angular',
  };
  constructor(
    private store: LocalStorageService,
    ) { }

  logout() {
    this.store.remove('user');
    window.location.href = '/';
  }

  ngOnInit() {
  }

}
