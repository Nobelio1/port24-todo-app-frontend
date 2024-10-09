import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SidenavService } from '../../../shared/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidenav.component.html',
  styles: ``
})
export class SidenavComponent {

  public sidenavService = inject(SidenavService);
  public state = this.sidenavService.sidenavState;

}
