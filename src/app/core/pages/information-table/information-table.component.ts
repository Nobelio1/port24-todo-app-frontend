import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-information-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './information-table.component.html',
  styles: ``
})
export class InformationTableComponent {

  public stats = [1,2,3,4]

}
