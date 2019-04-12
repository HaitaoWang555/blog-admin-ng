import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShareModule } from 'src/app/share/share.module';

import { DefaultComponent } from 'src/app/layout/default/default.component';
import { SiderComponent } from './sider/sider.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserComponent } from './header/components/user/user.component';

@NgModule({
  declarations: [DefaultComponent, SiderComponent, HeaderComponent, FooterComponent, UserComponent],
  imports: [
    ShareModule,
    RouterModule,
  ]
})
export class DefaultModule { }
