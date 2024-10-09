import { Injectable, signal } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

export enum SidenavType{
  ADD_MEMBER = 1,
  ADD_TABLE = 2
}

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private sidenav: MatDrawer | null = null;
  public sidenavState = signal<number>(0);

  public setSidenav(sidenav: MatDrawer) {
    this.sidenav = sidenav;
  }

  public toggle(type: SidenavType) {
    console.log('toggle', type);
    this.sidenavState.set(type);
    return this.sidenav?.toggle();
  }

}
