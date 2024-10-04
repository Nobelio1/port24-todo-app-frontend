import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../../shared/services/sidebar.service';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule, CommonModule, AngularSvgIconModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  public sidebarService = inject(SidebarService)

}
