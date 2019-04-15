import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from './user';

import { LocalStorageService } from 'src/app/services/local-storage.service';
import { USER_NAMESPACE } from 'src/app/services/local-storage.namespace';
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
    this.store.remove(USER_NAMESPACE);
    // TODO: use baseUrl
    window.location.href = '/';
  }

  ngOnInit() {
  }

}
