import { Component } from '@angular/core';
import { LucideAngularModule, LogIn,Pencil,Trash2 } from 'lucide-angular';
@Component({
  selector: 'app-member-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './member-card.component.html',
  styles: ``
})
export class MemberCardComponent {
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;
}
