import { Injectable, signal } from '@angular/core';
import { SidebarItems } from '../interfaces/sidebar.model';
import { SidebarLinks } from '../constants/sidebarLinks';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private _navLinks = signal<SidebarItems[]>([])
  private _navLinksStatics = signal<SidebarItems[]>([])

  constructor() {
    this._navLinks.set(SidebarLinks.menuItemsGeneral)
    this._navLinksStatics.set(SidebarLinks.menuItemsViews)
  }

  get showNawLinks() {
    //todo: falta filtrar por permisos
    return this._navLinks()
  }

  get showNavLinksStatics() {
    return this._navLinksStatics()
  }

}
