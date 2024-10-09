import { Component } from '@angular/core';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { MemberCardComponent } from '../../components/member-card/member-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  standalone: true,
  templateUrl: './members.component.html',
  imports: [SearchBarComponent, MemberCardComponent, CommonModule],
})
export class MembersComponent {
}
