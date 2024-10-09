import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { SidenavService, SidenavType } from '../../../shared/services/sidenav.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styles: ``
})
export class SearchBarComponent {
  public SidenavType = SidenavType;
  public addMember = input<boolean>(false)
  public sidenavSercie = inject(SidenavService)

  public toggleSidenav(type: number) {
    this.sidenavSercie.toggle(type);
  }

}
