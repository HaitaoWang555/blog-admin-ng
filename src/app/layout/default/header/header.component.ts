import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {

  @Input() isCollapsed: Boolean;

  @Output() changeCollapsed = new EventEmitter<Boolean>();

  trigger() {
    this.isCollapsed = !this.isCollapsed;
    this.changeCollapsed.emit();
  }
}
