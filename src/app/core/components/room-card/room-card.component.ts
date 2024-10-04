import { Component } from '@angular/core';
import { LucideAngularModule, LogIn,Pencil,Trash2 } from 'lucide-angular';

@Component({
  selector: 'app-room-card',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './room-card.component.html',
  styles: ``,
})
export class RoomCardComponent {
  //Icons
  readonly LogIn = LogIn;
  readonly Pencil = Pencil;
  readonly Trash2 = Trash2;
}
