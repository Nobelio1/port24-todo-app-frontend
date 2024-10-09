import { Component, inject, ViewChild } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatDrawer, MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {HeaderComponent} from "../../components/header/header.component";
import { SidenavService } from '../../../shared/services/sidenav.service';
import { SidenavComponent } from '../../components/sidenav/sidenav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    MatSidenavModule,
    SidenavComponent
  ],
  templateUrl: './layout.component.html',
  styles: ``
})
export default class LayoutComponent {
  mode = 'over' as MatDrawerMode
  hasBackdrop = true
  position = 'end' as 'start' | 'end'

  @ViewChild('sidenavId') sidenav: MatDrawer | undefined;

  public sidenavSercie = inject(SidenavService)

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenavSercie.setSidenav(this.sidenav);
    }
  }

}
